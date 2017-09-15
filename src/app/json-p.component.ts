import { Component, OnInit, NgModule , ViewEncapsulation} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    MdButtonModule, MdCheckboxModule
  ],
  providers: []
})
@Component({
    selector: 'json-p',
    templateUrl: './json-p.component.html',
    styleUrls: ['./json-p.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class JsonPComponent implements OnInit {
    bookList: any[];

    //material design

    ngOnInit(): void {
        let arr: any[] = [];
        for(let i in [1,2,3]) {
          arr[i] = { name: `${i}: 书【${i}】`,
            price: Number(i) * 12
          };
        }
        this.bookList = arr;
    }
    onClickBook(book: any, books: any[]): void {
      for(let i of books) {
        i.selected = false;
      }
      book.selected = true;
      console.log('selected book:', book);
    }
    
}
