/***********************************/
/****Questions on decision loops****/
/***********************************/
// Question 1
// let myFunction1 = () =>{
//     for(let i=1; i<=10;i++)
//     {
//          console.log(i);
//     }
// }
// myFunction1();

// Question 2
// let myFunction2 = (a)=>{
//     for(let i=a+1; i<=a+5; i++)
//     {
//         console.log(i + "\n");
//     }
// }
// myFunction2(23);

// Question 3
// let myFunction3 =(b) => {
//     let result=0;
//     for(let i=b+1; i<=b+10; i++)
//     {
//         result = result +i;
//     }
//     return result;
// }
// console.log(myFunction3(7));

// Question 4
// let myFunction4 = (array) => {
//      for (let i = 0; i<array.length; i++)
//      {
//        console.log(array[i]);
//      }
// }
// let array = [1,"Hello",8,44];
// myFunction4(array);

// Question 5
// let myFunction5 = (myArray) => {
//     console.log(myArray.length);
// }
// let myArray = [1, "Hello", 8, 44];
// let myArray2 = ["world", 13];
// myFunction5(myArray);
// myFunction5(myArray2);

// Question 6
// let myFunction6 = (myArray1) => {
//     let sum = 0;
//     for(let i=0; i<myArray1.length; i++)
//     {
//         sum = sum + myArray1[i];
//     }
//     return sum;
// }
// let myArray1 = [5, 6, 99, 8, 76, 4, 68, 44];
// console.log(myFunction6(myArray1));
// let myArray2 = [3, 0];
// console.log(myFunction6(myArray2));

// Question 7
// let myFunction7 = (myArray) => {
//     let evenSum = 0, oddSum = 0 , difference;

//     for(let i=0; i<myArray.length; i++)
//     {
//         if(myArray[i] %2 == 0)
//         {
//             evenSum += myArray[i];
//         }
//         else
//         {
//             oddSum += myArray[i];
//         }
//     }

//     difference = evenSum - oddSum;
//     return difference;

// }
// let myArray = [5, 6, 99, 8, 76, 4, 68, 44];
// console.log(myFunction7(myArray));

// Question 8
// let myFunction8 = (myArray) => {
//     for(let i = 0; i < myArray.length; i++)
//     {
//         if (i % 2 == 0){
//             console.log(myArray[i]);
//         }
//     }
// }
// let myArray = [5, 6, 99, 8, 76, 4, 68, 44];
// myFunction8(myArray);
// let myArray1 = [11, "Sam", 3, 7, "car"];
// myFunction8(myArray1);

/************************************************/
/****Questions on built in JavaScript methods****/
/************************************************/
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// let myFunction9 = (sampleArray) => {
//     sampleArray.pop();
//     sampleArray.push(32);
//     console.log(sampleArray);
// }
// myFunction9(sampleArray);

// Question 10
// let myFunction10 = (sampleArray) => {
//     let arr = sampleArray.sort((a,b) => a-b);
//     console.log(arr);
// }
// myFunction10(sampleArray);

/************************************************/
/*********Questions on JavaScript objects********/
/************************************************/
// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//     {
//       name: "Abebe",
//       age: 34,
//       sex: "M",
//     },
//     {
//       name: "Kebede",
//       age: 44,
//       sex: "M",
//     },
//     {
//       name: "Almaz",
//       age: 27,
//       sex: "F",
//     },
//     {
//       name: "Challa",
//       age: 22,
//       sex: "M",
//     },
//     {
//       name: "Chaltu",
//       age: 19,
//       sex: "F",
//     },
//   ],
// };

// Question 11
// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass);

// Question 12
// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);

// Question 13
// let myFunction13 = (evangadiClass) => {

//     let Average = 0;
   
//     for (let i = 0; i < evangadiClass.students.length; i++) 
//     {
//         Average += evangadiClass.students[i].age;
//     }
//     Average = Average/evangadiClass.students.length;
//     console.log(Average);
// }
// myFunction13(evangadiClass);

// Question 14
// let myFunction14 = (evangadiClass) => {
//     let num = 0;
//     for (let i = 0; i < evangadiClass.students.length; i++) 
//     {
//         if (evangadiClass.students[i].sex === 'M') 
//         {
//             num++;
//         }

//     }

//     num = (num/evangadiClass.students.length)*100;
//     console.log(num);
// }
// myFunction14(evangadiClass);

/************************************************/
/*********************Puzzles********************/
/************************************************/
// Question 15
// let myFunction15 = (low , high) => {
//     for( let i = low+1; i < high; i++ )
//     {
        
//         if (i % 3 == 0)
//         {
//             console.log(i + " "+ "div3");
//         }
//         else
//         {
//             console.log(i);
//         }
//     }
// }
// myFunction15(10, 15);

// Question 16
// let myFunction16 = () => {

//     for(let i = 1; i <= 100; i++)
//     {
//         if (i%3==0 && i%5!==0)
//         {
//             console.log("Fizz");
//         }
//         else if (i%3!==0 && i%5==0)
//         {
//             console.log("Buzz");
//         }
//         else if (i%3==0 && i%5==0)
//         {
//             console.log("FizzBuzz");
//         }
//         else
//         {
//             console.log(i);
//         }

//     }
// }
// myFunction16();

// Question 17
// let isEvens = (Number) => {
//     let counter=0;
//     let sNumber = Number.toString();
//     for(let i=0; i<sNumber.length; i++)
//     {
//         if (sNumber.charAt(i)%2 == 0){
//             counter++;
//         } 
//     }
//     if(counter == sNumber.length){
//         console.log(1);
//     }
//     else
//     {
//         console.log(0);
//     }
// }
// isEvens(2426);
// isEvens(3224);
