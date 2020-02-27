function main(){

    //Private Method
   let privateMethodDemo1 = function (numValue1, numValue2){
   return numValue1 + numValue2;

   }

   let privateMethodDemo2 = function (numValue1, numValue2){
    return numValue1 - numValue2;
   }

   let privateMethodDemo3 = function (numValue1, numValue2){
    return numValue1 * numValue2;
   }
   
   //Using Object
   let privateMethod = {
       privateMethod1: privateMethodDemo1,
       privateMethod2: privateMethodDemo2,
       privateMethod3: privateMethodDemo3
    };
   
    let privateMethodArray = new Array();
    privateMethodArray.push(privateMethodDemo1);//[0]
    privateMethodArray.push(privateMethodDemo2);//[1]
    privateMethodArray.push(privateMethodDemo3);//[2]
   
    //return privateMethodDemo;
    //return privateMethod;

    return privateMethodArray;
}

//let mainObj = new main();
//mainObj.privateMethodDemo();

//let resultPrivateMethod = main();
//let result = resultPrivateMethod(2,2);
//console.log(result); 


  //Using Object
  // let resultPrivateMethodObj = main();
  // let resultPrivateMethod1 = resultPrivateMethodObj.privateMethod1(2,2);
  // console.log(resultPrivateMethod1);

   
  // let resultPrivateMethod2 = resultPrivateMethodObj.privateMethod2(5,2);
  // console.log(resultPrivateMethod2);

   
  // let resultPrivateMethod3 = resultPrivateMethodObj.privateMethod3(2,3);
  // console.log(resultPrivateMethod3);

  //Using Array
  let resultPrivateMethodArray = main();
    let resultPrivateMethod1 = resultPrivateMethodArray[0];
    console.log(resultPrivateMethod1(4,2));


let resultPrivateMethod2 = resultPrivateMethodArray[1](4,2);
    console.log(resultPrivateMethod2);







 


