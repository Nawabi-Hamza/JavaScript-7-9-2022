            // loooops

const aN=[12,13,432,53,56]
for (let i =0; i<aN.length ;i++){
    console.log(aN[i])
}

const items={
    name:'desk',price:423,
    barand:'sony'
}

// for (let key in items){
//     console.log(key+":"+items[key])
// }

// const item = ['tv','car','pc','pin']
// for (let key1 of item ){
//     console.log(key1)

// }

// var st = "startupistan"
// for (let sttt of st){
//     console.log(sttt)
// }


var i=1
while (i<=5){
    console.log(i)
    i++
}

var i=2
do {
    console.log("THIS IS NUMBER : "+i)
    i++
    
}
while (i<=1){
}


for (let a=0 ; a< 10; a++){
    if (a==3){
        break
    }
    console.log(a)
}
for (let b=0 ; b< 10; b++){
    if (b==3){
       continue
    }
    console.log(b)
}