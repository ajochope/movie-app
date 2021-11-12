import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements
  OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  @Input()
  title: string;

  @ViewChild(RatingComponent)
  rating: RatingComponent | undefined;

  timer!: ReturnType<typeof setInterval>;

  constructor() {
    this.title = "";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('On DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('On AfterViewInit');
    console.log(this.rating);
  }
  ngOnInit(): void {
    console.log('On Init');
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()), 1000);

  }
}
