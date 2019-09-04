import {Component, OnInit} from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {LegendItem, ChartType} from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {ActivatedRoute} from '@angular/router';
import {NavbarComponent} from '../shared/navbar/navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    id: string;
    private sub: any;
    depts = [
        {
            name: 'Information Technology',
            id: 'it',
            colleges: [
                {
                    name: 'Computer Science',
                    id: 'cs',
                },
                {
                    name: 'Information System',
                    id: 'is',
                },
                {
                    name: 'Computer Engineering',
                    id: 'ce',
                }
            ]
        },
        {
            name: 'Science',
            id: 'sc',
            colleges: [
                {
                    name: 'Math',
                    id: 'ma',
                },
                {
                    name: 'Physics',
                    id: 'ph',
                },
                {
                    name: 'Chemistry',
                    id: 'ch',
                }
            ]
        }
    ];


    selectedDep;
    public co: any;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.co = NavbarComponent;
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            NavbarComponent.sidebarClose();
            this.id = params['id'];
           if (this.id === 'it') {
                this.selectedDep = this.depts[0].colleges;
            } else if (this.id === 'sc') {
                this.selectedDep = this.depts[1].colleges;
            }
        });


    }

}
