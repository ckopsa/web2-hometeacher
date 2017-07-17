import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    selectedDate = new Date();
    selectedMonth = this.selectedDate.getMonth();
    months = [
        {code: 0, name: 'January'},
        {code: 1, name: 'February'},
        {code: 2, name: 'March'},
        {code: 3, name: 'April'},
        {code: 4, name: 'May'},
        {code: 5, name: 'June'},
        {code: 6, name: 'July'},
        {code: 7, name: 'August'},
        {code: 8, name: 'September'},
        {code: 9, name: 'October'},
        {code: 10, name: 'November'},
        {code: 11, name: 'December'}
    ];


    constructor() { }

    ngOnInit() {
    }

    updateDate() {
        console.log("Selected month is " + this.selectedMonth.toString());
        // Must set to new variable so OnChanges will be called
        this.selectedDate = new Date();
        this.selectedDate.setMonth(this.selectedMonth);
        console.log("Selected date is " + this.selectedDate.toString());
    }


}
