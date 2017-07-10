import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Family } from '../../../family';
import { Report } from '../../../report';

@Component({
    selector: 'app-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.css'],
    providers: [ ReportService ]
})
export class FamilyComponent implements OnInit, OnChanges {
    @Input() family: Family;
    @Input() date: Date;

    report: Report;

    constructor(private reportService: ReportService) { }

    ngOnInit() {
        this.getReport(this.family.id, this.date.getMonth(), this.date.getFullYear());
    }

    getReport(id: number, month: number, year: number): void {
        this.reportService
            .getFamilyReportForMonth(this.family.id, this.date.getMonth(), this.date.getFullYear())
            .subscribe(report => {
                if (!!report.id) {
                    this.report = report;
                    console.log("Report: " + this.report.toString());
                } else {
                    this.report = null;
                    console.log("Null report");
                }
            });
    }

    createReport(id: number, month: number, year: number): void {
        this.reportService
            .createFamilyReportForMonth(this.family.id,
                                        this.family.companionship_id,
                                        this.date.getMonth(),
                                        this.date.getFullYear())
            .subscribe(report => {
                if (!!report.id) {
                    this.report = report;
                    console.log("Report: " + this.report.toString());
                } else {
                    this.report = null;
                    console.log("Null report");
                }
            });
    }

    deleteReport(id: number): void {
        console.log("Deleting report");
        this.reportService
            .deleteReport(this.report.id)
            .subscribe(report => {
                this.report = null;
                console.log("Deleting report");
            });
    }

    toggleReport() {
        if (!!this.report && !!this.report.id) {
            this.deleteReport(this.report.id);
        } else {
            this.createReport(this.family.id, this.date.getMonth(), this.date.getFullYear());
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        console.log('onChange fired');
        console.log('changing', changes);
        this.getReport(this.family.id, this.date.getMonth(), this.date.getFullYear());
    }
}
