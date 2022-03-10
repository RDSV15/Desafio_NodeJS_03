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
	
	const arr = [
		{nome: 'João', nota: 7},
		{nome: 'Pedro', nota: 5},
		{nome: 'Gabriel', nota: 7.5},
		{nome: 'José', nota: 9},
		{nome: 'Tiago', nota: 8.4},
		{nome: 'André', nota: 8.6}
	];
	const count = arr.filter(Boolean).length;
	//1,1

	var readline = require('readline');
	var resp = "";
	//
	var leitor = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout
	});
	//2,1

	const maxnota = arr.sort((val1,val2)=> {
		return (val1.nota < val2.nota ) ? 1 : -1
	})[0];
	//4,1
	
	console.log('Qual a quantidade de alunos?');
	//
	console.log(count);
	//1,2

	leitor.question("Qual o seu nome?\n", function(answer: any) {
    	var resp = answer;
    	console.log("\nSua resposta '" + resp + "' foi armazenada");
    	//
		leitor.question("Olá " + resp + ", qual sua nota?\n", function(answer: any) {
			var nota = answer;
			console.log("\nSua resposta '" + nota + "' foi armazenada");
			leitor.close();
			//
			console.log("Muito obrigado " + resp + ", pela sua resposta");
			//3,2

			console.log('Qual o aluno com a maior nota?');
			//
			console.log(maxnota);	
			//4,2
	
		});
	});

});

	