// function sortarrayandmin(array){
//     if(!array.length){
//         throw new console.error("Array shoud not be empty");
//     }
//     else if(array.length==1){
//         console.log(array[0]);
//     }
//     else{
//         for(let i = 0; i<array.length; i++){
//             let outerele = array[i];
//             for(let j=i+1 ; j<array.length; j++){
//                 let innerele = array[j]
//                 if(outerele>innerele){
//                     array[i] = innerele;
//                     array[j] = outerele;
//                     innerele = array[j];
//                     outerele = array[i];
//                 }
//             }
//             return array[0]
//         }
//     }
// }
// var result = sortarrayandmin([7,5,9,6,8])
// console.log(result);

function sortarrayandmin(Array){
   if(!Array.length){
       throw new console.error("empty");
   }
   else if (Array.length==1){
       console.log(Array[0])
   }
   else{
       for(let i = 0 ; i<Array.length; i++){
           var outerele = Array[i]
           for(let j = i+1; j<Array.length; j++){
               var innerele = Array[j]
               if(outerele>innerele){
                   Array[i] = innerele;
                   Array[j] = outerele;
                   innerele = Array[j];
                   outerele = Array[i];
               }
            }
       }
       return Array[0]
   }
}
var result = sortarrayandmin([7,5,3,6,1,5])
console.log(result);