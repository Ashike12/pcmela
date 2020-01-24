import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-google-map-api',
  templateUrl: './google-map-api.component.html',
  styleUrls: ['./google-map-api.component.scss']
})


export class GoogleMapApiComponent implements OnInit, AfterViewInit {
 
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 23.846633;
  lng = 90.250457;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

}
