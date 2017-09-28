import { Component } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
    private router: Router
  ) { 
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
  ngOnInit() {
    console.log('app component run');
    // this.router.events
    //     .filter(e => e instanceof RoutesRecognized)
    //     .map(e => <RoutesRecognized>e)
    //     .subscribe((e) => {
    //       console.log('path:',e);
    //     })
  }
}
