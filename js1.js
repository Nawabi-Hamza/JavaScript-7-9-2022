/*
let a = 10;
let b = 20;
let c = 10;
                                   //if else , nested if , switch
if (a>b){
      alert("a is less then b")
}
else if (a=c){
    alert("are the same")
}
else{
      alert("a is grather then b")
}
*/
/*
        //this is greather or less
function myS(){
    var a1= document.getElementById('a').value
    var b1= document.getElementById('b').value
    let aa=parseInt(a1) 
    let bb=parseInt(b1) 

    if (aa > bb){
        alert(aa+" is greather than "+bb)
    }
   else if (aa < bb){
        alert(aa+ " is less then than "+bb)
    } 
    else{
        alert("this is not in program")
    }

}
*/

/*
        //first trick 
function myS(){
    var a1= document.getElementById('a').value  
    let aa=parseInt(a1) 
   
    if (aa % 4===0 && aa%100==0 && aa%400==0){
        alert(" this is leap year ")
    }
  
    else{
        alert("this is not leap year")
    }

}
*/
/*
        //second trick
function myS(){
    var a1= document.getElementById('a').value  
    let aa=parseInt(a1) 
   
    if (aa % 4===0 ){
        if(aa % 100===0){
            if(aa % 400===0){
                alert("this is leap year")

            }
            else{
                alert("this is not leap year")
            }
        }
        else{
            alert("this is not leap year")
        }
    }
  
    else{
        alert("this is not leap year")
    }
}*/


switch(new Date().getDay()){
    case 0 :
        alert("1 shanbi")
    break;
    case 1 :
        alert("2 shanbi")
    break;
    case 2 :
        alert("3 shanbi")
    break;
    case 3 :
        alert("4 shanbi")
    break;
    case 4 :
        alert("5 shanbi")
    break;
    case 5 :
        alert("juma")
    break; 
    default:
    alert("shanbi")
}

function myS(){
    var a =prompt()
    var userS=document.getElementById('a').value
    var userScore=parseInt(userS)
    switch (true){
            case (userScore <= 100 && userScore >= 90) :
              alert("A")
            break;
            case (userScore >= 75 && userScore <= 89) :
              alert("B")
            break;
            case (userScore >= 50 && userScore <= 74) :
              alert("C")
            break;
            default :
              alert("F")
            }
        }