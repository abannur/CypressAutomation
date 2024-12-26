const Person =require('./personClass')
class Pet extends Person
{

    get location()
    {
        return 'Bluecross'
    }
    constructor(firstName,lastName)
    {
        //call the parent class constructor and its mandatory
        super(firstName,lastName)
    }
}

let petName =new Pet('xyzz','sam')
petName.fullName()
console.log(petName.location)