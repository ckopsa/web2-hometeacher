import { Component, OnInit, Input } from '@angular/core';
import { HomeTeacher } from '../../../home-teacher';

@Component({
    selector: 'app-companion',
    templateUrl: './companion.component.html',
    styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {
    @Input() companion: HomeTeacher;
    constructor() { }


    ngOnInit() {
    }

}
