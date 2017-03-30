import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public toggle() {
        alert('Toggle called');
        console.log(this.drawerComponent.sideDrawer.toggleDrawerState());
    }
}
