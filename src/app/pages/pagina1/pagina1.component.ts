import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'Andres';
  segundos: number = 0;
  timerSubscription!: Subscription; 
  constructor() {
    console.log('constructor');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
   this.timerSubscription = interval(1000).subscribe(i=> this.segundos = i)
  }

  guardar() {}
}
