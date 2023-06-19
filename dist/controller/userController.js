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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepo_1 = __importDefault(require("../repository/userRepo"));
class UserController {
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Datos: ", req.body);
            const { nombre, password } = req.body;
            const result = yield userRepo_1.default.buscarNombre(nombre);
            console.log(nombre);
            console.log(password);
            console.log(result);
            if (result != null && result.nombre == nombre && result.password == password) {
                const token = jsonwebtoken_1.default.sign({ _id: result.id }, "secretKey");
                res.json({ "login": "ok", "mensaje": "Bienvenido " + result.nombre, token: token });
                return;
            }
            res.json({ "login": "incorrecto", "mensaje": "Usuario y/o contraseña incorrectos!!" });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.header("Authorization")); //Observamos el valor del token
            console.log(req.body);
            const usuarios = yield userRepo_1.default.listar();
            console.log(usuarios);
            return res.json(usuarios);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield userRepo_1.default.buscarId(parseInt(id));
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "el usuario con id no existe:" + id });
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body;
            const busqueda = yield userRepo_1.default.buscarNombre((String)(usuario.nombre));
            if (!busqueda) {
                const result = yield userRepo_1.default.crearUsuario(usuario);
                return res.json({ mensaje: 'usuario creado!' });
            }
            return res.json({ mensaje: 'ya existe el usuario' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield userRepo_1.default.actualizar(req.body, id);
            return res.json({ text: 'Actualizando usuari@ con id.. ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield userRepo_1.default.eliminar(parseInt(id));
            return res.json({ text: 'Borrando un usuari@. Otra mas y van... Id de usuari@: ' + id });
        });
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController.js.map