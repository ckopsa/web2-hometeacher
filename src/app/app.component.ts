import { Component } from '@angular/core';
import { HomeTeacherService } from './home-teacher.service';
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

    constructor(private homeTeacherSevice: HomeTeacherService) {
    }

    ngOnInit(): void {
        this.getHomeTeacher();
        this.title = this.homeTeacher.firstname;
    }
    getHomeTeacher(): void {
        this.homeTeacherSevice.getHomeTeacher()
            .subscribe(homeTeacher => this.homeTeacher = homeTeacher);
        console.log(this.homeTeacher);
    }

}
