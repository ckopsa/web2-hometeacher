import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeComponent } from './home/home.component';
import { FamilyContainerComponent } from './home/family-container/family-container.component';
import { CompanionContainerComponent } from './home/companion-container/companion-container.component';
import { FamilyComponent } from './home/family-container/family/family.component';
import { CompanionComponent } from './home/companion-container/companion/companion.component';
import { CompanionshipContainerComponent } from './admin/companionship-container/companionship-container.component';

//import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminComponent,
        OverviewComponent,
        PageNotFoundComponent,
        HomeComponent,
        FamilyContainerComponent,
        CompanionContainerComponent,
        FamilyComponent,
        CompanionComponent,
        CompanionshipContainerComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
