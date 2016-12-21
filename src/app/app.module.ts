
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CapacitySignupComponent } from './signup/capacity-signup/capacity-signup.component';
import { CredentialsSignupComponent } from './signup/credentials-signup/credentials-signup.component';
import { EmailConfirmationComponent } from './signup/email-confirmation/email-confirmation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { routing } from './app.routing';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service.ts';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service'

@NgModule({
  declarations: [
    AppComponent,
    CapacitySignupComponent,
      CredentialsSignupComponent,
      EmailConfirmationComponent,
      NavbarComponent,
      LoginComponent,
      HomeComponent,
      UserProfileComponent,
      GamesComponent,
      SignupComponent,
      HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ReactiveFormsModule,
    routing
  ],
  providers: [SignupService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
