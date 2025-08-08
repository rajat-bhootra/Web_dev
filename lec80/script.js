class Animal {
    constructor(name) {
        this.name = name
        console.log("Obj is created...");
        
    }

    eats(){
        console.log("Eating...");
    }

    jumps(){
        console.log("Jumping...");
        
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("This is Lion...");
    }

    eats(){
        super.eats()
        console.log("Not Eating...");
    }
}
let a = new Animal ("Bunny")
console.log(a);

let l = new Lion ("Shera")
console.log(l);

