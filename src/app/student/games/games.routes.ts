import { Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { MathBingoComponent } from './math-bingo/math-bingo.component';

export const GAMES_ROUTES: Routes = [
    { path: 'list', component: GamesListComponent },
    { path: 'mathBingo', component: MathBingoComponent }
]