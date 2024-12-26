function evnOrOdd(num)
{

   if(num%2===0)
   {
    console.log("even")
   }
   else{
    console.log("odd")
   }
}

function removeDup(str1)
{ 
    var answer = "";
    var freq =[];
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i]
        if(freq[char])
        {
            freq[char]++;
        }
        else{
            freq[char]=1
            answer=answer+char
        }
        
        
    }
    console.log(freq)
    return answer;
}

function palidrome(str2)
{
    return str2===str2.split("").reverse().join("");
}

function evenarray(array)
{
   let array2= [];
    for(let num:array)
    {
        if(num%2==0)
        {
array2[]
        }
    }
}

const reverseStr=(str)=>str.split("").reverse().join("")

evnOrOdd(5)
console.log(removeDup("Thimmaraju"))
console.log(palidrome("madam"))