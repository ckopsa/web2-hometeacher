import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HomeTeacher } from '../home-teacher';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
