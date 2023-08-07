import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Cyclone } from 'src/app/models/cyclone';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-cyclone-map',
  templateUrl: './cyclone-map.component.html',
  styleUrls: ['./cyclone-map.component.css']
})
export class CycloneMapComponent implements AfterViewInit {
  private map: any;

  private cyclones: Cyclone[] = [
    { lat: 23.80, long: 90.41, speed: 100, name: "Sidr", radius: 20 },
    { lat: 13.72, long: 100.52, speed: 120, name: "Phailin", radius: 25 },
    { lat: 10.85, long: 72.54, speed: 85, name: "Gujarat", radius: 7 },
    { lat: -21.14, long: 55.52, speed: 130, name: "Gamede", radius: 15 },
    { lat: 14.62, long: 120.98, speed: 110, name: "Haiyan", radius: 30 },
    { lat: -12.26, long: 130.89, speed: 95, name: "Tracy", radius: 18 },
    { lat: 28.61, long: 77.23, speed: 105, name: "Vayu", radius: 22 },
    { lat: -34.92, long: 138.60, speed: 115, name: "Winston", radius: 27 },
    { lat: 25.03, long: 121.63, speed: 125, name: "Nanmadol", radius: 28 },
    { lat: -15.77, long: -47.92, speed: 90, name: "Amara", radius: 10 },
    { lat: 20.59, long: 86.97, speed: 80, name: "Yaas", radius: 12 },
    { lat: 17.68, long: 83.20, speed: 95, name: "Titli", radius: 18 },
    { lat: -11.56, long: 130.81, speed: 120, name: "Linda", radius: 25 },
    { lat: 35.68, long: 139.76, speed: 115, name: "Maysak", radius: 27 },
    { lat: 13.41, long: -176.16, speed: 130, name: "Oliwa", radius: 30 },
    { lat: -9.45, long: 160.02, speed: 85, name: "Ursula", radius: 7 },
    { lat: 9.70, long: 166.26, speed: 100, name: "Paka", radius: 20 },
    { lat: -12.22, long: 96.84, speed: 110, name: "Veronica", radius: 30 },
    { lat: 14.71, long: -92.45, speed: 95, name: "Rick", radius: 18 },
    { lat: 62.45, long: -114.38, speed: 105, name: "Yara", radius: 22 },
  ];


  private initMap(): void {
    this.map = L.map('map', {
      center: [23.80, 90.4152],
      zoom: 5
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    for (let c of this.cyclones) {
      let marker = L.circleMarker([c.lat, c.long], { radius: c.radius });
      const popupContent = `
  <div style="font-weight:bolder">
    <div>Name: ${c.name}</div>
    <div>Speed: ${c.speed}</div>
    <div>Latitude: ${c.lat}</div>
    <div>Longitude: ${c.long}</div>
  </div>
`;

      marker.bindPopup(popupContent);
      marker.addTo(this.map);
    }


  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}