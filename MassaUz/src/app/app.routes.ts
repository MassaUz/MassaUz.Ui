import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PreparadiComponent } from './components/pages/preparadi/preparadi.component';
import { OplataComponent } from './components/pages/oplata/oplata.component';
import { ObmeniComponent } from './components/pages/obmeni/obmeni.component';
import { SkidkiComponent } from './components/pages/skidki/skidki.component';
import { DostavkaComponent } from './components/pages/dostavka/dostavka.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdresdostavkiComponent } from './components/pages/adresdostavki/adresdostavki.component';
import { KakoformitComponent } from './components/pages/kakoformit/kakoformit.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CpaciboComponent } from './components/pages/cpacibo/cpacibo.component';
import { ConsultationComponent } from './components/pages/consultation/consultation.component';
import { VkladkiComponent } from './components/pages/vkladki/vkladki.component';
import { InfoComponent } from './components/pages/info/info.component';
import { KartochkaComponent } from './components/pages/kartochka/kartochka.component';
import { UserprofileComponent } from './components/pages/userprofile/userprofile.component';
import { NovostiComponent } from './components/pages/novosti/novosti.component';
import { KorzinaComponent } from './components/pages/korzina/korzina.component';
import { NotFound404Component } from './components/pages/not-found404/not-found404.component';
import { authGuard, expireGuard } from './guard/auth.guard';

export const routes: Routes = [

    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'preporadi', component:PreparadiComponent,canActivate: [authGuard, expireGuard]},
    {path:'oplata', component:OplataComponent, canActivate: [authGuard, expireGuard]},
    {path:'obmeni', component:ObmeniComponent, canActivate: [authGuard, expireGuard]},
    {path:'skidki', component:SkidkiComponent, canActivate: [authGuard, expireGuard]},
    {path:'dostavka', component:DostavkaComponent, canActivate: [authGuard, expireGuard]},
    {path:'dashboard', component: DashboardComponent, canActivate: [authGuard, expireGuard]},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegistrationComponent},
    {path:'adresdostavki', component: AdresdostavkiComponent,canActivate: [authGuard, expireGuard]},
    {path:'kakoformit', component:KakoformitComponent,canActivate: [authGuard, expireGuard]},
    {path:'contacts', component:ContactsComponent,canActivate: [authGuard, expireGuard]},
    {path:'cpacibo', component:CpaciboComponent,canActivate: [authGuard, expireGuard]},
    {path:'consultation', component:ConsultationComponent,canActivate: [authGuard, expireGuard]},
    {path:'vkladki', component:VkladkiComponent,canActivate: [authGuard, expireGuard]},
    {path:'info', component:InfoComponent,canActivate: [authGuard, expireGuard]},
    {path:'kartochka', component:KartochkaComponent,canActivate: [authGuard, expireGuard]},
    {path:'userprofile', component:UserprofileComponent, canActivate: [authGuard, expireGuard]},
    {path:'novosti', component:NovostiComponent, canActivate: [authGuard, expireGuard]},
    {path:'korzina', component:KorzinaComponent},
    {path:'**', component:NotFound404Component}

];
