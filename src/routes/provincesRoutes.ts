import { TokenValidation } from '../lib/verifyToken';
import provinciaController from '../controller/provinciaController';
import { Router, Request, Response } from 'express';

class ProvinceRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        /******/
        // this.router.get('/', (req, res) => { res.json([{ id: 1, nombre: 'Buenos Aires' }]) });
        // this.router.post('/', (req, res) => { res.status(201).send() })
        // this.router.delete('/:id', (req, res) => { res.status(200).json({ message: `Pronvicia con id ${req.params.id} borrada` }) })
        // this.router.patch('/:id', (req, res) => {})
        // this.router.put('/:id', (req,res) => {})
        /******/

        // this.router.get('/', TokenValidation, provinciaController.list); //hecho
        this.router.get('/', provinciaController.list); //prueba
        this.router.get('/:id', provinciaController.find); //hecho
        this.router.post('/', provinciaController.addProvince); //hecho
        this.router.put('/:id', provinciaController.update); //hecho
        this.router.delete('/:id', provinciaController.delete); //hecho

        // this.router.get('/:name',provinciaController.findName);
    }
}

//Exportamos el enrutador del objeto usuarios con 

const provinceRoutes = new ProvinceRoutes();
export default provinceRoutes.router;