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

// *********************************************** INTERFACE **************************************************************
//Nuovo type per gli object di tipo Post. In pratica con le interface è possibile dichiarare un nuovo tipo che ha quella forma.
interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

const printPostWithInterfaceTypePost = (postToPrint: Post) => {
    return `Title: ${postToPrint.title} - DaysOld: ${postToPrint.daysOld}`;
}

//printPostWithInterfaceTypePost("1"); //errore.
printPostWithInterfaceTypePost(post);

//Dietro le scene typescript controllerà tutte le property e il loro type. Se non matchano allora restituisce un errore.

// *********************************************** CLASSES **************************************************************
//SIMILI A JAVA.

class Car {

    color: string;
    year: number;

    constructor ()
    constructor(color: string, year: number)
    constructor(color?: string, year?: number) {
        this.color = color;
        this.year = year;
    }

    //possiamo anche non creare un costruttore ed assegnare alla variabili direttamente il valore.
    // dietro le scene verrà chiamano il costruttore e tutte le proprietà verranno inizializzate all'interno
    /*Example -> senza costruttore
    color: 'red'; -> type inference string
    year: 2001; -> type inference number.

    dietro le scene sarà fatto questo in automatico
    constructor(){
        this.color = 'red';
        this.number = 2001;
    }
    */

    drive(){
        console.log("Vroom");
    }
}

const myCar = new Car();
myCar.drive();

console.log(myCar.color); //Undefined
console.log(myCar.color); //Undefined

//Assengazione property.
myCar.color = "blue";
myCar.year = 2021;


//Instanza con costruttore

const myCar2 = new Car('red',2021); // -> così le property vengono inizializzate nel costruttore.


// *********************************************** PRIVATE AND PUBLIC **************************************************************
// Stessa logica java. In mancanza del modificatore di accesso di default è public.
class AnotherCar {

    public color: string;
    private year: number;


    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    drive(){
        console.log("Vroom");
    }
}

const anotherCar = new AnotherCar('red',2001);

console.log(anotherCar.color); //OK
//console.log(anotherCar.year); //NOT OK

// *********************************************** SHORT CLASS **************************************************************
//Questa classe è del tutto equivalente a quella precedente ma vengono usati degli shortcut di typescritp.

class SmartAnotherCar {
 /*
    public color: string;
    private year: number;


    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }
    */

    //Così in automatico verrà fatto quello che è stato commentato sopra. Molto meno codice.
    constructor(public color: string, private year: number) {}

    drive(){
        console.log("Vroom");
    }
}

const smartAnotherCar = new SmartAnotherCar('red',2001);

console.log(smartAnotherCar.color);