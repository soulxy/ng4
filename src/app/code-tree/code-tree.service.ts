import { Injectable } from '@angular/core';
import { tree } from './tree';
const TREES = [{
  id: 1,
  name: 'name1'
}, {
  id: 2,
  name: 'name2'
}];
@Injectable()
export class CodeTreeService {

  constructor() { }

  getCodeInfo(): tree[] {
    return TREES;
  }

}
