export interface Usuario{
	id?: number;
	nombre?: string;
	email?: string;
	password?: string;
	rol?: string;
	alta?:Date;
	activado?: string;
	perfil?: string;
}