// nomor 1

function minimal(a:number , b:number) {

    const kecil = a < b 
    return kecil
}

const angka = minimal (1,4)
console.log(angka);

//nomor 2

function power(a:number , b:number) {
    const hasil = a ** b 
    return hasil 
}

const kuadrat = power(3,3)
console.log(kuadrat);

//nomor 3



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




