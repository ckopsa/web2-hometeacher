import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HomeTeacher } from '../home-teacher';
import { HomeTeacherService } from '../services/home-teacher.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeTeacherService]
})
export class HomeComponent implements OnInit {
    hometeacher: HomeTeacher;
    constructor(private homeTeacherService: HomeTeacherService) {
    }

    ngOnInit() {
        this.homeTeacherService.getHomeTeacher("1").subscribe(hometeacher => {
            if (hometeacher) {
                this.hometeacher = hometeacher;
            }
        });
    }
}
