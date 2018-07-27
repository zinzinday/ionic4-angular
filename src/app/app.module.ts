import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouteReuseStrategy, Routes} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {RecoverComponent} from './recover/recover.component';
import {LoginComponent} from './accounts/login/login.component';
import {RegisterComponent} from './accounts/register/register.component';
import {UnlockedComponent} from './accounts/unlocked/unlocked.component';
import {ProfileComponent} from './accounts/profile/profile.component';
import {SecurityComponent} from './accounts/security/security.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        RecoverComponent,
        LoginComponent,
        RegisterComponent,
        UnlockedComponent,
        ProfileComponent,
        SecurityComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
