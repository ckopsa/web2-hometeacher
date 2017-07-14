import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HomeTeacher } from '../home-teacher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private baseUrl = '/auth';  // URL to web API
    redirectUrl: string;
    isLoggedIn = false;
    constructor (private http: Http) {}

    login(email: String, password: String): Observable<Boolean> {
        return Observable.of(true).delay(1000).do(homeTeacher => {
            this.isLoggedIn = true;
        });

        /* return this.http.get(this.baseUrl + '?id=')
            .map(this.extractData)
            .catch(this.handleError);
            */
    }

    logout(): void {
        this.isLoggedIn = false;
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("Body data" + body.data);
        return body.data || {};
    }
    private handleError(error: Response | any) {
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
