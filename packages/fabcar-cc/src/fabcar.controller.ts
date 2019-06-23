import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Fabcar } from './fabcar.model';

@Controller('fabcar')
export class FabcarController extends ConvectorController<any> {
  @Invokable()
  public async init(
  ) {
    // Mock data
    let mockData = [
      new Fabcar({ id: '1', make: 'Toyota', model: 'Prius', colour: 'blue', owner: 'Tomoko' }),
      new Fabcar({ id: '2', make: 'Ford', model: 'Mustang', colour: 'red', owner: 'Brad' }),
      new Fabcar({ id: '3', make: 'Hyundai', model: 'Tucson', colour: 'green', owner: 'Jin Soo' }),
      new Fabcar({ id: '4', make: 'Volkswagen', model: 'Passat', colour: 'yellow', owner: 'Max' }),
      new Fabcar({ id: '5', make: 'Tesla', model: 'S', colour: 'black', owner: 'Adriana' }),
      new Fabcar({ id: '6', make: 'Peugeot', model: '205', colour: 'purple', owner: 'Michel' }),
      new Fabcar({ id: '7', make: 'Chery', model: 'S22L', colour: 'white', owner: 'Aarav' }),
      new Fabcar({ id: '8', make: 'Fiat', model: 'Punto', colour: 'violet', owner: 'Pari' }),
      new Fabcar({ id: '9', make: 'Tata', model: 'Nano', colour: 'indigo', owner: 'Valeria' }),
      new Fabcar({ id: '10', make: 'Holden', model: 'Barina', colour: 'brown', owner: 'Shotaro' })]
    await Promise.all(
      mockData.map(car => car.save()));
  }
  @Invokable()
  public async get(@Param(yup.string()) id: string): Promise<Fabcar> {
    return Fabcar.getOne(id);
  }
  @Invokable()
  public async getAll(): Promise<Fabcar[]> {
    return Fabcar.getAll();
  }

  @Invokable()
  public async create(@Param(Fabcar) car: Fabcar) {
    await car.save();
  }

  @Invokable()
  public async changeOwner(@Param(yup.string()) id: string,
                           @Param(yup.string()) owner: string) {
    let car = await Fabcar.getOne(id);
    car.owner = owner;
    return car.save();
  }
}