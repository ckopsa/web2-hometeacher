import { Component, OnInit, Input } from '@angular/core';
import { HomeTeacher } from '../../home-teacher';
import { CompanionshipService } from '../../services/companionship.service';

@Component({
    selector: 'app-companion-container',
    templateUrl: './companion-container.component.html',
    styleUrls: ['./companion-container.component.css'],
    providers: [CompanionshipService]
})
export class CompanionContainerComponent implements OnInit {
    @Input() hometeacher: HomeTeacher;
    @Input() companionshipId: number;
    companions: HomeTeacher[];
    constructor(private homeTeacherService: CompanionshipService) {
    }

    ngOnInit() {
        this.getCompanions(this.hometeacher.companionship_id.toString());
    }

    getCompanions(id: String): void {
        this.homeTeacherService.getCompanions(id)
            .subscribe(companions => {
                if (companions) {
                    if (this.hometeacher) {
                        this.companions = companions.filter(companion => companion.id != this.hometeacher.id);
                    } else {
                        this.companions = companions;
                    }
                    console.log(this.companions);
                }
            });
    }


}
