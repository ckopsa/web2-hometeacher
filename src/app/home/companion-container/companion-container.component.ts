import { Component, OnInit } from '@angular/core';
import { HomeTeacher } from '../../home-teacher';
import { CompanionshipService } from '../../services/companionship.service';

@Component({
    selector: 'app-companion-container',
    templateUrl: './companion-container.component.html',
    styleUrls: ['./companion-container.component.css'],
    providers: [ CompanionshipService ]
})
export class CompanionContainerComponent implements OnInit {
    companions: HomeTeacher[];
    constructor(private homeTeacherService: CompanionshipService) {
    }

    ngOnInit() {
        this.getCompanions("1");
    }

    getCompanions(id: String): void {
        this.homeTeacherService.getCompanions(id)
            .subscribe(companions => {
                if (companions) {
                    this.companions = companions.filter(companion => companion.id != 1);
                    console.log(this.companions);
                }
            });
    }


}
