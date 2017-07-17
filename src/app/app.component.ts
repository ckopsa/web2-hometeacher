import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HomeTeacher } from './home-teacher';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ AuthService ]
})
export class AppComponent {
    constructor(private auth: AuthService,
                public router: Router) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}
