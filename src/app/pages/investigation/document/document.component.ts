import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Document, ImageDocument, FileType } from '../investigation-document'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DocumentComponent implements OnInit {

  constructor() { }

  FILE: any;
  DOCUMENT_OLD_NAME: string;
  DOCUMENT_TYPE: string;
  DOCUMENT_NAME: string;
  FILE_TYPE: string;
  CONTENT: ArrayBuffer | string;
  IMAGE_SHOW: string;

  IMAGE_TYPE: String = 'document';
  Dropdown_Show: boolean = false;

  @Output() d = new EventEmitter();
  @Output() Output = new EventEmitter<Document>();

  ngOnInit() {
    let element = document.getElementById('fileUpload') as HTMLElement;
    element.click();
  }

  onFileChange(event: any) {
    let f = event.target.files[0];
    let idx = f.name.lastIndexOf('.');
    this.FILE_TYPE = (idx < 1) ? "" : f.name.substr(idx + 1);
    this.DOCUMENT_OLD_NAME = f.name;
    this.DOCUMENT_NAME = f.name;
    this.FILE = f;
    switch (this.FILE_TYPE.toLocaleLowerCase()) {
      case FileType.xlsx:
      case FileType.xls:
        this.IMAGE_SHOW = ImageDocument.xlsx;
        break;
      case FileType.doc:
      case FileType.docx:
        this.IMAGE_SHOW = ImageDocument.docx;
        break;
      case FileType.pdf:
        this.IMAGE_SHOW = ImageDocument.pdf;
        break;
      case FileType.jpg:
      case FileType.jpeg:
      case FileType.png:
      case FileType.gif:
        this.IMAGE_SHOW = URL.createObjectURL(f);
        this.Dropdown_Show = true;
        break;
      default: this.Dropdown_Show = true;
        break;
    }

    let reader = new FileReader();
    reader.onload = () => {
      this.CONTENT = reader.result;
    };

    reader.readAsDataURL(f);
  }


  public dismiss = (e: any) => {
    this.Output.emit({
      FILE: this.FILE,
      DATA_SOURCE: null,
      DOCUMENT_ID: null,
      DOCUMENT_OLD_NAME: this.DOCUMENT_OLD_NAME,
      DOCUMENT_NAME: this.DOCUMENT_NAME,
      DOCUMENT_TYPE: null,
      FILE_TYPE: this.FILE_TYPE,
      FOLDER: this.IMAGE_TYPE,
      IS_ACTIVE: 1,
      REFERENCE_CODE: null,
      CONTENT: this.CONTENT,
      IMAGE_SHOW: this.IMAGE_SHOW,
      IsNewItem: true
      // IMAGE_TYPE: this.IMAGE_TYPE
    })
    this.d.emit(e);
  };

}


