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
}

let obj = new human()
console.log(obj.age)
console.log(obj.walking())