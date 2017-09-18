import { Component, OnInit, NgModule , ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import { Stocks } from './shared/data';

import { JsonPService } from './json-p.service';

@Component({
    selector: 'json-p',
    templateUrl: './json-p.component.html',
    styleUrls: ['./json-p.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [JsonPService]
})

export class JsonPComponent implements OnInit {
    jsonPObj: any;
    // jsonPObj.hasHttpError: boolean;
    bookList: any[];

    //d3 demo
    title: string = 'D3.js with Angular 2!';
    subtitle: string = 'Line Chart';

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;

    //security
    htmlSnippet: string;

    constructor(private jsonPService: JsonPService) {
      this.width = 900 - this.margin.left - this.margin.right ;
      this.height = 500 - this.margin.top - this.margin.bottom;
      this.jsonPObj = {};
    }

    ngOnInit(): void {
        let arr: any[] = [];
        for(let i in [1,2,3]) {
          arr[i] = { name: `${i}: 书【${i}】`,
            price: Number(i) * 12
          };
        }
        this.bookList = arr;
        console.log('d3:', d3);
        this.initSvg()
        this.initAxis();
        this.drawAxis();
        this.drawLine();

        this.htmlSnippet = '<p>this is p</p> <a nref="www.baidu.com">baidu</a>Template <script>alert("0wned")</script> <b>Syntax</b>';
    }
    onClickBook(book: any, books: any[]): void {
      for(let i of books) {
        i.selected = false;
      }
      book.selected = true;
      console.log('selected book:', book);
    }
    private initSvg() {
      this.svg = d3.select("svg")
                   .append("g")
                   .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");;
    }

    private initAxis() {
      this.x = d3Scale.scaleTime().range([0, this.width]);
      this.y = d3Scale.scaleLinear().range([this.height, 0]);
      this.x.domain(d3Array.extent(Stocks, (d) => d.date ));
      this.y.domain(d3Array.extent(Stocks, (d) => d.value ));
    }

    private drawAxis() {

      this.svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));

      this.svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");
    }

    private drawLine() {
      this.line = d3Shape.line()
                         .x( (d: any) => this.x(d.date) )
                         .y( (d: any) => this.y(d.value) );

      this.svg.append("path")
              .datum(Stocks)
              .attr("class", "line")
              .attr("d", this.line);
    }

    getAmaZonData(): void {
      this.jsonPService.getAmaZonData().then(res => {
        console.log('get url data:', res);
        this.jsonPObj.jsonData = res;
      }).catch(error => this.jsonPObj.hasHttpError = error);

    }
      
}
