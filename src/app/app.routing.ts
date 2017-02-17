import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './student/user-profile/user-profile.component'
import { GamesComponent } from './student/games/games.component';
import { LoginComponent } from './auth/login/login.component';
import { CapacitySignupComponent } from './auth/signup/capacity-signup/capacity-signup.component';
import { SIGNUP_ROUTES } from './auth/signup/signup.routes';
import { SignupComponent } from './auth/signup/signup.component';
import { GAMES_ROUTES } from './student/games/games.routes';

const APP_ROUTES: Routes = [
    { path: 'signup', component: CapacitySignupComponent },
    { path: 'signup', component: SignupComponent, children: SIGNUP_ROUTES },
    { path: 'login', component: LoginComponent },
    { path: 'games', component: GamesComponent },
    { path: 'games', component: GamesComponent, children: GAMES_ROUTES },
    { path: 'profile', component: UserProfileComponent },
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
