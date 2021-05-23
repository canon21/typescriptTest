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
let myName2 = "Tommy"; //assegna alla variabile myName2 il tipo string.

//myName2 = 2; -> Errore di compilazione perchè typescript ha assegnato il tipo string a myName2.

//Alcune eccezioni. Type inference assegna il tipo specifico solo quando il valore e la dichiarazione sono sulla stessa riga.

//Example.
let test; //così assegna any.

test = "tommy";
test = 2;

// *********************************************** FUNCTION **************************************************************
//L'assegnazione dei tipi è utile per correggere alcuni errori che si possono commettere durante la scrittura del codice.

//Con assegnazione del tipo.
const add = (a: number, b: number) => {
    return a + b; //Type inference here.. sul ritorno
}

//Con assegnazione del tipo e ritorno annotato
const add2 = (a: number, b: number): number => {
    return a + b; //Type inference here.. sul ritorno
}


function joinString (a: string, b: string): string {
    return a + b;
}

// *********************************************** OBJECT **************************************************************
/* Dando il tipo object typeScript a tempo di compilazione ci avvisa di alcuni errori come la chiamata di un metodo o 
accesso ad una variabile non esistente nell'oggetto. */

const post = {
    title: "news",
    daysOld: 10,
    published: true
};

//Se si vuole dichiare un oggetto esplicitamente.

let postExplicity : { title: string, daysOld: number, published: boolean};

//possiamo anche fare un assegnazione

const postExplicity2 : { title: string, daysOld: number, published: boolean} = {
    title: "news",
    daysOld: 10,
    published: true
};

//oggetto argomento di una function -> backtick  = alt+96

//In questo caso postToPrint è dichiarato come any. Gli oggetti sono sempre any.
const printPost = (postToPrint) => {
    return `Title: ${postToPrint.title} - DaysOld: ${postToPrint.daysOld}`;
}

//Ma se vogliamo specificare la forma dell'object. Solitamente non utilizzato perchè è trpp lunga la sintassi.
// si preferisce usare l'interface.
const printPost2 = (postToPrint:  {title: string, daysOld: number, published: boolean}) => {
    return `Title: ${postToPrint.title} - DaysOld: ${postToPrint.daysOld}`;
}