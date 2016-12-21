import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component.ts';
import { UserProfileComponent } from './user-profile/user-profile.component.ts'
import { GamesComponent } from './games/games.component.ts';
import { LoginComponent } from './login/login.component.ts';
import { CapacitySignupComponent } from './signup/capacity-signup/capacity-signup.component.ts';
import { SIGNUP_ROUTES } from './signup/signup.routes.ts';
import { SignupComponent } from './signup/signup.component.ts';

const APP_ROUTES: Routes = [    
    { path: 'signup', component: CapacitySignupComponent },
    { path: 'signup', component: SignupComponent, children: SIGNUP_ROUTES },
    { path: 'login', component: LoginComponent },
    { path: 'games', component: GamesComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);