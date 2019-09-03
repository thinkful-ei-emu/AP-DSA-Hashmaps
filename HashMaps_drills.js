const HashMap = require('./HashMap')
const SepChain = require('./Chaining')

// function main(){

//     HashMap.MAX_LOAD_RATIO = 0.5 

//     HashMap.SIZE_RATIO = 3

//     let lor = new HashMap()

//     lor.set("Hobbit", "Bilbo")
//     lor.set("Hobbit", "Frodo")
//     lor.set("Wizard", "Gandolf")
//     lor.set("Human", "Aragon")
//     lor.set("Elf", "Legolas")
//     lor.set("Maiar", "The Necromancer")
//     lor.set("Maiar", "Sauron")
//     lor.set("RingBearer", "Gollum")
//     lor.set("LadyOfLight", "Galadriel")
//     lor.set("HalfElven", "Arwen")
//     lor.set("Ent", "Treebeard")

//     // console.log(lor.get('Maiar'))
//     // console.log(lor.get('Hobbit'))

//     console.log(lor)

// }

// main()

//1. The values of maiar and hobbit are Sauron and Frodo. There is a discrepency because the duplicates are being overwritten by the most recent key of each
//The capacity of the hash table is 24 after hashing the above. The capacity increases once the load ratio is greater than the max_load_ratio, and gets resized based on the capacity and size ratio set.

//2. The output of the code is:
//{key: 'Hello World', value '20'}
//{key: 'Hello World', value '10'}
//The 2nd set functions overwrite the first set function value becuase the keys are the same

//3. 
//| 22 | 88 |  |  | 4 | 15 | 28 | 17 | 59 | 31 | 10 |

//|   | 28, 19, 10 | 20 | 12 |    |  5  | 15, 33 |   | 17 |

//4.

// function removeDuplicates(string){

//     const hashMap = new HashMap()

//     let result = ''

//     for(let i = 0; i < string.length; i++){
//         try{
//             hashMap.get(string[i])
//         }

//         catch(e){
//             hashMap.set(string[i], i)
//             result += string[i]
//             console.log(hashMap._hashTable)
//         }
//     }

//     return result

// }

// console.log(removeDuplicates('google'))
// console.log(removeDuplicates('google all that you think can think of'))

//5.

// function palindrome(string){
//     const hashMap = new HashMap()

//     for( let i = 0; i < string.length; i++){
//         try{
//             hashMap.get(string[i])
//             hashMap.set(string[i], hashMap.get(string[i]) + 1)
//         }

//         catch(e){
//             hashMap.set(string[i], 1)
//         }
//     }

//     let odds = 0

//     // console.log(hashMap._hashTable)

//     for(let i = 0; i < string.length; i++){

//         if(hashMap.get(string[i]) % 2 === 1){
//             odds++
//         }

//     }

//     if(odds > 1){
//         return false
//     }

//     return true
// }

// console.log(palindrome('hannah'))
// console.log(palindrome('north'))

//6.
// function anagramGroup(arr){
//     const anaGrp = new HashMap();
//     let num = 1;
//     for (const ele of arr){
//       for(let i=0; i<ele.length; i++){
//         try{
//           anaGrp.get(ele[i]);
//         }
//         catch(e){
//           anaGrp.set(ele[i], num);
//           num *= 10;
//         }
//       }
//     }
//     let result = {};
//     for (const ele of arr){
//       let tot = 0;
//       for(let i=0; i<ele.length; i++){
//         tot += anaGrp.get(ele[i]);
//       }
//       if(!result[`${tot}`]){
//         result[`${tot}`] = [];
//       }
//       result[`${tot}`].push(ele);
//     }
  
//     return Object.values(result);
//   }

// console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
  

//7. 

// function chaining(){

//     SepChain.MAX_LOAD_RATIO = 0.5 

//     SepChain.SIZE_RATIO = 3

//     let lor = new SepChain()

//     lor.set("Hobbit", "Bilbo")
//     lor.set("Hobbit", "Frodo")
//     lor.set("Wizard", "Gandolf")
//     lor.set("Human", "Aragon")
//     lor.set("Elf", "Legolas")
//     lor.set("Maiar", "The Necromancer")
//     lor.set("Maiar", "Sauron")
//     lor.set("RingBearer", "Gollum")
//     lor.set("LadyOfLight", "Galadriel")
//     lor.set("HalfElven", "Arwen")
//     lor.set("Ent", "Treebeard")

//     // console.log(lor.get('Maiar'))
//     // console.log(lor.get('Hobbit'))

//     //console.log(lor._hashTable[23])
//     console.log(lor.get('Maiar'))
//     console.log(lor.delete('Maiar', 'The Necromancer'))
//     //console.log(lor.get('Hobbit'))
//     console.log(lor.get('Maiar'))

// }

// chaining()
