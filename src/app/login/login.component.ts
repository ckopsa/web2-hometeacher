import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    loading = false;


    constructor(public authservice: AuthService) { }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.authservice.login({
            email: this.email,
            password: this.password,
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(
            response => {
                this.router.navigate(['home'])
            },
            error => {
                this.loading = false;
            });
    }


}
