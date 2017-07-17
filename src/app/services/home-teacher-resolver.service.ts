import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { HomeTeacherService } from './home-teacher.service';
import { HomeTeacher } from '../home-teacher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class HomeTeacherResolverService {

    constructor(private hs: HomeTeacherService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeTeacher> {
        let id = route.paramMap.get('id');
        return this.hs.getHomeTeacher(id).map(hometeacher => {
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
