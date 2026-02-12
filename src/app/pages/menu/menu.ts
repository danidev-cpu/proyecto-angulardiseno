import { Component } from '@angular/core';
import { DishCard } from '../../components/dish-card/dish-card';
import { IDish } from '../../models/dish.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [DishCard, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  public listaPlatos: IDish[] = [];
  public showInputDishes: boolean = false;
  public newDish: IDish = {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: 'principales',
    enabled: true,
    image: '',
  };

  showInputDish() {
    this.showInputDishes = true;
  }

  addDish() {
    if (this.newDish.name && this.newDish.price > 0) {
      this.newDish.id = Math.random().toString(36).substr(2, 9);
      this.listaPlatos.push({ ...this.newDish });
      this.resetForm();
    }
  }

  resetForm() {
    this.newDish = {
      id: '',
      name: '',
      description: '',
      price: 0,
      category: 'principales',
      enabled: true,
      image: '',
    };
    this.showInputDishes = false;
  }
}
