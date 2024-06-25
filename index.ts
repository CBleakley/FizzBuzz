// Javascript solution
// for (let i = 1; i <= 100; i++) {
    
//     let multipleThree = (i % 3 == 0);
//     let multipleFive = (i % 5 == 0);
    
//     if (multipleThree && multipleFive) {
//         console.log("FizzBuzz");
//     } else if (multipleThree) {
//         console.log("Fizz");
//     } else if (multipleFive) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Typescript solution
// for (let i = 1; i <= 100; i++) {
    
//     let multipleThree: boolean  = (i % 3 === 0);
//     let multipleFive: boolean = (i % 5 === 0);
    
//     if (multipleThree && multipleFive) {
//         console.log("FizzBuzz");
//     } else if (multipleThree) {
//         console.log("Fizz");
//     } else if (multipleFive) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// part 2.1
// for (let i = 1; i <= 100; i++) {
    
//     let multipleThree: boolean  = (i % 3 === 0);
//     let multipleFive: boolean = (i % 5 === 0);
//     let multipleSeven: boolean = (i % 7 === 0);

//     let output: string = "";
    
//     if (multipleThree) {
//         output += "Fizz";
//     }
//     if (multipleFive) {
//         output += "Buzz";
//     }
//     if (multipleSeven) {
//         output += "Bang";
//     }
//     if (!output) {
//         output += i;
//     }

//     console.log(output);
// }

// part 2.3
// for (let i = 1; i <= 100; i++) {

//     let multipleEleven: boolean = (i % 11 === 0);
//     let multipleThirteen: boolean = (i % 13 === 0);

//     let output: string = "";

//     if (multipleEleven) {
        
//         if(multipleThirteen) {
//             output += "Fezz"
//         }
//         output += "Bong"
    
//     } else {
        
//         let multipleThree: boolean  = (i % 3 === 0);
//         let multipleFive: boolean = (i % 5 === 0);
//         let multipleSeven: boolean = (i % 7 === 0);

//         if (multipleThree) {
//             output += "Fizz";
//         }
//         if (multipleThirteen) {
//             output += "Fezz";
//         }
//         if (multipleFive) {
//             output += "Buzz";
//         }
//         if (multipleSeven) {
//             output += "Bang";
//         }
//         if (!output) {
//             output += i;
//         }

//     }
//     console.log(output);
// }


// part 2.4
for (let i = 1; i <= 255; i++) {

    let stringArr: String[] = [];

    if (i % 3 === 0) { stringArr = stringArr.concat("Fizz") }
    if (i % 13 === 0) { stringArr = stringArr.concat("Fezz") }
    if (i % 5 === 0) { stringArr = stringArr.concat("Buzz") }
    if (i % 7 === 0) { stringArr = stringArr.concat("Bang") }
    if (i % 11 === 0) { stringArr = ["Bong"] }
    if (i % 143 === 0) { stringArr = ["Fezz", "Bong"] }
    if (i % 17 === 0) { stringArr = stringArr.reverse() }

    if (stringArr.length === 0) {
        console.log(i.toString())
    } else {
        console.log(stringArr.join(""));
    }
}
