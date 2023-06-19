"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ingreso
        this.router.post('/signin', userController_1.default.signin);
        //metodos crud
        this.router.get('/list', userController_1.default.list);
        this.router.get('/:id', userController_1.default.find);
        this.router.post('/', userController_1.default.addUser);
        this.router.put('/:id', userController_1.default.update);
        this.router.delete('/:id', userController_1.default.delete);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map