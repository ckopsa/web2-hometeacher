import { Component, OnInit } from '@angular/core';
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


    constructor(public authservice: AuthService) { }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.authservice.login(this.email, this.password);
    }


}
