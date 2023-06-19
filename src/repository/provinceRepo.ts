import mysql, { Connection } from 'mysql2';
import { IProvincia } from "../models/provinciaModel";

class ProvinceRepo {
	// private db: Connection;
	private db:any;

	constructor() {
		this.db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'dbspadsweb'
		});
	}


	async listar() {

		// const repoProvincias=await this.db.query('select * from tprovincias');
		// return repoProvincias[0];
		
		const result = await new Promise((resolve, reject) => {
			this.db.query('select id, nombre, capital, descripcion, imagen from provincias', (err: any, rows: unknown) => {
				if (!err) {
					resolve(rows)
				} else {
					reject(err)
				}
			})
		})

		return result;
	}

	async buscarId(id: number) {
		const encontrado: any = await this.db.promise().query('SELECT * FROM provincias WHERE id = ?', [id]);
		if (encontrado.length > 1)
			return encontrado[0][0];
		console.log(encontrado);
		return null;
	}

	async buscarNombre(nombre: string) {
		const encontrado: any = await this.db.promise().query('SELECT * FROM provincias WHERE nombre like ?', [nombre]);
		if (encontrado.length > 1)
			return encontrado[0][0];
		return null;
	}

	async crear(provincia: IProvincia) {
		const result = (await this.db.promise().query('INSERT INTO provincias SET ?', [provincia]))[0].affectedRows;
		console.log(result);
		return result;
	}

	async actualizar(provincia: IProvincia, id: number) {
		const result = (await this.db.promise().query('UPDATE provincias SET ? WHERE ID = ?', [provincia, id]))[0].affectedRows;
		console.log(result);
		return result;
	}

	async eliminar(id: number) {
		const provincia = (await this.db.promise().query('DELETE FROM provincias WHERE ID = ?', [id]))[0].affectedRows;
		console.log(provincia);
		return provincia;
	}
}

const provinceRepo: ProvinceRepo = new ProvinceRepo();
export default provinceRepo;