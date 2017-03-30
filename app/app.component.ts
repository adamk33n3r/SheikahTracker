import { Component, ViewChild, ContentChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(private fontIcon: TNSFontIconService) {
    }
}
