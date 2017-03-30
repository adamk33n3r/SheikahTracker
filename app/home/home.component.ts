import {Component, ViewChild, ChangeDetectorRef, Inject, OnInit, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui/sidedrawer/angular';
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [`
    .drawer {
      background-color: #555555;
      color: white;
    }
    .drawerTitle {
      padding: 16;
      font-weight: bold;
      background-color: #333333;
    }
    .drawerLabel {
      padding: 12;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private sideDrawerTransition: DrawerTransitionBase;
  private drawer: SideDrawerType;
  
  constructor(
    @Inject(Page) private page: Page,
    private changeDetectionRef: ChangeDetectorRef,
    private router: Router) {
    page.on("loaded", this.onLoaded, this);
  }

  public toggle() {
    this.drawer.toggleDrawerState();
  }

  public onLoaded(args) {
    this.sideDrawerTransition = new SlideInOnTopTransition();
  }

  public ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.drawer.closeDrawer();
      }
    });
  }

  public ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.drawer.showDrawer();
    this.changeDetectionRef.detectChanges();
  }
}
