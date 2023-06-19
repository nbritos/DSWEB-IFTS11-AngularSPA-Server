"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const provinceRepo_1 = __importDefault(require("../repository/provinceRepo"));
class ProvinciaController {
    // validator: ProvinceValidator = new ProvinceValidator();
    //CRUD	
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.header("Authorization")); //Observamos el valor del token
            console.log(req.body);
            const provincias = yield provinceRepo_1.default.listar();
            console.log(provincias);
            return res.json(provincias);
        });
    }
    addProvince(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = req.body;
            console.log(req.body);
            const busqueda = yield provinceRepo_1.default.buscarNombre((provincia.nombre));
            if (!busqueda) {
                const result = yield provinceRepo_1.default.crear(provincia);
                return res.json({ mensaje: 'ProvinciaGuardada!!' + result });
            }
            return res.json({ mensaje: 'La provincia ya existe!' });
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const provincia = yield provinceRepo_1.default.buscarId(parseInt(id));
            if (provincia)
                return res.json(provincia);
            res.status(404).json({ text: "la provincia con id no existe:" + id });
        });
    }
    // public async find(req: Request, res: Response) {
    //     console.log(req.params.id);
    //     const { id } = req.params;
    //     const provincia: IProvincia = await provinceRepo.buscarId(parseInt(id));
    //     if (this.validator.validate(provincia))
    //         return res.json(provincia);
    //     res.status(404).json({ text: "la provincia con id no existe:" + id });
    // }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield provinceRepo_1.default.actualizar(req.body, parseInt(id));
            // res.send('Provincia '+ req.params.id +' actualizada!!!');
            return res.json({ text: 'Actualizando unaa provincia con id.. ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield provinceRepo_1.default.eliminar(parseInt(id));
            return res.json({ text: 'Borrando una provincia. Otra mas y van... Id de provincia: ' + id });
            //faltaria programar lo que pasa si no encunetra el id que quiere borrar...
        });
    }
}
const provinciaController = new ProvinciaController();
exports.default = provinciaController;
//# sourceMappingURL=provinciaController.js.map