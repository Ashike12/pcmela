var request = require('request');
var fs = require('fs');
var http = require('http');

(function () {
    'use strict';
    angular.module('app')
        .controller('MainController', constructor);

    constructor.$inject = ["$timeout", "$q", "$http", "$scope", "$locale", "$mdDialog", "mongoService"];

    function constructor($timeout, $q, $http, $scope, $locale, $mdDialog, mongoService) {
        const options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }
        var productLists = [
            //processors
            //intel 19cpu
            "intel-9th-gen-coffee-lake-core-i7-9700k-3-6ghz-4-9ghz-8-core-12mb-cache-lga1151-socket-processor",
            "intel-x-series-9th-gen-core-i7-9800x-processor",
            "intel-pdc-g4400-3-30ghz-6th-gen",
            "intel-core-i3-6100-3-70ghz-6th-gen",
            "intel-kaby-lake-core-i3-7100-processor",
            "bundle-intel-coffee-lake-core-i3-8100-3-60ghz-4-core-6mb-cache-lga1151-8th-gen-processor",
            "single-intel-coffee-lake-core-i3-8100-3-60ghz-4-core-6mb-cache-lga1151-8th-gen-processor",
            "intel-core-i7-3820-3-6ghz-3rd-gen",
            "intel-core-i3-7350k-7th-gen-processor",
            "intel-kaby-lake-core-i5-7th-gen",
            "single-intel-kaby-lake-core-i5-7500-3-40-3-80ghz-6mb-cache-lga1151-7th-gen-processor",
            "intel-coffee-lake-core-i5-8400-2-80-4-00ghz-6-core-9mb-cache-lga1151-8th-gen-processor",
            "intel-xeon-e3-1220-v6-3-0ghz-3-5ghz-4-core-4-thread-8mb-cache-processor",
            "intel-coffee-lake-core-i5-8600k-3-60-4-30ghz-6-core-9mb-cache-lga1151-8th-gen-processor",
            "bundle-intel-9th-gen-coffee-lake-core-i5-9600k-3-7ghz-4-6ghz-6-core-9mb-cache-lga1151-socket-processor",
            "intel-xeon-e3-1240-v6-3-7ghz-4-1ghz-4-core-8-thread-8mb-cache-processor",
            "intel-core-i7-7700-8mb-cache-l7th-gen",
            "intel-coffee-lake-core-i7-8700-3-20-4-60ghz-6-core-12mb-cache-lga1151-8th-gen-processor",
            "intel-skylake-core-i7-7820x-x-series-3-60-4-30ghz-8-core-16-thread-11mb-cache-tdp-140w-lga2066-processor",
            //amd 16cpu
            "amd-bristol-ridge-a6-9500-3-5-3-8-ghz-unlocked-am4-socket-7th-gen-apu",
            "amd-athlon-200ge-3-2ghz-2-core-5mb-cache-am4-socket-processor-with-vega-3-graphics",
            "amd-ryzen-3-1200-3-1-3-4-ghz-4-core-8mb-cache-65w-am4-processor",
            "amd-ryzen-3-2200g-3-5-3-7-ghz-4-core-6mb-cache-am4-socket-processor-with-vega-8-graphics",
            "amd-ryzen-3-1300x-3-5-3-7-ghz-4-core-10mb-cache-65w-am4-processor",
            "amd-ryzen-5-1400-3-2-3-4ghz-4-core-8mb-cache-65w-am4-processor",
            "amd-ryzen-5-2400g-3-6-3-9-ghz-4-core-6mb-cache-am4-socket-processor-with-vega-11-graphics",
            "amd-ryzen-5-1600-3-2-3-6ghz-6-core-16mb-cache-65w-am4-processor",
            "amd-ryzen-5-2600-3-4ghz-3-9ghz-6-core-19mb-cache-am4-socket-processor",
            "amd-ryzen-5-1600x-3-6-4-0ghz-6-core-19mb-cache-95w-am4-unlocked-processor",
            "amd-ryzen-5-2600x-3-6ghz-4-2ghz-6-core-19mb-cache-am4-socket-processor",
            "amd-ryzen-7-2700-3-2ghz-4-1ghz-8-core-20mb-cache-am4-socket-processor",
            "amd-ryzen-7-2700x-3-7ghz-4-3ghz-8-core-20mb-cache-am4-scoket-processor",
            "amd-ryzen-threadripper-1900x-3-8-4-0ghz-8-core-16-threads-20mb-cache-180w-tr4-socket-processor",
            "amd-ryzen-threadripper-1920x-3-5-4-0ghz-12-core-24-threads-38mb-cache-180w-tr4-socket-processor",
            "amd-ryzen-threadripper-1950x-3-8-4-0ghz-16-core-32-threads-40mb-cache-180w-tr4-socket-processor",
            //ram 49ram
            "patriot-signature-line-2gb-ddr3-1600mhz-desktop-ram-psd34g160081",
            "a-data-2gb-ddr3-1600-bus-desktop-ram",
            "leven-4gb-ddr3-1600-bus-desktop-ram",
            "twinmos-4gb-ddr3-1600-bus-desktop-ram",
            "a-data-4gb-ddr3-1600-bus-desktop-ram",
            "leven-4gb-ddr4-2400-bus-desktop-ram",
            "a-data-4gb-ddr4-2400-bus-desktop-ram",
            "g-skill-4gb-ddr4-2400-bus-desktop-ram",
            "transcend-jetram-4gb-ddr4-2400-udimm-desktop-ram-jm2400hlh-4g",
            "corsair-vengence-lpx-4gb-ddr4-2400mhz-black-heatsink-desktop-ram-cmk4gx4m1d2400c16",
            "g-skill-ripjaws-v-4gb-ddr4-2400-bus-heatsink-desktop-ram",
            "patriot-signature-line-4gb-ddr4-2400-bus-desktop-ram-with-heatsink-psd44g240041h",
            "cheval-4gb-ddr4-2400-bus-desktop-ram",
            "team-elite-4gb-ddr4-2400-bus-black-desktop-ram",
            "g-skill-8gb-ddr3-1600-bus-desktop-ram",
            "team-t-force-vulcan-4gb-ddr4-2400mhz-red-heatsink-gaming-desktop-ram",
            "a-data-8gb-ddr3-1600-bus-desktop-ram",
            "g-skill-trident-z-4gb-ddr4-3200-bus-heatsink-desktop-ram",
            "transcend-jetram-8gb-ddr4-2400-udimm-desktop-ram-jm2400hlb-8g",
            "leven-8gb-ddr4-2400-bus-desktop-ram",
            "g-skill-8gb-ddr4-2400-bus-desktop-ram",
            "a-data-8gb-ddr4-2400-bus-desktop-ram",
            "g-skill-ripjaws-v-8gb-ddr4-2400-bus-red-heatsink-desktop-ram-f4-2400c15d-16gvr",
            "g-skill-ripjaws-v-8gb-ddr4-3200-bus-heatsink-desktop-ram",
            "corsair-vengeance-lpx-8gb-ddr4-2400mhz-black-heatsink-desktop-ram-cmk8gx4m1a2400c16",
            "cheval-8gb-ddr4-2400-bus-desktop-ram",
            "patriot-signature-line-8gb-ddr4-2400-bus-desktop-ram-with-heatsink-psd48g240081h",
            "adata-gammix-d10-8gb-ddr4-2400mhz-gaming-desktop-ram",
            "trm-ballistix-8gb-ddr4-2400-bus-desktop-ram-with-heatsink",
            "corsair-vengeance-8gb-ddr4-3200mhz-black-heatsink-desktop-ram-cmk16gx4m2b3200c16",
            "g-skill-trident-z-8gb-ddr4-3200-bus-desktop-ram",
            "g-skill-trident-z-8gb-ddr4-3000-bus-rgb-desktop-ram-f4-3000c16d-16gtzr",
            "g-skill-trident-z-rgb-8gb-ddr4-3200mhz-black-heatsink-gaming-desktop-ram-f4-3200c16d-16gtzr",
            "gigabyte-8gb-1x-8gb-with-1x-dummy-rgb-ddr4-3200mhz-ram-gp-ar32c16s8k2su416r",
            "corsair-value-select-8gb-ddr4-2133-bus-desktop-ram-cmv8gx4m1a2133c15",
            "corsair-vengence-rgb-8gb-ddr4-3200mhz-black-heatsink-desktop-ram-cmr16gx4m2c3200c16",
            "adata-spectrix-d40-rgb-8gb-ddr4-3200mhz-black-heatsink-gaming-desktop-ram",
            "adata-spectrix-d40-rgb-8gb-ddr4-3000mhz-desktop-ram",
            "g-skill-8gb-ddr4-2933mhz-flare-x-performance-series-desktop-ram-f4-2933c16d-16gfx",
            "g-skill-8gb-ddr4-3200mhz-flare-x-performance-series-desktop-ram-f4-3200c14d-16gfx",
            "g-skill-ripjaws-v-16gb-ddr4-2400-bus-heatsink-desktop-ram",
            "team-8gb-4gbx2-ddr4-3466-bus-desktop-ram",
            "a-data-8gb-ddr3-1600-bus-ecc-registered-server-ram",
            "g-skill-16gb-ddr4-3200-bus-desktop-ram",
            "g-skill-16gb-ddr4-3200-bus-desktop-ram-6315",
            "g-skill-trident-z-rgb-16gb-ddr4-3200mhz-desktop-ram-c16d-32gtzr",
            "corsair-vengence-lpx-16gb-ddr4-3200mhz-black-heatsink-desktop-ram-cmk32gx4m2b3200c16",
            "corsair-dominator-platinum-16gb-ddr4-3200mhz-black-metal-heatsink-gaming-desktop-ram-cmd32gx4m2c3200c16",
            "g-skill-trident-z-rgb-16gb-ddr4-3200mhz-desktop-ram-c15d-32gtzr"
        ]
        var allProductResults = {};

        function GetProductInfoFromStartTech(productName) {
            var deffered = $q.defer();
            //let requestURL = "http://localhost:8081/";
            let requestURL = productName.Link;

            request.get(requestURL, options, function (error, response, body) {
                var result = {};
                result["ProductLink"] = productName.Link;
                result["SourceName"] = "Start Teck";
                console.log("Parsing html ......");
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var imageLinksHtml = rootElement.querySelectorAll(".product-img-holder a");
                    result["ImageLink"] = imageLinksHtml[0] ? imageLinksHtml[0].href : "#";
                    var productNameHtml = rootElement.querySelectorAll("h1");
                    result["ProductName"] = productNameHtml[0] ? productNameHtml[0].innerHTML : "";
                    var productShortInfoHtml = rootElement.querySelectorAll("table tr");
                    _.forEach(productShortInfoHtml, function (tableRow) {
                        var tableCells = tableRow.querySelectorAll("td");
                        if (tableCells.length == 2) {
                            result[tableCells[0].innerHTML] = tableCells[1].innerHTML;
                        }
                    });

                } else {
                    result['ERROR'] = productName.Name + " Not found";
                }
                deffered.resolve(result);
            },
                function (error) {
                    deffered.resolve(error);
                });
            return deffered.promise;
        }
        var starTechProductsData = [];
        function allProductListFromStarTech(productsLink, curIndex) {
            console.log(curIndex);
            GetProductInfoFromStartTech(productsLink[curIndex]).then(function (data) {
                starTechProductsData.push(data);
                if (curIndex < productsLink.length - 1) {
                    allProductListFromStarTech(productsLink, curIndex + 1);
                    if (curIndex % 50 == 0) {
                        saveProductsDataFromStarTech();
                    }
                } else {
                    saveProductsDataFromStarTech()
                }
            })
        }
        function saveProductsDataFromStarTech() {
            fs.writeFileSync('Data.json', JSON.stringify(starTechProductsData), 'utf-8');
        }

        function GetStarTechLinks(domEle) {
            var result = [];
            var productNamesList = domEle;
            _.forEach(productNamesList, function (product) {
                if (product.href)
                    result.push(product.href)
            });
            return result;
        }

        function FetchingStarTechProductList(url) {
            var deffered = $q.defer();
            var result = [];
            request.get(url, options, function (error, response, body) {
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var productsLink = rootElement.querySelectorAll(".img-holder a");
                    result = GetStarTechLinks(productsLink);
                    deffered.resolve(result);
                }
            },
                function (error) {
                    deffered.resolve(error)
                });
            return deffered.promise;
        }

        function FindDifferent(New, Old) {
            var newLinks = [];
            _.forEach(New, function (aa) {
                if (Old.indexOf(aa) < 0) {
                    newLinks.push(aa);
                }
            })
            return newLinks;
        }

        var productListsLink = [];
        function PushNewLinks(links) {
            _.forEach(links, function (link) {
                if (productListsLink.indexOf(link) < 0) {
                    productListsLink.push(link);
                }
            })
        }

        function saveStarTechLinksToFile() {
            var decoratedLinks = [];
            _.forEach(productListsLink, function (product) {
                var prod = {}
                var splitUrl = _.split(product, "/");
                var len = splitUrl.length;
                if (len > 0) {
                    var name = splitUrl[len - 1];
                    prod.Name = name;
                    prod.Link = product;
                    decoratedLinks.push(prod);
                }
            })
            fs.writeFileSync('assets/linksArray.json', JSON.stringify(decoratedLinks), 'utf-8');
            // console.log(decoratedLinks);
        }

        function getProductsLinkOnly(productParentLink, curIndex) {
            console.log(curIndex);
            FetchingStarTechProductList(productParentLink[curIndex]).then(function (data) {
                data;
                var newLinks = FindDifferent(data, productParentLink);
                PushNewLinks(newLinks);
                if (curIndex < productParentLink.length - 1) {
                    getProductsLinkOnly(productParentLink, curIndex + 1)
                    if (curIndex % 50 == 0)
                        saveStarTechLinksToFile();
                } else {
                    saveStarTechLinksToFile()
                }
            });
        }

        function GetAllProductNameFromStarTech() {
            let requestURL = "https://www.startech.com.bd/";
            request.get(requestURL, options, function (error, response, body) {
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var productsHeadLists = rootElement.querySelectorAll(".drop-down.drop-menu-2 a");
                    var parentProductsLink = GetStarTechLinks(productsHeadLists);
                    // console.log(productsHeadLists);
                    getProductsLinkOnly(parentProductsLink, 0);
                }
            });
        }

        function GetAllProductData() {
            var productsUrl = './assets/linksArray1.json';
            var json = JSON.parse(fs.readFileSync(productsUrl));
            console.log(json);
            allProductListFromStarTech(json, 3251);
        }

        // GetAllProductNameFromStarTech(); //to prepare links

        // GetAllProductData(); // to get information about each product

        var dataModel = {
            "League": "",
            "Date": "",
            "Match": "",
        }

        function scoringResult() {
            var url = 'http://www.scorebing.com/fixtures/20191031/p.3';
            request.get(url, options, function (er, res, body) {
                if (typeof (body) === 'string') {
                    var parser = new DOMParser();
                    var rootElement = parser.parseFromString(body, 'text/html');
                    var tables = rootElement.querySelectorAll("table");
                    var data = [];
                    _.forEach(tables, function (table) {
                        var tableRows = table.querySelectorAll("tr");
                        var tableRowsLen = tableRows.length;
                        for(let i=1;i<tableRowsLen;i++) {
                            var tableCells = tableRows[i].querySelectorAll("th, td");
                            var tableCellsLength = tableCells.length;
                            dataModel.League = beautify(tableCells[0].innerText);
                            dataModel.Date = beautify(tableCells[1].innerText);
                            dataModel.Match = beautify(beautify(tableCells[2].querySelector("a").innerText) + " x " + beautify(tableCells[4].querySelector("a").innerText));
                            dataModel["Handicap"] = beautify(_.split(tableCells[6].innerText,/\//)[0]);
                            debugger;
                        }
                    })
                }
            })
        }

        function beautify(str){
            var newStr = "";
            // var wordArray = _.split(str, / /);
            for(let i=0;i<str.length-1;i++){
                if((str[i]!=' ' || str[i+1]!=' ') && str[i]!=="\n") newStr+=str[i];
            }
            newStr+=str[str.length-1];
            return newStr;
        }

        // scoringResult();

        function prepareData() {
            var json = JSON.parse(fs.readFileSync('./assets/Data_Backup.json'));
            var productsData = json;
            // var keys = [];

            // _.forEach(productsData, function(data){
            //     _.forEach(data,function (value, key){
            //         if(keys.indexOf(key) === -1){
            //             keys.push(key);
            //         }
            //     });
            // });
            // console.log(keys);
            _.forEach(productsData, function (data) {
                data["_id"] = generateUUID();
            });
            fs.writeFileSync('assets/AddingIDs.json', JSON.stringify(productsData), 'utf-8');
        }

        function generateUUID() {
            var d = new Date().getTime();//Timestamp
            var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16;//random number between 0 and 16
                if (d > 0) {//Use timestamp until depleted
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else {//Use microseconds since page-load if supported
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }

        prepareData();


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
