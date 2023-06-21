"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const TokenValidation = (req, res, next) => {
    var _a;
    //Recuperamos la cabecera y la dividimos en 2
    let token = ((_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split('Bearer ', 2));
    //tomamos la parte que nos interesa, el token, para despues evaluar.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5VG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3ZlcmlmeVRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdPLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVksRUFBRSxJQUFpQixFQUFFLEVBQUU7O0lBQy9FLDZDQUE2QztJQUMxQyxJQUFJLEtBQUssR0FBTyxDQUFDLE1BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsMENBQUUsS0FBSyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLG9FQUFvRTtJQUNwRSxJQUFHLENBQUMsS0FBSyxFQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDckQ7SUFDRCxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLElBQUksRUFBRSxDQUFDO0FBQ1IsQ0FBQyxDQUFBO0FBWlksUUFBQSxlQUFlLG1CQVkzQiJ9