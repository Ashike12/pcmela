import { Component, OnInit } from '@angular/core';
import { ShortcutLifeTextToJsonService } from 'src/app/service/shortcuts-life/shortcut-life-text-to-json.service';

@Component({
  selector: 'app-shortcut-life-text-to-json',
  templateUrl: './shortcut-life-text-to-json.component.html',
  styleUrls: ['./shortcut-life-text-to-json.component.scss']
})
export class ShortcutLifeTextToJsonComponent implements OnInit {
  textInput: string = "";
  jsonFile: string = ""
  isDuplicateKeyAllowed: boolean = false;

  constructor(
    private shortcutLifeTextToJsonService: ShortcutLifeTextToJsonService
  ) { }

  ngOnInit() {
  }

  convertToJson() {
    this.jsonFile = this.shortcutLifeTextToJsonService.convertTextToJson(this.textInput, this.isDuplicateKeyAllowed);
  }

  srcollTo(id) {
    let ele = document.getElementById(id);
    ele.scrollIntoView();
  }

}
