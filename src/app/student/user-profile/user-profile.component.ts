import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'sq-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    private 
    private activeAvatarImg: string;
    private avatarImg0 = '../../assets/avatars/DarkWizard.jpg';
    private avatarImg1 = '../../assets/avatars/Mogul.jpg';
    private avatarImg2 = '../../assets/avatars/SailorMoon.jpg';
    private avatarImg3 = '../../assets/avatars/TuxedoMask.jpg';
    private avatarImgs = [this.avatarImg0, this.avatarImg1, this.avatarImg2, this.avatarImg3];

    constructor(private router: Router, private studentService: StudentService) {
        ////leave page if not logged in
        //if (this.studentService.getName() == '') {
        //    this.router.navigate(['']);
        //}
      
        this.activeAvatarImg = this.avatarImgs[studentService.getAvatar()];
    }

    showArrows(lArrow: HTMLElement, rArrow: HTMLElement) {
        lArrow.style.display = "block";
        rArrow.style.display = "block";
    }

    hideArrows(lArrow: HTMLElement, rArrow: HTMLElement) {
        lArrow.style.display = "none";
        rArrow.style.display = "none";
    }

    avatarScrollUp() {
        if (this.avatarImgs.indexOf(this.activeAvatarImg) == this.avatarImgs.length - 1) {
            this.activeAvatarImg = this.avatarImgs[0];
        }
        else {
            this.activeAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.activeAvatarImg) + 1];
        }
        this.studentService.setAvatar(this.avatarImgs.indexOf(this.activeAvatarImg));
    }

    avatarScrollDown() {
        if (this.avatarImgs.indexOf(this.activeAvatarImg) == 0) {
            this.activeAvatarImg = this.avatarImgs[this.avatarImgs.length - 1];
        }
        else {
            this.activeAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.activeAvatarImg) - 1];
        }
        this.studentService.setAvatar(this.avatarImgs.indexOf(this.activeAvatarImg));
    }

  ngOnInit() {
  }

}
