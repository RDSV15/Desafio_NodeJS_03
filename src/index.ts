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
	

	const readline = require('readline');
		const leitor = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout
	});

	const conj: any[] = [];
	const conjn: any[] = [];

	leitor.question('Digite a quantidade de alunos: ', async (quantidade: number) => {
    	for(let i = 0; i < quantidade; i++) {
        	
       	 	await new Promise((resolve) => { 
            	leitor.question(`Digite o seu nome ${i}: `, (nome: any) => {
                	resolve(conj.push(nome)); 
					
            	});
        	});

			{
       	 		await new Promise((resolve) => { 
            		leitor.question(`Digite sua nota ${i}: `, (nota: any) => {
                		resolve(conjn.push(nota)); 
					
            		});
        		});

    		}
		}
		leitor.close();
    	console.log(conj);
		console.log(conjn);
	
		const maxnota = conjn.sort((val1,val2)=> {
		return (val1.nota < val2.nota ) ? 1 : -1
		})[0];
		console.log('qual foi a maior nota?')
		console.log(maxnota);

	});


});
	


	