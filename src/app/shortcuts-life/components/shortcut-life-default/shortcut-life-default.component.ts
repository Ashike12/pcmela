import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shortcut-life-default',
  templateUrl: './shortcut-life-default.component.html',
  styleUrls: ['./shortcut-life-default.component.scss']
})
export class ShortcutLifeDefaultComponent implements OnInit {

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  routeToTextToJson(){
    this.router.navigate(['text-to-json'],
    {
      relativeTo: this.activeRoute,
      queryParamsHandling: "merge"
    })
  }
  routeToUploadQwestion(){
    this.router.navigate(['upload-questions'],
    {
      relativeTo: this.activeRoute,
      queryParamsHandling: "merge"
    })
  }

}
