import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import { MainComponent } from "./components/main/main";
import { TranslateLoader, TranslateStaticLoader, TranslateService } from "ng2-translate/ng2-translate";
import { Http } from "@angular/http";
import { provide } from "@angular/core";

@App({
  templateUrl: './build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(TranslateLoader, {
      useFactory: (http: Http) => new TranslateStaticLoader(http, './build/localizations/', '.json'),
      deps: [Http]
    }),
    TranslateService
  ],
  directives: [ MainComponent ]
})
export class MyApp {
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
