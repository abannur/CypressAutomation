const Person =require('./personClass')
let day ='Tuesday'
console.log(day.length)
let subday = day.slice(0,4)
console.log(subday)
let split=day.split('s')
console.log(split[1].trim())

let date='23'
let nextDate='27'
let diff = parseInt(nextDate)-parseInt(date)
console.log(diff)
console.log(diff.toString())

let newQuote = day+" is fun day day"
console.log(newQuote)
console.log(newQuote.indexOf('day'))
console.log(newQuote.indexOf("day",5))
let count =0;
let index = newQuote.indexOf('day')

while(index!=-1)
{
    count++;
    index = newQuote.indexOf('day',index+1)
}
console.log(count)

//javascript object
let person ={
    firstName:'Anita',
    lastName:'Bannur',
    age:30,
    fullName:function(){console.log(this.firstName+" "+this.lastName)}
}
console.log(person.fullName())
console.log(person.firstName)
console.log(person['lastName'])
person.firstName='Tim'
console.log(person.firstName)
person.gender='female'
console.log(person)
if('gender'  in person)
    {
        console.log('false')
    }
console.log(person.gender)
delete person.gender
console.log(person)
for(let key in person)
{
    console.log(person[key])
}


let newObj = new Person('Vian','bannur')
newObj.fullName()


let productPrices = [34, 15, 88, 2, 96, 43];
let discountedPrices =productPrices.map(num=>num*10/100)
console.log(discountedPrices)
let affordableProducts = discountedPrices.filter(num=>num<4)
console.log(affordableProducts)
let totalCost = affordableProducts.reduce((val,sum)=>val+sum)