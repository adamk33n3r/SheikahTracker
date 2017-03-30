import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { HomeComponent } from "./home/home.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './font-awesome.min.css',
        }),

        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ItemsComponent,
        ItemDetailComponent,
    ],
    providers: [
        ItemService,
    ],
    schemas: [
        //NO_ERRORS_SCHEMA
    ],
})
export class AppModule { }
