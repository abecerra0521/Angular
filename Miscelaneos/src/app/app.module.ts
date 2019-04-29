import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { MarkerDirective } from './directives/marker.directive';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserNewComponent } from './components/user/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    MarkerDirective,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
