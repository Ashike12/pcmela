import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShortcutLifeTextToJsonService } from '../../../service/shortcuts-life/shortcut-life-text-to-json.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shortcut-life-text-to-json',
  templateUrl: './shortcut-life-text-to-json.component.html',
  styleUrls: ['./shortcut-life-text-to-json.component.scss']
})
export class ShortcutLifeTextToJsonComponent implements OnInit {
  textInput = '';
  jsonFile = '';
  isDuplicateKeyAllowed = false;
  isInputText = false;
  deleteButtonLabel: string;

  constructor(
    private shortcutLifeTextToJsonService: ShortcutLifeTextToJsonService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  toggleInputMethod(method: boolean, $event?) {
    if (!method) {
      this.onClick();
    }
    this.isInputText = method;
  }

  convertToJson() {
    this.jsonFile = this.shortcutLifeTextToJsonService.convertTextToJson(this.textInput, this.isDuplicateKeyAllowed);
  }

  srcollTo(id) {
    const ele = document.getElementById(id);
    ele.scrollIntoView();
  }

  // file upload from stackblitz https://stackblitz.com/edit/angular-material-fileupload

  // tslint:disable-next-line:member-ordering
  // tslint:disable-next-line:member-ordering
  @Input()
  mode;
  // tslint:disable-next-line:member-ordering
  // tslint:disable-next-line:member-ordering
  @Input()
  names;
  // tslint:disable-next-line:member-ordering
  // tslint:disable-next-line:member-ordering
  @Input()
  url;
  // tslint:disable-next-line:member-ordering
  // tslint:disable-next-line:member-ordering
  @Input()
  method;
  // tslint:disable-next-line:member-ordering
  @Input()
  multiple;
  // tslint:disable-next-line:member-ordering
  @Input()
  disabled;
  // tslint:disable-next-line:member-ordering
  @Input()
  accept;
  // tslint:disable-next-line:member-ordering
  @Input()
  maxFileSize;
  // tslint:disable-next-line:member-ordering
  @Input()
  auto = true;
  // tslint:disable-next-line:member-ordering
  @Input()
  withCredentials;
  // tslint:disable-next-line:member-ordering
  @Input()
  invalidFileSizeMessageSummary;
  // tslint:disable-next-line:member-ordering
  @Input()
  invalidFileSizeMessageDetail;
  // tslint:disable-next-line:member-ordering
  @Input()
  invalidFileTypeMessageSummary;
  // tslint:disable-next-line:member-ordering
  @Input()
  invalidFileTypeMessageDetail;
  // tslint:disable-next-line:member-ordering
  @Input()
  previewWidth;
  // tslint:disable-next-line:member-ordering
  @Input()
  // tslint:disable-next-line:member-ordering
  @Input()
  customUpload;
  // tslint:disable-next-line:member-ordering
  @Input()
  showUploadButton;
  // tslint:disable-next-line:member-ordering
  @Input()
  showCancelButton;


  // tslint:disable-next-line:member-ordering
  @Input()
  dataUriPrefix;
  // tslint:disable-next-line:member-ordering
  @Input()
  showUploadInfo;

  /**
   *
   */


  // tslint:disable-next-line:member-ordering
  @ViewChild('fileUpload', {
    static: false
  })
  fileUpload: ElementRef;

  // tslint:disable-next-line:member-ordering
  inputFileName: string;

  // tslint:disable-next-line:member-ordering
  @Input()
  files: File[] = [];

  onClick() {
    if (this.fileUpload) {
      this.fileUpload.nativeElement.click();
    }
  }

  onInput(event) {
  }

  onFileSelected(event) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log('event::::::', event);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // if(!this.isFileSelected(file)){
      if (this.validate(file)) {
        //      if(this.isImage(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        //      }
        if (!this.isMultiple()) {
          this.files = [];
        }
        this.files.push(files[i]);
        //  }
      }
      // }
    }
    const textFile = this.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const textData = JSON.parse(JSON.stringify(fileReader.result));
      this.textInput = textData;
    };
    fileReader.readAsText(textFile);
  }

  removeFile(event, file) {
    let ix;
    // tslint:disable-next-line:no-conditional-assignment
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1);
      this.clearInputElement();
    }
  }

  validate(file: File) {
    for (const f of this.files) {
      if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === f.size
        && f.type === f.type
      ) {
        return false;
      }
    }
    return true;
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = '';
  }


  isMultiple(): boolean {
    return this.multiple;
  }

}
