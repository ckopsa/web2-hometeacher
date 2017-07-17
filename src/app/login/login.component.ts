import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    loading = false;


    constructor(
        public authService: AuthService,
        public router: Router,
        public route: ActivatedRoute,
    ) { }

    ngOnInit() {
    }

    login() {
        sessionStorage.setItem('username', this.email);
        sessionStorage.setItem('password', this.password);
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
    }
}
