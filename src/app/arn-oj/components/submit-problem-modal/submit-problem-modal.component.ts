import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ArnOjService } from '../../service/arn-oj.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-submit-problem-modal',
  templateUrl: './submit-problem-modal.component.html',
  styleUrls: ['./submit-problem-modal.component.scss']
})
export class SubmitProblemModalComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @Input() files: File[] = [];
  @Input() multiple = false;

  isInputGenerated = false;
  isInputText = false;
  inputFileName: string;
  isCopiedCompleted = false;
  textOutput = '';
  textInput = '';
  isProblemGenerating = false;
  // files: any = [];

  // uploadFile(event) {
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let index = 0; index < event.length; index++) {
  //     const element = event[index];
  //     this.files.push(element.name);
  //   }
  // }
  // deleteAttachment(index) {
  //   this.files.splice(index, 1)
  // }

  constructor(
    public dialogRef: MatDialogRef<SubmitProblemModalComponent>,
    private sanitizer: DomSanitizer,
    private arnOjService: ArnOjService
  ) { }

  ngOnInit() {
  }
  removeFile(event, file) {
    let ix;
    // tslint:disable-next-line:no-conditional-assignment
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1);
      this.clearInputElement();
    }
  }
  clearInputElement() {
    this.fileUpload.nativeElement.value = '';
  }
  toggleInputMethod(method: boolean, $event?) {
    if (!method) {
      this.onClick();
    }
    this.isInputText = method;
  }
  onClick() {
    if (this.fileUpload) {
      this.fileUpload.nativeElement.click();
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
  isMultiple(): boolean {
    return this.multiple;
  }
  onFileSelected(event) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.validate(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        if (!this.isMultiple()) {
          this.files = [];
        }
        this.files.push(files[i]);
      }
    }
    const textFile = this.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const textData = JSON.parse(JSON.stringify(fileReader.result));
      this.textOutput = textData;
    };
    fileReader.readAsText(textFile);
  }
  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {

  }
  closeModal() {
    this.dialogRef.close();
  }
  generateInput() {
    this.isProblemGenerating = true;
    setTimeout(() => {
      this.arnOjService.generateInput().pipe(take(1)).subscribe((res) => {
        this.isProblemGenerating = false;
        this.isInputGenerated = true;
        this.textInput = res && res.input && res.input.join('\n');
      });
    }, 700);
  }
  showCopyToast() {
      this.isCopiedCompleted = true;
      setTimeout(() => {
      this.isCopiedCompleted = false;
    }, 400);
  }
}
