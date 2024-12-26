module.exports =class Person
{
    //class property
age=25
//location='canada'
//property getters
get location()
{
    return 'canada';
}
constructor(firstName,lastName)
{
    //instance variable
    this.firstName=firstName;
    this.lastName=lastName;
}
//methods for 
fullName()
{
    console.log(this.firstName+this.lastName)
}

}



/* let newperson = new Person('Anita','Bannur')
let newperson1 = new Person('Vivek','Bannur')
console.log(newperson.location +" "+newperson.age)
newperson.fullName()
newperson1.fullName() */