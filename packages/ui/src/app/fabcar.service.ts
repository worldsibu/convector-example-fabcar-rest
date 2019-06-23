import { Injectable } from '@angular/core';
import { ClientFactory } from '@worldsibu/convector-core';

import { FabcarController } from 'fabcar-cc';

import { BrowserControllerAdapterService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class FabcarService {
  public fabcarCtrl = ClientFactory(FabcarController, this.adapter);

  constructor(private adapter: BrowserControllerAdapterService) { }
}
