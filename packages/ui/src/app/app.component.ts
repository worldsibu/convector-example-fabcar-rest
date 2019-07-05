import { Component, Inject } from '@angular/core';
// import { FabcarService } from './fabcar.service';
import { FabcarController, Fabcar } from 'fabcar-cc';
import { ConvectorControllerClient } from '@worldsibu/convector-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Fabcar[] = [];

  newCar = new Fabcar();

  constructor(
    @Inject(FabcarController)
    private fabcar: ConvectorControllerClient<FabcarController>
  ) {
    this.load();
  }

  async load() {
    this.cars = await this.fabcar.getAll();
  }

  async init() {
    await this.fabcar.init();
    await this.load();
  }

  async create() {
    await this.fabcar.create(this.newCar);
    this.newCar = new Fabcar();
    await this.load();
  }
}
