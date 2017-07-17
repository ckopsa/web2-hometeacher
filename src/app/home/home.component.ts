import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HomeTeacher } from '../home-teacher';
import { HomeTeacherService } from '../services/home-teacher.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeTeacherService]
})
export class HomeComponent implements OnInit {
    hometeacher: HomeTeacher;
    constructor(
        private homeTeacherService: HomeTeacherService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                       this.homeTeacherService.getHomeTeacher(params.get('id')))
            .subscribe((hero: HomeTeacher) => this.hometeacher = hero);
    }
}
