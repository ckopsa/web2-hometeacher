import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Report } from '../report';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {
    private baseUrl = '/report';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) {}

    getFamilyReportForMonth(familyId: number, month: number, year: number): Observable<Report> {
        var prpStr = this.baseUrl
            + '?family_id=' + familyId
            + '&month=' + ++month
            + '&year=' + year;
        console.log(prpStr);
        return this.http.get(prpStr)
            .map(this.extractData)
            .catch(this.handleError);
    }

    createFamilyReportForMonth(familyId: number, companionshipId: number, month: number, year: number): Observable<Report> {
        var postJSON = JSON.stringify(
                {
                    report_date: new Date(year, month).toDateString(),
                    family_id: familyId,
                    companionship_id: companionshipId
                });
        console.log("Post: " + postJSON);
        return this.http
            .post(this.baseUrl, postJSON, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteReport(id: number) {
        return this.http
            .delete(this.baseUrl + '?id=' + id, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }


    getMonthlyCompanionshipReports(companionshipId: String, month: number): Observable<Report[]> {
        var prpStr = this.baseUrl
            + '?companionship_id=' + companionshipId
            + '&month=' + ++month
            + '&year=2017';
        return this.http.get(prpStr)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("Body data" + body.data);
        return body.data[0] || { };
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
