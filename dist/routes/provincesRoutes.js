"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const provinciaController_1 = __importDefault(require("../controller/provinciaController"));
const express_1 = require("express");
class ProvinceRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        /******/
        // this.router.get('/', (req, res) => { res.json([{ id: 1, nombre: 'Buenos Aires' }]) });
        // this.router.post('/', (req, res) => { res.status(201).send() })
        // this.router.delete('/:id', (req, res) => { res.status(200).json({ message: `Pronvicia con id ${req.params.id} borrada` }) })
        // this.router.patch('/:id', (req, res) => {})
        // this.router.put('/:id', (req,res) => {})
        /******/
        // this.router.get('/', TokenValidation, provinciaController.list); //hecho
        this.router.get('/', provinciaController_1.default.list); //prueba
        this.router.get('/:id', provinciaController_1.default.find); //hecho
        this.router.post('/', provinciaController_1.default.addProvince); //hecho
        this.router.put('/:id', provinciaController_1.default.update); //hecho
        this.router.delete('/:id', provinciaController_1.default.delete); //hecho
        // this.router.get('/:name',provinciaController.findName);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const provinceRoutes = new ProvinceRoutes();
exports.default = provinceRoutes.router;
//# sourceMappingURL=provincesRoutes.js.map