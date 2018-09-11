// this import should be first in order to load some required settings (like globals and reflect-metadata)
/*import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {provide} from "@angular/core/src/di/provider";
import {TNSFontIconService} from "nativescript-ng2-fonticon";
*/

import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
/*
nativeScriptBootstrap(AppComponent,[
  provide(TNSFontIconService, {
    useFactory: () => {
      return new TNSFontIconService({
        'fa': 'font-awesome.css'
      });
    }
  })
]);
*/