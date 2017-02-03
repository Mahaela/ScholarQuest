import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './student/user-profile/user-profile.component'
import { GamesComponent } from './student/games/games.component';
import { LoginComponent } from './login/login.component';
import { CapacitySignupComponent } from './signup/capacity-signup/capacity-signup.component';
import { SIGNUP_ROUTES } from './signup/signup.routes';
import { SignupComponent } from './signup/signup.component';
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