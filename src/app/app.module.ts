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
import { AvatarComponent } from './student/user-profile/avatar/avatar.component';
import { CursorFollowerButtonsComponent } from './student/user-profile/cursor-follower/cursor-follower-buttons/cursor-follower-buttons.component';
import { CursorFollowerListComponent } from './student/user-profile/cursor-follower/cursor-follower-list/cursor-follower-list.component';
import { EyesComponent } from './student/user-profile/cursor-follower/eyes/eyes.component';
import { HighlightCursorFollowerDirective } from './student/user-profile/cursor-follower/cursor-follower-buttons/highlight-cursor-follower.directive';
import { CursorFollowerService } from './student/user-profile/cursor-follower/cursor-follower.service';
import { CursorButtonsComponent } from './student/user-profile/cursor/cursor-buttons/cursor-buttons.component';
import { CursorDisplayComponent } from './student/user-profile/cursor/cursor-display/cursor-display.component';
import { CursorService } from './student/user-profile/cursor/cursor.service';
import { HighlightCursorDirective } from './student/user-profile/cursor/cursor-buttons/highlight-cursor.directive';
import { CursorComponent } from './student/user-profile/cursor/cursor.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { EmailGuard } from './email.guard';
import { MathBingoComponent } from './student/games/math-bingo/math-bingo.component';
import { HighlightMathBingoDirective } from './student/games/math-bingo/highlight-math-bingo.directive';
import { GamesListComponent } from './student/games/games-list/games-list.component';
import { VocabMatchComponent } from './student/games/vocab-match/vocab-match.component';
import { DragulaModule } from 'ng2-dragula';
import { NgPipesModule } from 'ngx-pipes';
import { CorrectStylingDirective } from './student/games/vocab-match/correct-styling.directive';
import { VocabMatchReloadComponent } from './student/games/vocab-match/vocab-match-reload.component';

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
      AvatarComponent,
      CursorFollowerButtonsComponent,
      CursorFollowerListComponent,
      EyesComponent,
      HighlightCursorFollowerDirective,
      CursorButtonsComponent,
      CursorDisplayComponent,
      HighlightCursorDirective,
      CursorComponent,
      MathBingoComponent,
      HighlightMathBingoDirective,
      GamesListComponent,
      VocabMatchComponent,
      CorrectStylingDirective,
      VocabMatchReloadComponent
  ],
  imports: [
    NgPipesModule,
    DragulaModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [SignupService, StudentService, CursorFollowerService, CursorService, AuthService, AuthGuard, EmailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
