import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormatDirective } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {

  heroes = [
    { id: 1, name: 'iron-man' },
    { id: 2, name: 'captain-america' },
    { id: 3, name: 'spider-man' }
  ];

  selectedHero: any;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}