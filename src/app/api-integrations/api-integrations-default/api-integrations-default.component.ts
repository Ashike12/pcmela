import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-integrations-default',
  templateUrl: './api-integrations-default.component.html',
  styleUrls: ['./api-integrations-default.component.scss']
})
export class ApiIntegrationsDefaultComponent implements OnInit {

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  routeToGoogleMap(){
    this.router.navigate(['google-map-api'],
    {
      relativeTo: this.activeRoute,
      queryParamsHandling: "merge"
    })
  }

}
