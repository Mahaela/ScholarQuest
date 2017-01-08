import { Component, trigger, style, state, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';

@Component({
    selector: 'sq-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css'],
    animations: [
        trigger('visibility', [
            state('hidden', style({ 'opacity': 0 })),
            state('visible', style({ 'opacity': 1 })),
            transition('hidden <=> visible', animate(300))])
        ]})
export class AvatarComponent  {
    private firstAvatarImg: string;
    private secondAvatarImg: string;
    private arrowState = 'hidden';
    private firstAvatarState = 'visible';
    private secondAvatarState = 'hidden';
    private avatarImg0 = '../../../assets/avatars/DarkWizard.jpg';
    private avatarImg1 = '../../../assets/avatars/Mogul.jpg';
    private avatarImg2 = '../../../assets/avatars/SailorMoon.jpg';
    private avatarImg3 = '../../../assets/avatars/TuxedoMask.jpg';
    
    private avatarImgs = [this.avatarImg0, this.avatarImg1, this.avatarImg2, this.avatarImg3];

    constructor(private router: Router, private studentService: StudentService) {
        ////leave page if not logged in
        //if (this.studentService.getName() == '') {
        //    this.router.navigate(['']);
        //}
        this.firstAvatarImg = this.avatarImgs[0];
        this.secondAvatarImg = this.avatarImgs[0];
        
            //this.avatarImgs[studentService.getAvatar()];
    }

    arrows() {
        this.arrowState == 'hidden' ? this.arrowState = 'visible' : this.arrowState = 'hidden';
    }


    avatarScrollUp(oldAvatar: HTMLElement, avatar: HTMLElement) {
        if (this.firstAvatarState == 'visible') {
            if (this.avatarImgs.indexOf(this.firstAvatarImg) == this.avatarImgs.length - 1) {
                this.secondAvatarImg = this.avatarImgs[0];
            }
            else {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.firstAvatarImg) + 1];
            }
            this.firstAvatarState = 'hidden';
            this.secondAvatarState = 'visible';
        }
        else {
            if (this.avatarImgs.indexOf(this.secondAvatarImg) == this.avatarImgs.length - 1) {
                this.firstAvatarImg = this.avatarImgs[0];
            }
            else {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.secondAvatarImg) + 1];
                }  
            this.firstAvatarState = 'visible';
            this.secondAvatarState = 'hidden';
        }
    }

    avatarScrollDown() {
        if (this.firstAvatarState == 'visible') {
            if (this.avatarImgs.indexOf(this.firstAvatarImg) == 0) {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.length -1];
            }
            else {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.firstAvatarImg) - 1];
            }
            this.firstAvatarState = 'hidden';
            this.secondAvatarState = 'visible';
        }
        else {
            if (this.avatarImgs.indexOf(this.secondAvatarImg) == 0) {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.length - 1];
            }
            else {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.secondAvatarImg) - 1];
            }
            this.firstAvatarState = 'visible';
            this.secondAvatarState = 'hidden';
        }
    }
}
