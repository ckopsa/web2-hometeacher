import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeTeacherService } from './services/home-teacher.service';
import { HomeTeacher } from './home-teacher';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HomeTeacherService]
})
export class AppComponent {
    title = 'app works!';
    homeTeacher: HomeTeacher;

    constructor(private homeTeacherService: HomeTeacherService,
                public router: Router) {
    }

    ngOnInit(): void {
        this.getHomeTeacher("1");
    }

    getHomeTeacher(id: String): void {
        this.homeTeacherService.getHomeTeacher(id)
            .subscribe(homeTeacher => {
                if (homeTeacher) {
                    this.homeTeacher = homeTeacher;
                    console.log(homeTeacher);
                    this.router.navigate(["home"]);
                }
            });
    }
}
