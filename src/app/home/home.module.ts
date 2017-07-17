import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdSelectModule,
} from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { FamilyContainerComponent } from './family-container/family-container.component';
import { CompanionContainerComponent } from './companion-container/companion-container.component';
import { FamilyComponent } from './family-container/family/family.component';
import { CompanionComponent } from './companion-container/companion/companion.component';

@NgModule({
    declarations: [
        HomeComponent,
        FamilyContainerComponent,
        CompanionContainerComponent,
        FamilyComponent,
        CompanionComponent,
    ],
    imports: [
        FormsModule,
        HomeRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MaterialModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdSelectModule,
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
