import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngOnDestroy(): void {
    //unsubcribe()
  }
  subscription!: Subscription;
  ngAfterContentInit(): void {
    console.log('AfterContentInit called');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit Called');
  }
  @ViewChild('paragraph') paragraph!: ElementRef;
  ngOnInit(): void {
    console.log('ngonint called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input('name') name!: string;

  public programmingLanguages = ['Java', 'JavaScript', 'Python', 'C++'];
}
