import { Component } from '@angular/core';
import { FabcarService } from './fabcar.service';
import { Fabcar } from 'fabcar-cc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Fabcar[] = [];

  newCar = new Fabcar();

  constructor(private fabcar: FabcarService) {
    this.load();
  }

  async load() {
    this.cars = await this.fabcar.fabcarCtrl.getAll();
  }

  async init() {
    await this.fabcar.fabcarCtrl.init();
    await this.load();
  }

  async create() {
    await this.fabcar.fabcarCtrl.create(this.newCar);
    this.newCar = new Fabcar();
    await this.load();
  }
}
