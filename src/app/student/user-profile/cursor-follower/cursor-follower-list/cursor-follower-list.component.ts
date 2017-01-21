import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, HostListener, ElementRef, Input, OnChanges,  OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EyesComponent } from '../eyes/eyes.component';
import { StudentService } from '../../../student.service';
import { CursorFollowerService } from '../cursor-follower.service';

@Component({
  selector: 'sq-cursor-follower-list',
  templateUrl: './cursor-follower-list.component.html',
  entryComponents: [EyesComponent],
  providers: [EyesComponent],
  styleUrls: ['./cursor-follower-list.component.css']
})
export class CursorFollowerListComponent implements AfterContentInit, OnChanges, OnDestroy{
    @ViewChild('cursorFollower', { read: ViewContainerRef }) cursorFollower;
    private componentRef;
    private cursorFollowers;
    private cursorFollowerIndex = 0;
    @Input() xPos;
    @Input() yPos;
    private cursorFollowerReady = false;
    private studentServiceIndex;
    subscription: Subscription;


    constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private studentService: StudentService, private cursorFollowerService: CursorFollowerService, private elementRef: ElementRef) {
        this.cursorFollowers = cursorFollowerService.getCursorFollowerComponents();
        this.subscription = this.studentService.cursorFollowerStartPositionObs.subscribe(cf => this.changeFollower(cf));
    }

    getCursorFollower(): number {
        return this.studentService.getCursorFollower();
    }

    changeFollower(cf: number[]) {
        if (this.cursorFollowerReady){
            this.cursorFollower.clear();
            if (cf[0] != 0) {
                let factory = this.componentFactoryResolver.resolveComponentFactory(this.cursorFollowers[cf[0]]);
                this.componentRef = this.cursorFollower.createComponent(factory);
                this.cursorFollowerIndex = cf[0];
                this.moveCursorFollower();
            }
        }
    }

    ngAfterContentInit() {
        this.cursorFollowerReady = true;
        for (var i = 0; i < this.cursorFollowers.length; i++) {
            if (i == this.studentService.getCursorFollower()) {
                if (this.cursorFollowerIndex != this.studentService.getCursorFollower()) {
                    if (this.studentService.getCursorFollower() == 0) {
                        this.cursorFollowerIndex = 0;
                    }
                    else {
                        let factory = this.componentFactoryResolver.resolveComponentFactory(this.cursorFollowers[i]);
                        this.componentRef = this.cursorFollower.createComponent(factory);
                        this.cursorFollowerIndex = i;
                    }
                }
            }
        }
    }

    ngOnChanges() {
        if (this.cursorFollowerIndex != 0) {
            this.moveCursorFollower();
        }
    }

    moveCursorFollower() {
        this.componentRef.instance.yPos = this.yPos;
        this.componentRef.instance.xPos = this.xPos;
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
