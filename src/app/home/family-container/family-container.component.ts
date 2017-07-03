import { Component, OnInit } from '@angular/core';
import { Family } from '../../family';
import { FamilyService } from '../../services/family.service';

@Component({
    selector: 'app-family-container',
    templateUrl: './family-container.component.html',
    styleUrls: ['./family-container.component.css'],
    providers: [ FamilyService ]
})
export class FamilyContainerComponent implements OnInit {
    families: Family[];
    constructor(private familyService: FamilyService) {
    }

    ngOnInit() {
        this.getFamilies("1");
    }

    getFamilies(id: String): void {
        this.familyService.getCompanionshipFamilies(id)
            .subscribe(families => {
                if (families) {
                    this.families = families;
                    console.log(this.families);
                }
            });
    }
}
