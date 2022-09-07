var count=0
var ea=[]


function myS(){

   count ++
   console.log(count)
   if (count % 3 == 0 && count % 5 == 0){
    ea.push(" Iam Fine ")
    console.log('array : '+ea)
   }

   else if (count%3==0){
    ea.push("Hi")
    console.log(' array : '+ea)

   }
   else if (count%5==0){
    ea.push(" How are you ")
    console.log(' array : '+ea)
   }
   
}