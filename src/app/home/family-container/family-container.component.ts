import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../../family';
import { FamilyService } from '../../services/family.service';
import { HomeTeacher } from '../../home-teacher';

@Component({
    selector: 'app-family-container',
    templateUrl: './family-container.component.html',
    styleUrls: ['./family-container.component.css'],
    providers: [FamilyService]
})
export class FamilyContainerComponent implements OnInit {
    @Input() hometeacher: HomeTeacher;
    families: Family[];
    selectedDate = new Date();
    selectedMonth = this.selectedDate.getMonth();
    months = [
        { code: 0, name: 'January' },
        { code: 1, name: 'February' },
        { code: 2, name: 'March' },
        { code: 3, name: 'April' },
        { code: 4, name: 'May' },
        { code: 5, name: 'June' },
        { code: 6, name: 'July' },
        { code: 7, name: 'August' },
        { code: 8, name: 'September' },
        { code: 9, name: 'October' },
        { code: 10, name: 'November' },
        { code: 11, name: 'December' }
    ];
    constructor(private familyService: FamilyService) {
    }

    ngOnInit() {
        this.getFamilies(this.hometeacher.companionship_id.toString());
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
    updateDate() {
        console.log("Selected month is " + this.selectedMonth.toString());
        // Must set to new variable so OnChanges will be called
        this.selectedDate = new Date();
        this.selectedDate.setMonth(this.selectedMonth);
        console.log("Selected date is " + this.selectedDate.toString());
    }
}
