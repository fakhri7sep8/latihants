// nomor 1

function minimal(a:number , b: number) {
    const perbandingan = a < b ? a : b
    return perbandingan
}

const banding = minimal (2,9)
console.log(banding);


//nomor 2

function power(a:number , b:number) {
    const hasil = a ** b 
    return hasil 
}

const kuadrat = power(3,3)
console.log(kuadrat);

//nomor 3

function findEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}

// Contoh penggunaan
const angka1 = [5, 3, 9, 1, 4, 6, 8];
console.log(findEvenNumbers(angka1)); 


//nomor 4

class Animal {
    name : string;
    age : number;
    isMamal : boolean;

    constructor(name : string , age : number , isMamal :boolean) {
        this.name = name
        this.age = age
        this.isMamal = true
    }
}

const hewan = new Animal ("kucing" , 10 , true)
console.log(hewan);

class Rabbit extends Animal {
    eat(){
        console.log(`${this.name} yang berumur ${this.age} sedang makan `);
    }
}

const kelinci = new Rabbit("kelinci",12 , true)
console.log(kelinci);

//nomor 6

class Eagle extends Animal {

    speed : number;
    isMamal: boolean;

    constructor(name : string , age : number , isMamal:boolean , speed :number ) {
        super(name , age , isMamal)
        this.speed = speed;
        this.isMamal = false
    }


    fly(){
        console.log(`${this.name} yang berumur ${this.age} sedang terbang`);
    }

    run(){
        console.log(`${this.name} berlari dengan kecepatan ${this.speed} km`);
    }
}

const elang = new Eagle("elang" , 12 , false , 100)
console.log(elang);
elang.fly()
elang.run()

//nomor 7 

class EagleRun extends Eagle {

    fly(){
        console.log(`${this.name} yang berumur ${this.age} sedang terbang`);
    }

    runEagle(){
        //gatau
    }
}

const elang2 = new Eagle("elang2" , 12 , true , 100)
console.log(elang2);
elang2.run

//nomor 8

const myRabbit = new Rabbit("kelinci",12 , true)
console.log(myRabbit);

//nomor 9

const myEggle = new Eagle("elang" , 12 , false , 100)
console.log(myEggle);

//nomor 10

const runEggle = new Eagle("elang" , 12 , false , 100)
console.log(runEggle);





