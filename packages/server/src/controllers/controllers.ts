import { Request, Response } from 'express';
import { FabcarControllerBackEnd } from '../convector';
import { Fabcar } from 'fabcar-cc';


export async function FabcarController_init(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .init());
            
    } catch(ex) {
        console.log('Error post FabcarController_init', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_queryOne(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .queryOne(params.id));
        
    } catch(ex) {
        console.log('Error get FabcarController_queryOne', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_getAll(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .getAll().then(cars => cars.map(car => new Fabcar(car).toJSON())));
        
    } catch(ex) {
        console.log('Error get FabcarController_getAll', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_create(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .create(params.car));
            
    } catch(ex) {
        console.log('Error post FabcarController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_changeOwner(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .changeOwner(params.id,params.owner));
            
    } catch(ex) {
        console.log('Error post FabcarController_changeOwner', ex.stack);
        res.status(500).send(ex);
    }
}