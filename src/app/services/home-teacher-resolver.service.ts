import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { HomeTeacher } from '../home-teacher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class HomeTeacherResolverService {

    constructor(private hs: AuthService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeTeacher> {
        let username = sessionStorage.getItem('username');
        let password = sessionStorage.getItem('password');
        console.log("Username: " + username);
        return this.hs.login(username, password).map(hometeacher => {
            if (hometeacher) {
                console.log("hometeacher resolved");
                console.log("First name: " + hometeacher.firstname);
                return hometeacher;
            } else { // id not found
                this.router.navigate(['/login']);
                return null;
            }
        }).first();
    }
}
