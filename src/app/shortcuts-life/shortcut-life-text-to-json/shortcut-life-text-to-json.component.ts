import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShortcutLifeTextToJsonService } from 'src/app/service/shortcuts-life/shortcut-life-text-to-json.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shortcut-life-text-to-json',
  templateUrl: './shortcut-life-text-to-json.component.html',
  styleUrls: ['./shortcut-life-text-to-json.component.scss']
})
export class ShortcutLifeTextToJsonComponent implements OnInit {
  textInput: string = "";
  jsonFile: string = ""
  isDuplicateKeyAllowed: boolean = false;
  isInputText:boolean = false;

  constructor(
    private shortcutLifeTextToJsonService: ShortcutLifeTextToJsonService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  toggleInputMethod(method:boolean, $event){
    if(!method){
      this.onClick($event)
    }
    this.isInputText = method;
  }

  convertToJson() {
    this.jsonFile = this.shortcutLifeTextToJsonService.convertTextToJson(this.textInput, this.isDuplicateKeyAllowed);
  }

  srcollTo(id) {
    let ele = document.getElementById(id);
    ele.scrollIntoView();
  }

  // file upload from stackblitz https://stackblitz.com/edit/angular-material-fileupload

  @Input()
  mode
  @Input()
  names
  @Input()
  url
  @Input()
  method
  @Input()
  multiple
  @Input()
  disabled
  @Input()
  accept
  @Input()
  maxFileSize
  @Input()
  auto = true
  @Input()
  withCredentials
  @Input()
  invalidFileSizeMessageSummary
  @Input()
  invalidFileSizeMessageDetail
  @Input()
  invalidFileTypeMessageSummary
  @Input()
  invalidFileTypeMessageDetail
  @Input()
  previewWidth
  @Input()
  @Input()
  customUpload
  @Input()
  showUploadButton
  @Input()
  showCancelButton


  @Input()
  dataUriPrefix
  @Input()
  showUploadInfo

  /**
   *
   */


  @ViewChild('fileUpload', {
    static: false
  })
  fileUpload: ElementRef

  inputFileName: string

  @Input()
  files: File[] = []

  onClick(event) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  onInput(event) {

  }

  onFileSelected(event) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log('event::::::', event)
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      //if(!this.isFileSelected(file)){
      if (this.validate(file)) {
        //      if(this.isImage(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        //      }
        if (!this.isMultiple()) {
          this.files = []
        }
        this.files.push(files[i]);
        //  }
      }
      //}
    }
  }

  removeFile(event, file) {
    let ix
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1)
      this.clearInputElement()
    }
  }

  validate(file: File) {
    for (const f of this.files) {
      if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === f.size
        && f.type === f.type
      ) {
        return false
      }
    }
    return true
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }


  isMultiple(): boolean {
    return this.multiple
  }

}
