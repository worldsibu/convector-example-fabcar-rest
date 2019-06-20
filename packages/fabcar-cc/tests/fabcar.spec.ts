// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Fabcar, FabcarController } from '../src';

describe('Fabcar', () => {
  let adapter: MockControllerAdapter;
  let fabcarCtrl: ConvectorControllerClient<FabcarController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    fabcarCtrl = ClientFactory(FabcarController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'FabcarController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Fabcar({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await fabcarCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Fabcar>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});