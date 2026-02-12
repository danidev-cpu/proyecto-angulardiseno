import { Component, Input } from '@angular/core';
import { IDish } from '../../models/dish.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-card',
  imports: [CommonModule],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.css',
})
export class DishCard {
  @Input() dish!: IDish;
}
