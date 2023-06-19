import { Request, Response } from "express";
import provinceRepo from "../repository/provinceRepo";
import { IProvincia } from "../models/provinciaModel";
import ProvinceValidator from "validators/provinceValidator";

class ProvinciaController {

    // validator: ProvinceValidator = new ProvinceValidator();
    
    //CRUD	
    public async list(req: Request, res: Response) {
        console.log(req.header("Authorization"));//Observamos el valor del token
        console.log(req.body);
        const provincias = await provinceRepo.listar();
        console.log(provincias);
        return res.json(provincias);
    }

    public async addProvince(req: Request, res: Response) {
        const provincia: IProvincia = req.body;
        console.log(req.body);
        const busqueda = await provinceRepo.buscarNombre((provincia.nombre));
        if (!busqueda) {
            const result = await provinceRepo.crear(provincia);
            return res.json({ mensaje: 'ProvinciaGuardada!!'+ result });
        }
        return res.json({ mensaje: 'La provincia ya existe!' });
    }

    public async find(req: Request, res: Response) {
        console.log(req.params.id);
        const { id } = req.params;
        const provincia: IProvincia = await provinceRepo.buscarId(parseInt(id));
        if (provincia)
            return res.json(provincia);
        res.status(404).json({ text: "la provincia con id no existe:" + id });
    }

    // public async find(req: Request, res: Response) {
    //     console.log(req.params.id);
    //     const { id } = req.params;
    //     const provincia: IProvincia = await provinceRepo.buscarId(parseInt(id));
    //     if (this.validator.validate(provincia))
    //         return res.json(provincia);
    //     res.status(404).json({ text: "la provincia con id no existe:" + id });
    // }

    public async update(req: Request, res: Response) {//params lleva los datos que se pasan por URL o URI
        console.log(req.body);
        const { id } = req.params;
        const result = await provinceRepo.actualizar(req.body, parseInt(id));
        // res.send('Provincia '+ req.params.id +' actualizada!!!');
        return res.json({ text: 'Actualizando unaa provincia con id.. ' + id });
    }

    public async delete(req: Request, res: Response) {//params lleva los datos que se pasan por URL o URI
        console.log(req.body);
        const { id } = req.params;
        const result = await provinceRepo.eliminar(parseInt(id));
        return res.json({ text: 'Borrando una provincia. Otra mas y van... Id de provincia: ' + id });
        //faltaria programar lo que pasa si no encunetra el id que quiere borrar...
    }

    // public async findName(req: Request, res: Response) {
    //     console.log(req.params.id);
    //     const { nombre } = req.params;
    //     const result: IProvincia = await provinceRepo.buscarNombre(nombre);
    //     if (result)
    //         return res.json(result);
    //     res.status(404).json({ text: "Esa provincia no existe" });
    // }


    //FIN CRUD
}

const provinciaController = new ProvinciaController();
export default provinciaController;