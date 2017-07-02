import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HomeTeacher } from './home-teacher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeTeacherService {
    private heroesUrl = '/hometeacher?id=1';  // URL to web API

    constructor (private http: Http) {}

    getHomeTeacher(): Observable<HomeTeacher> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("Body data" + body);
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
