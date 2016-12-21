import { Routes } from '@angular/router';

import { CapacitySignupComponent } from './capacity-signup/capacity-signup.component.ts';
import { CredentialsSignupComponent } from './credentials-signup/credentials-signup.component.ts';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component.ts';

export const SIGNUP_ROUTES: Routes = [
    { path: '', component: CapacitySignupComponent },
    { path: 'credentials', component: CredentialsSignupComponent },
    { path: 'emailconf', component: EmailConfirmationComponent }
]