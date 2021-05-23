// ************************************************ BASIC TYPES ****************************************************************
/*
string,
number,
boolean,
undefined,
null,
any -> qualsiasi type
*/
//Example
const myName: string = "Tommy";
const myNumber: number = 123;

// *********************************************** TYPE INFERENCE **************************************************************
/*
Typescript assegna il tipo in automatico alla prima assegnazione.(Type Inference)
*/
//Example
let myName2 = "Tommy";
//myName2 = 2; -> Errore di compilazione perchè typescript ha assegnato il tipo string a myName2.

//Alcune eccezioni. Type inference assegna il tipo specifico solo quando il valore e la dichiarazione sono sulla stessa riga.

//Example.
let test; //così assegna any.

test = "tommy";
test = 2;

//