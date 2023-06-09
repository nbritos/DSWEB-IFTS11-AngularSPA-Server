"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const TokenValidation = (req, res, next) => {
    var _a;
    let token = ((_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split('Bearer ', 2));
    if (!token) {
        console.log(token);
        return res.status(401).json("Acceso denegado :P");
    }
    token = token['1'];
    console.log("Evaluando token recibido");
    console.log(token);
    next();
};
exports.TokenValidation = TokenValidation;
//# sourceMappingURL=verifyToken.js.map