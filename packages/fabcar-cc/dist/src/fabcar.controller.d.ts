import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Fabcar } from './fabcar.model';
export declare class FabcarController extends ConvectorController<ChaincodeTx> {
    init(): Promise<void>;
    query(id: string): Promise<Fabcar>;
    queryAll(): Promise<Fabcar[]>;
    create(car: Fabcar): Promise<void>;
    changeOwner(id: string, owner: string): Promise<void>;
}
