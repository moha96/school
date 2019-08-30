import {Component, OnInit, ElementRef} from '@angular/core';
import {ROUTES} from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
     listTitles: any[];
    location: Location;
     public static toggleButton: any;
     public static sidebarVisible: boolean;


    constructor(location: Location, private element: ElementRef) {
        this.location = location;
        NavbarComponent.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        NavbarComponent.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = NavbarComponent.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        NavbarComponent.sidebarVisible = true;
    };

    public static sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        NavbarComponent.toggleButton.classList.remove('toggled');
        NavbarComponent.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (NavbarComponent.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            NavbarComponent.sidebarClose();
        }
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
