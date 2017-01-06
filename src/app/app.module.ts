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
import { UserProfileComponent } from './student/user-profile/user-profile.component';
import { GamesComponent } from './student/games/games.component';
import { routing } from './app.routing';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { StudentService } from './student/student.service';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ReactiveFormsModule,
    routing
  ],
  providers: [SignupService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
