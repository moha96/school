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
            name: 'CSC 103 Group 1',
            link: 'https://chat.whatsapp.com/FSokjZ6johW78fSW83qepw'
        },
        {
            name: 'CSC 103 Group 2',
            link: 'https://chat.whatsapp.com/LqWjDQGlfA0KtgHCdonE0A'
        },


        {
            name: 'ITCS 103',
            link: 'https://chat.whatsapp.com/BvWtQ3y5jpfC1vMDtr5kDp'
        },
        {
            name: 'ITCS 111',
            link: 'https://chat.whatsapp.com/DKISo10I8DU7YT7ZKr6Kgk'
        },
        {
            name: 'ITCS 112',
            link: 'https://chat.whatsapp.com/Hzl7nSaQgaa3Lp5O6RyZU0'
        },


        {
            name: 'ITCS 113',
            link: 'https://chat.whatsapp.com/FoBHfNmyojv8WZkHtRzgEe'
        },
        {
            name: 'ITCS 114',
            link: 'https://chat.whatsapp.com/E9qIg6TtWzG1oO3wyLqkqZ'
        },
        {
            name: 'ITCS 214',
            link: 'https://chat.whatsapp.com/H8p7FTbXp5ABUihrQhzXXU'
        },
        {
            name: 'ITCS 254',
            link: 'https://chat.whatsapp.com/KxWcaU4kGAhJ34qU5hsbNZ'
        },
        {
            name: 'ITCS 255',
            link: 'https://chat.whatsapp.com/I1fOiZEZgedAQP4wmeOgI5'
        },
        {
            name: 'ITCS 285',
            link: 'https://chat.whatsapp.com/H8To0mXkex8LWQ41DzCpfj'
        }

    ];

    informationSystemSubjects = [
        {
            name: 'ITIS 103',
            link: 'https://chat.whatsapp.com/BiZpQyWW4eR1HCNT8dyeX3'
        }
    ];

    computerEngineeringSubjects = [
        {
            name: 'ITCE 101',
            link: 'https://chat.whatsapp.com/DBsDHlxdIaaAC7YDFGsOhR'
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

    physicsSubjects = [
        {
            name: 'Phycs 101',
            link: 'https://chat.whatsapp.com/GTIOGDzAkG4BM4foPrX9JC'
        },
        {
            name: 'Phycs 102',
            link: 'https://chat.whatsapp.com/IedRSBMa4COJFmg63thdEH'
        }
    ];

    chimestrySubjects = [
        {
            name: 'CHEMY 101',
            link: 'https://chat.whatsapp.com/FLT0QuLIndGCkFqIktgtOI'
        }
    ];

    constructor(private route: ActivatedRoute, private location: Location) {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            if (this.id === 'cs') {
                this.selectedSubjects = this.computerScienceSubjects;
            } else if (this.id === 'ma') {
                this.selectedSubjects = this.mathSubjects;
            } else if (this.id === 'ph') {
                this.selectedSubjects = this.physicsSubjects;
            } else if (this.id === 'ch') {
                this.selectedSubjects = this.chimestrySubjects;
            } else if (this.id === 'is') {
                this.selectedSubjects = this.informationSystemSubjects;
            } else if (this.id === 'ce') {
                this.selectedSubjects = this.computerEngineeringSubjects;
            }
        });
    }

    ngOnInit() {
    }

    back() {
        this.location.back()
    }
}
