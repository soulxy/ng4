import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'json-p',
    templateUrl: './json-p.component.html',
    styleUrls: ['./json-p.component.css']
})

export class JsonPComponent implements OnInit {
    bookList: any[];
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
