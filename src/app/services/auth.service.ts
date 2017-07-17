import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { HomeTeacher } from '../home-teacher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    isLoggedIn = false;
    user = null;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http) { }

    login(username: String, password: String): Observable<HomeTeacher> {
        console.log(username + " =>u p<= " + password);
        var postJSON = JSON.stringify(
            {
                username: username,
                password: password
            });
        console.log("Post: " + postJSON);
        return this.http
            .post('/auth', postJSON, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    logout(): void {
        this.isLoggedIn = false;
        this.user = null;
        sessionStorage.setItem('username', null);
        sessionStorage.setItem('password', null);
    }

    private extractData(res: Response) {
        let body = res.json();
        if (body.data[0].id)
            this.isLoggedIn = true;
        return body.data[0] || {};
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
