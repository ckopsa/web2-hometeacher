import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-companionship-container',
    templateUrl: './companionship-container.component.html',
    styleUrls: ['./companionship-container.component.css']
})
export class CompanionshipContainerComponent implements OnInit {

    companionshipIds: number[] = [1,2,3];
    constructor() { }

    ngOnInit() {
    }
}
