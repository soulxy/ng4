import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app23';
  navs = [
    { title: 'D3', href: ''},
    { title: 'Material', href: '/material'},
    { title: 'Markdown', href: '/markdown'},
    { title: 'https corf', href: '/http'}
  ];
}
