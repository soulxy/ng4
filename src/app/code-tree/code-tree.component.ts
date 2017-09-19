import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CodeTreeService } from './code-tree.service';
import { tree } from './tree';
@Component({
  selector: 'app-code-tree',
  templateUrl: './code-tree.component.html',
  styleUrls: ['./code-tree.component.scss'],
  providers: [CodeTreeService]
})
export class CodeTreeComponent implements OnInit {
  @Input() code: any;  
  trustedTemplate: any;
  treeArr: tree[]
  constructor(private sanitizer: DomSanitizer,
    private codeTreeService: CodeTreeService) { 
    //note: 构造函数时，code未获取到值
  }

  ngOnInit() {
    this.trustedTemplate = this.sanitizer.bypassSecurityTrustHtml(this.code.templates.legacyImageInfoDisplayComp);
    this.treeArr = this.codeTreeService.getCodeInfo();
  }

}
