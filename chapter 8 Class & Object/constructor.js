class human{
    // properties
    age = 13; // public property
    #wt = 80; // private property
    ht = 180;

    //behavior
    walking(){
        console.log('walking', this.#wt)

    }

    runnig(){
        console.log('running')
    }

    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(wt){
        this.#wt = wt;
    }


    // constructor

    constructor(newAge, newWt, newHt){
        this.age = newAge;
        this.#wt = newWt;
        this.ht = newHt;
    }
}

let obj = new human(50, 100, 200)
console.log(obj.age)
console.log(obj.walking())