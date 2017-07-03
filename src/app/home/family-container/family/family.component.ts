import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../../../family';

@Component({
    selector: 'app-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
    @Input() family: Family;
    constructor() { }

    ngOnInit() {
    }

}
