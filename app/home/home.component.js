"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page, changeDetectionRef, router) {
        this.page = page;
        this.changeDetectionRef = changeDetectionRef;
        this.router = router;
        page.on("loaded", this.onLoaded, this);
    }
    HomeComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.onLoaded = function (args) {
        this.sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.drawer.closeDrawer();
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.showDrawer();
        this.changeDetectionRef.detectChanges();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], HomeComponent.prototype, "drawerComponent", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html',
        styles: ["\n    .drawer {\n      background-color: #555555;\n      color: white;\n    }\n    .drawerTitle {\n      padding: 16;\n      font-weight: bold;\n      background-color: #333333;\n    }\n    .drawerLabel {\n      padding: 12;\n    }\n  "]
    }),
    __param(0, core_1.Inject(page_1.Page)),
    __metadata("design:paramtypes", [page_1.Page,
        core_1.ChangeDetectorRef,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXFHO0FBQ3JHLDBDQUFzRDtBQUV0RCxzRUFBa0c7QUFDbEcsaUVBQWdHO0FBQ2hHLGdDQUE2QjtBQXFCN0IsSUFBYSxhQUFhO0lBTXhCLHVCQUN3QixJQUFVLEVBQ3hCLGtCQUFxQyxFQUNyQyxNQUFjO1FBRkEsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLHNCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWhDb0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCO3NEQUFDO0FBRnZFLGFBQWE7SUFuQnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxNQUFNLEVBQUUsQ0FBQyw2T0FhUixDQUFDO0tBQ0gsQ0FBQztJQVFHLFdBQUEsYUFBTSxDQUFDLFdBQUksQ0FBQyxDQUFBO3FDQUFlLFdBQUk7UUFDSix3QkFBaUI7UUFDN0IsZUFBTTtHQVRiLGFBQWEsQ0FrQ3pCO0FBbENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCwgT25Jbml0LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRW5kfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHtEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2hvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmRyYXdlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuZHJhd2VyVGl0bGUge1xuICAgICAgcGFkZGluZzogMTY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICAgIC5kcmF3ZXJMYWJlbCB7XG4gICAgICBwYWRkaW5nOiAxMjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBzaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUGFnZSkgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgcGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XG4gICAgdGhpcy5zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=