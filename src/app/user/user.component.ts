import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    selectedSubjects;
    sub;
    id;
    computerScienceSubjects = [
        {
            name: 'ITCS 103',
            link: 'https://chat.whatsapp.com/BvWtQ3y5jpfC1vMDtr5kDp'
        },
        {
            name: 'ITCS 113',
            link: 'https://chat.whatsapp.com/FoBHfNmyojv8WZkHtRzgEe'
        },
        {
            name: 'ITCS 114',
            link: 'https://chat.whatsapp.com/E9qIg6TtWzG1oO3wyLqkqZ'
        }
    ];

    mathSubjects = [
        {
            name: 'Math 101',
            link: 'https://chat.whatsapp.com/IWJRtg1YRDbCLUv7SstOgK'
        },
        {
            name: 'Math 102',
            link: 'https://chat.whatsapp.com/KgiSKLkEuHPCgkY6zxNAoE'
        },
        {
            name: 'Stat 273',
            link: 'https://chat.whatsapp.com/FtvTJI8LSvo2sBHknJVmyO'
        }
    ];

    constructor(private route: ActivatedRoute, private location: Location) {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            if (this.id === 'cs') {
                this.selectedSubjects = this.computerScienceSubjects;
            } else if (this.id === 'ma') {
                this.selectedSubjects = this.mathSubjects;
            }
        });
    }

    ngOnInit() {
    }

    back() {
        this.location.back()
    }
}
