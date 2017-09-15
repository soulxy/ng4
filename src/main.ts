import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';//gesture support
import { hmrBootstrap } from './hmr';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

if(environment.hmr) {
  if(module['hot']) {
     hmrBootstrap(module, bootstrap);
  }else {
    console.log('<======TT======>\n');
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
    console.log('\n<======TT======>');
  }
}else {
  bootstrap();
}
