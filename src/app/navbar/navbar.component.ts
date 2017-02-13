import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../student/student.service';

@Component({
  selector: 'sq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    private bronzeCoins = "00";
    private silverCoins = "00";
    private goldCoins = "00";
    @Input('loggedIn') _loggedIn = false
    constructor(private studentService: StudentService, private router: Router) {

        this.studentService.coinsObs.subscribe(coins => {
            let goldCoinNum = Math.trunc(coins / 10000);
            if (goldCoinNum < 10) {
                this.goldCoins = "0" + goldCoinNum;
            }
            else {
                this.goldCoins = String(goldCoinNum);
            }
            let silverCoinNum = Math.trunc((coins % 10000)/ 100)
            if (silverCoinNum < 10) {
                this.silverCoins = "0" + silverCoinNum;
            }
            else {
                this.silverCoins = String(silverCoinNum);
            }
            let bronzeCoinNum = Math.trunc(coins % 100);
            if (bronzeCoinNum < 10) {
                this.bronzeCoins = "0" + bronzeCoinNum;
            }
            else {
                this.bronzeCoins = String(bronzeCoinNum);
            }
        });

    }

    getLoggedIn(): boolean {
        return this._loggedIn;
    }

    logout() {
      this.studentService.logout();
      this.router.navigate(['']);
  }
}
