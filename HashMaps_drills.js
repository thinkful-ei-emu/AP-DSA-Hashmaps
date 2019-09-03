const HashMap = require('./HashMap')

function main(){

    HashMap.MAX_LOAD_RATIO = 0.5 

    HashMap.SIZE_RATIO = 3

    let lor = new HashMap()

    lor.set("Hobbit", "Bilbo")
    lor.set("Hobbit", "Frodo")
    lor.set("Wizard", "Gandolf")
    lor.set("Human", "Aragon")
    lor.set("Elf", "Legolas")
    lor.set("Maiar", "The Necromancer")
    lor.set("Maiar", "Sauron")
    lor.set("RingBearer", "Gollum")
    lor.set("LadyOfLight", "Galadriel")
    lor.set("HalfElven", "Arwen")
    lor.set("Ent", "Treebeard")

    console.log(lor.get('Maiar'))
    console.log(lor.get('Hobbit'))

}

main()

//1. The values of maiar and hobbit are Sauron and Frodo. There is a discrepency because the duplicates are being overwritten by the most recent key of each
//The capacity of the hash table is 24 after hashing the above. The capacity increases once the load ratio is greater than the max_load_ratio, and gets resized based on the capacity and size ratio set.

//2. The output of the code is:
//{key: 'Hello World', value '20'}
//{key: 'Hello World', value '10'}

//3. 
//| 22 | 88 |  |  | 4 | 15 | 28 | 17 | 59 | 31 | 10 |

//|   | 28, 19, 10 | 20 | 12 |    |  5  | 15, 33 |   | 17 |