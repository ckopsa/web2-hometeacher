import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Family } from '../family';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FamilyService {
    private baseUrl = '/companionshipfamilies';  // URL to web API

    constructor (private http: Http) {}

    getFamily(familyId: String): Observable<Family> {
        return this.http.get(this.baseUrl + '?id=' + familyId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getCompanionshipFamilies(companionshipId: String): Observable<Family[]> {
        return this.http.get(this.baseUrl + '?companionship_id=' + companionshipId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("Body data" + body.data);
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
