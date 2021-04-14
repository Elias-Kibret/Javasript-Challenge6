var Given_String="eaaabbbascsssccc";
var Number_Of_existance=[]
var counter=0
var result=[]
console.log(Given_String.split(''))
var newA=Array.from(new Set(Given_String.split('')))

newA.filter((item,index)=>{
   Given_String.split('').filter((new_Item)=>{
   if(item==new_Item)
   {
   counter++
   Number_Of_existance[index]=counter
  
}
   
} )
  counter=0 })
for(var i=0;i<newA.length;i++)
{
  result[i]=Number_Of_existance[i]+newA[i]
}
console.log(result.toString().replace(/,/g,''))