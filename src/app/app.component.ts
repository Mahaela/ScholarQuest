import { Component } from '@angular/core';

import { StudentService } from './student/student.service';
import { AuthService } from './auth.service';


@Component({
    selector: 'sq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    private xPos = 0;
    private yPos = 0;
    private cursorFollower = '0';
    private loaded: Promise<boolean>;
    private loggedIn = false;

    constructor(private studentService: StudentService, private authService: AuthService) {
        this.loaded = new Promise(resolve => {
            this.authService.isAuthenticated().subscribe(isLoggedIn => {
                this.loggedIn = isLoggedIn;
                resolve(true);
            });
        })
        document.body.style.backgroundImage = "url('../assets/backgrounds/stone2.png')";
    }

    mouseMove($event) {
        let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        this.xPos = event.clientX + xOffset;
        this.yPos = event.clientY + yOffset;
    }
    
}
