import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FamilyContainerComponent } from './home/family-container/family-container.component';
import { CompanionContainerComponent } from './home/companion-container/companion-container.component';
import { FamilyComponent } from './home/family-container/family/family.component';
import { CompanionComponent } from './home/companion-container/companion/companion.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FamilyContainerComponent,
        CompanionContainerComponent,
        FamilyComponent,
        CompanionComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
