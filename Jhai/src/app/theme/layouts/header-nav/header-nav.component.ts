import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

     rolePermissionMenu = {};
    constructor() {

    }
    ngOnInit() {
		this.rolePermissionMenu = JSON.parse(localStorage.getItem("currentUser")).rolePermissionMenu;
			console.log("rolePermissionMenu", this.rolePermissionMenu)
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}