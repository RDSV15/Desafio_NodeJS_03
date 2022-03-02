/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const nome1:string = 'João'
	const nota1:number = 7
	
	const nome2:string = 'Pedro'
	const nota2:number = 5
	
	const nome3:string = 'Gabriel'
	const nota3:number = 7.5
	
	const nome4:string = 'José'
	const nota4:number = 9
	
	const nome5:string = 'Tiago'
	const nota5:number = 8.4
	
	const nome6:string = 'André'
	const nota6:number = 8.6;
	
	const arr = [
		{nome: 'João', nota: 7},
		{nome: 'Pedro', nota: 5},
		{nome: 'Gabriel', nota: 7.5},
		{nome: 'José', nota: 9},
		{nome: 'Tiago', nota: 8.4},
		{nome: 'André', nota: 8.6}
	];
	const count = arr.filter(Boolean).length;

	const maxnota = arr.sort((val1,val2)=> {
		return (val1.nota < val2.nota ) ? 1 : -1
	})[0]
	
	console.log('Qual a quantidade de alunos?');
	
	console.log(count);
	
	console.log('Qual seu nome e qual a sua nota?');

	console.log(nome1  + ', nota:' + nota1)
	console.log(nome2  + ', nota:' + nota2)
	console.log(nome3  + ', nota:' + nota3)
	console.log(nome4  + ', nota:' + nota4)
	console.log(nome5  + ', nota:' + nota5)
	console.log(nome6  + ', nota:' + nota6)

	console.log('Qual o aluno com a maior nota?');

	console.log(maxnota);	
});

