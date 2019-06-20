import { Request, Response } from 'express';
import { FabcarControllerBackEnd } from '../convector';


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
export async function FabcarController_queryAll(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .queryAll());
        
    } catch(ex) {
        console.log('Error get FabcarController_queryAll', ex.stack);
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