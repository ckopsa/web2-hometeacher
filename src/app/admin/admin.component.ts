import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HomeTeacher } from '../home-teacher';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    hometeacher: HomeTeacher;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: { hometeacher: HomeTeacher }) => {
            this.hometeacher = data.hometeacher;
        });
    }
}
