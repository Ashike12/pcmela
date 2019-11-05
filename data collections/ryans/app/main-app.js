var request = require('request');
var fs = require('fs');

(function () {
    'use strict';
    angular.module('app')
        .controller('MainController', constructor);

    constructor.$inject = ["$interval", "$timeout", "$q", "$http", "$scope", "$locale", "$mdDialog", "mongoService"];

    function constructor($interval, $timeout, $q, $http, $scope, $locale, $mdDialog, mongoService) {
        const options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }

        var vm = this;


        // ryans computer data collection starts
        //#region 
        vm.progressValueRyans = 0.0;
        vm.progressIncrementRatioRyans = 0.0;
        vm.ryansInfo = {
            "totalParentLinks": undefined,
            "currentlyTotalProcessedParent": undefined
        };
        var allProductResultsRyans = {};
        var ryansProductListsLink = [];

        function GetProductInfoFromRyans(productName) {
            var deffered = $q.defer();
            //let requestURL = "http://localhost:8081/";
            let requestURL = "https://ryanscomputers.com/" + productName + ".html";

            request.get(requestURL, options, function (error, response, body) {
                var result = {};
                console.log("Parsing html ......");
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var productTable = rootElement.querySelector("#product-attribute-specs-table");
                    if (productTable) {
                        var productInfos = productTable.querySelectorAll('tr');
                        if (productInfos && productInfos.length > 0) {
                            result[productName] = {};
                            var priceTag = rootElement.querySelector('.product-shop .special-price');
                            if (priceTag && priceTag.firstElementChild) {
                                var productPriceText = rootElement.querySelector('.product-shop .special-price').firstElementChild.innerText;
                                result[productName]["Price"] = productPriceText.split("Tk ").length == 2 ? productPriceText.split("Tk ")[1] + " Tk" : "Price is not found";
                            } else {
                                result[productName]["Price"] = "Upcoming Product."
                            }
                            _.forEach(productInfos, function (tableRow) {
                                var objectKey = tableRow.firstElementChild ? tableRow.firstElementChild.innerText : null;
                                var objectValue = tableRow.lastElementChild ? tableRow.lastElementChild.innerText : null;
                                if (objectKey && objectValue) {
                                    result[productName][objectKey] = objectValue;
                                }
                            });
                        } else {
                            result['ERROR'] = "No table rows are found";
                        }
                    } else {
                        result['ERROR'] = "#product-attribute-specs-table id is not found in html";
                    }

                } else {
                    result['ERROR'] = productName + "Not found";
                }
                deffered.resolve(result);
            },
                function (error) {
                    deffered.resolve(error);
                });
            return deffered.promise;
        }
        function allProductListFromRyans() {
            
        }

        function GetLinksFromRyans(domEle) {
            var result = [];
            var productNamesList = domEle.querySelectorAll('li');
            _.forEach(productNamesList, function (product) {
                var productNamesListWithAnchorTag = product.querySelectorAll('a');
                _.forEach(productNamesListWithAnchorTag, function (productWithLink) {
                    var anchorHREF = productWithLink.href;
                    if (anchorHREF.indexOf('.html') > 0 && anchorHREF.indexOf('all-') < 0)
                        // if(anchorHREF.indexOf('component') > 0)
                        result.push(anchorHREF)
                })
            });
            return result;
        }

        function FetchingProductListFromRyans(url) {
            var deffered = $q.defer();
            var result = [];
            request.get(url, options, function (error, response, body) {
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var productNamesListWithAnchorTag = rootElement.querySelectorAll(".products-grid a");
                    _.forEach(productNamesListWithAnchorTag, function (productWithLink) {
                        var anchorHREF = productWithLink.href;
                        if (anchorHREF.indexOf('.html') > 0)
                            result.push(anchorHREF)
                    })
                    deffered.resolve(result)
                }
            },
                function (error) {
                    deffered.resolve(error)
                });
            return deffered.promise;
        }

        function FindDifferentRyans(New, Old) {
            var newLinks = [];
            _.forEach(New, function (aa) {
                if (Old.indexOf(aa) < 0) {
                    newLinks.push(aa);
                }
            })
            return newLinks;
        }
        function PushNewLinksRyans(links) {
            _.forEach(links, function (link) {
                if (ryansProductListsLink.indexOf(link) < 0) {
                    ryansProductListsLink.push(link);
                }
            })
        }

        function saveLinksToFileRyans(curIndex) {
            var decoratedLinks = [];
            _.forEach(ryansProductListsLink, function (product) {
                var prod = {}
                var nameWithHtml = _.split(product, "/");
                var len = nameWithHtml.length;
                if (len > 0 && nameWithHtml[len - 1].indexOf(".html") > 0) {
                    var name = _.split(nameWithHtml[len - 1], ".html")[0];
                    prod.Name = name;
                    prod.Link = product;
                    decoratedLinks.push(prod);
                }
            });
            var jsonFile = {
                CurIndex: curIndex,
                Links: decoratedLinks
            }
            console.log(curIndex + " indexes are saved and " + (vm.ryansInfo.totalParentLinks - curIndex) + " indexes are remaining");
            fs.writeFileSync('assets/linksArray.json', JSON.stringify(jsonFile), 'utf-8');
            // console.log(decoratedLinks);
        }

        function getRyansProductsLinkOnly(productParentLink, curIndex) {
            console.log(curIndex);
            vm.ryansInfo.currentlyTotalProcessedParent = curIndex;
            let url = productParentLink[curIndex] + "?limit=288&isLayerAjax=1"; // this is for ryans products default limits is  12.
            FetchingProductListFromRyans(url).then(function (data) {
                vm.progressValueRyans += vm.progressIncrementRatioRyans;
                var newLinks = FindDifferentRyans(data, productParentLink);
                PushNewLinksRyans(newLinks);
                if (curIndex < productParentLink.length - 1) {
                    getRyansProductsLinkOnly(productParentLink, curIndex + 1)
                    if (curIndex % 20 == 0)
                        saveLinksToFileRyans(curIndex);
                } else {
                    saveLinksToFileRyans();
                }
            });
        }

        function getPreviousDataFromRyans() {
            var productsUrl = './assets/linksArray.json';
            var json = JSON.parse(fs.readFileSync(productsUrl));
            console.log(json);
            return json;
        }

        function GetAllProductNameFromRyans() {
            var preveiousData = getPreviousDataFromRyans();
            let requestURL = "https://ryanscomputers.com/";
            request.get(requestURL, options, function (error, response, body) {
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var productNamesLink = GetLinksFromRyans(rootElement);
                    vm.ryansInfo.totalParentLinks = productNamesLink.length;
                    vm.progressIncrementRatioRyans = (100.0 / productNamesLink.length);
                    vm.progressValueRyans = vm.progressIncrementRatioRyans * preveiousData.CurIndex;
                    _.forEach(preveiousData.Links, function (obj) {
                        ryansProductListsLink.push(obj.Link);
                    });
                    getRyansProductsLinkOnly(productNamesLink, preveiousData.CurIndex ? (preveiousData.CurIndex + 1) : 0);
                }
            });
        }

        //GetAllProductNameFromRyans(); //to prepare links

         allProductListFromRyans(); // to get information about each product

        //#endregion
        // ryans computer data collection ends
    }

    /**
     * 
     * @param {*} scope 
     * @param {*} mdDialog 
     * @param {*} payload 
     * @param {*} entity 
     */

    function DialogController($scope, $mdDialog, payload, entity) {
        $scope.payload = JSON.stringify(payload);
        $scope.entity = entity;

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (payload) {
            payload = JSON.parse(payload)
            payload.__entity__ = $scope.entity;
            payload = JSON.stringify(payload);
            $mdDialog.hide(payload);
        };
    }
})();
