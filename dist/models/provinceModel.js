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
const mysql2_1 = __importDefault(require("mysql2"));
class ProvinceModel {
    constructor() {
        this.db = mysql2_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'dbspadsweb'
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db.query('select id, nombre, capital, descripcion, imagen from tprovincias', (err, rows) => {
                    if (!err) {
                        resolve(rows);
                    }
                    else {
                        reject(err);
                    }
                });
            });
            return result;
        });
    }
    buscarId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM tprovincias WHERE id = ?', [id]);
            if (encontrado.length > 1)
                return encontrado[0][0];
            console.log(encontrado);
            return null;
        });
    }
    buscarNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM tprovincias WHERE nombre = ?', [nombre]);
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    crear(provincia) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO tprovincias SET ?', [provincia]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    actualizar(provincia, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE tprovincias SET ? WHERE ID = ?', [provincia, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = (yield this.db.query('DELETE FROM tprovincias WHERE ID = ?', [id]))[0].affectedRows;
            console.log(provincia);
            return provincia;
        });
    }
}
const provinceModel = new ProvinceModel();
exports.default = provinceModel;
//# sourceMappingURL=provinceModel.js.map