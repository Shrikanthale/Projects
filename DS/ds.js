// // function numbers(a,b){
// //     let c = a + b;
// //     return c 
// // }

// // var result = numbers(5,8)
// // console.log(result);

// function findminnum(array){
//     if(!array.length){
//         throw new console.error("it is empty array");
//     }
//     else if(array.length==1){
//         return array[0]
//     }
//     else{
//         var currentmin = array[0];
//         for(let i=1; i<array.length;i++){
//             if(array[i]<currentmin){
//                 currentmin=array[i];
//             }
//         }
//         return currentmin
//     }
// }

// var result = findminnum([5,8,9,3,7]);
// console.log(result);

function findminnum(array){
    if(!array.length){
        throw new console.error("empty array");
    }
    else if(array.length == 1){
        return array[0];
    }
    else{
        var currentmin = array[0]
        for(var i = 1 ; i<array.length ; i++){
            if(array[i]<currentmin){
                currentmin=array[i];
            }
        }
        return currentmin
    }
}
var result = findminnum([45,22,88,48,26,95,48,52,35])
console.log(result);