import { Usuario } from "models/userModel";
import { createConnection } from "mysql2";

class UserRepo {
	private db: any; //Manejador de la bd
	constructor() {
		this.config(); //aplicamos la conexion con la BD.
	}

	async config() {//Parametro de conexion con la BD.
		this.db = await createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'dbspadsweb'
		});
	}

	/* Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.*/
	async listar() {

		// const repoProvincias=await this.db.query('select * from tprovincias');
		// return repoProvincias[0];

		const result = await new Promise((resolve, reject) => {
			this.db.query('select id, nombre, password from usuarios', (err: any, rows: unknown) => {
				if (!err) {
					resolve(rows)
				} else {
					reject(err)
				}
			})
		})

		return result;
	}

	//Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
	//Si no la encuentra devuelve null
	async buscarId(id: number) {
		const encontrado: any = await this.db.promise().query('SELECT id, nombre, rol FROM usuarios WHERE id = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		if (encontrado.length > 1)
			return encontrado[0][0];
		console.log(encontrado);
		return null;
	}
	//Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
	//Si no la encuentra devuelve null
	async buscarNombre(nombre: string) {
		const encontrado: any = await this.db.promise().query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		if (encontrado.length > 1)
			return encontrado[0][0];
		return null;
	}

	async crearUsuario(usuario: Usuario) {
		const result = (await this.db.promise().query('INSERT INTO USUARIOS (nombre,email,password,rol) VALUES (?,?,?,?)',
			[
				usuario.nombre,
				usuario.email,
				usuario.password,
				usuario.rol]))[0].affectedRows;
				return result;

	}

	// async crearUsuario(usuario: Usuario) {
	// 	const result = (await this.db.promise().query('INSERT INTO USUARIOS SET ?', [usuario]))[0].affectedRows;
	// 	console.log(result);
	// 	return result;
	// }

	
	// //Devuelve 1 si logro actualizar el usuario indicado por id
	async actualizar(usuario: Usuario, id: string) {
		const result = (await this.db.query('UPDATE usuarios SET ? WHERE ID = ?', [usuario, id]))[0].affectedRows;
		console.log(result);
		return result;
	}

	async eliminar(id: number) {
		const usuario = (await this.db.promise().query('DELETE FROM USUARIOS WHERE ID = ?', [id]))[0].affectedRows;
		console.log(usuario);
		return usuario;
	}
}

//Exportamos el objeto userModel con 

const userRepo: UserRepo = new UserRepo();
export default userRepo;