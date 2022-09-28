//map
/*
    let obj1 = new Map()
    obj1.set([1, 2, 3], 1)
    obj1.set('b', 2)
    console.log(obj1, obj1.has('a'), Object.keys(obj1))
    console.log(obj2)
*/

//set
let arr = [1, 1, 2, 3, 1, 2];
let obj1 = new Set([...arr]);
obj1.add(4);
obj1.delete(3);
console.log(obj1, obj1.has(2));
