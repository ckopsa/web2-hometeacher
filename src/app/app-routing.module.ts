import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { HomeTeacherResolverService } from './services/home-teacher-resolver.service';
import { HomeTeacherService } from './services/home-teacher.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, /*canActivate: [AuthGuard],*/ },
    { path: 'home', component: HomeComponent, resolve: {hometeacher: HomeTeacherResolverService} },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        HomeTeacherResolverService,
        HomeTeacherService,
    ]
})
export class AppRoutingModule { }
