//class

class User {
    id : number
    firstName : string
    lastName : string

    constructor (id :number , firstName:string, lastName:string ){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    login() : boolean {
        if (this.id === 1) {
            return true
        } else {
            return false
        }
    }

    reLogin() : boolean {
        return this.login()
    }

}

const tapir = new User(2,"tapir","pir")
const kucing = new User(1,"kucing","cing")

console.log("hewan",tapir);
console.log("hewan",kucing);


console.log(tapir.login());
console.log(kucing.login());

class profile {
    user : {
        username : string
        passwword : number
    }[]

 constructor (){
    this.user =[{
        username : "jarwo",
        passwword : 12345
    },
    {
        username : "sopo",
        passwword : 123456
    },
    {
        username : "adit",
        passwword : 1234567
    },
    {
        username : "denis",
        passwword : 12345678
    }
 ]
 }

}

//tugas

class Profile {
    users: {
        username: string;
        password: number;
    }[];

    constructor() {
        this.users = [
            { username: "jarwo", password: 12345 },
            { username: "sopo", password: 123456 },
            { username: "adit", password: 1234567 },
            { username: "denis", password: 12345678 }
        ];
    }

    login(username: string, password: number): { status: string; msg: string } {
        const user = this.users.find(users => users.username === username && users.password === password);

        if (user) {
            return { status: "berhasil", msg: "Anda berhasil login" };
        } else {
            return { status: "gagal", msg: "Username dan password berbeda" };
        }
    }
}


// const profile = new Profile();

// console.log(profile.login("jarwo", 12345)); // Output: { status: 'berhasil', msg: 'Anda berhasil login' }
// console.log(profile.login("sopo", 1234));  // Output: { status: 'gagal', msg: 'Username dan password berbeda' }



//sub class = merupakan turunan dari class baik itu properti maupun method

class Smarphone {
    color : string;
    brand : string;
    model : string;
    isTKDN : true;
    
    constructor(color : string , brand : string , model : string) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.isTKDN = true;
    }

    charging() {
        console.log(`smarphone ${this.model} lagi di cas`);
    }
}

const nokia = new Smarphone ("merah", "nokia" , "E3")
console.log('nokia' , nokia);

//sub class

//sub class akan menurunkan sifat dan perilaku dari class

class Android extends Smarphone {
  splitScreen (){
    console.log('split screen berhasil');
  }
}

const xiomi = new Android ('red' , 'xiomi', '12')
console.log('xiomi' , xiomi);
xiomi.charging()
xiomi.splitScreen()

class Ios extends Smarphone {
    airDrop (){
        console.log('air drop berhasil');
    }
}

//Polymorphism

// merupakan suatu keadaan dimana sub class ingin mengubah sifat atau perilaku dari class

class Iphone extends Smarphone {

    layar : number; 

    constructor(color : string , brand : string , model : string , layar : number) {
        super(color , brand , model)
        this.layar = layar;
    }

    splitScreen (){
      console.log('split screen berhasil');
    }

    showBrand(){
      console.log(`brand handphone ini adalah ${this.brand} dan ukurannya ${this.layar}`);
    }

    charging() {
      super.charging() // manggil method nya smartphone
      console.log(`iphone ${this.model} lagi di cas dengan fast charging`);
  }
  }

const iphone = new Iphone ('blue' , 'iphone' , '12' , 7)
console.log('iphone',iphone);
iphone.splitScreen()
iphone.showBrand()
iphone.charging()

