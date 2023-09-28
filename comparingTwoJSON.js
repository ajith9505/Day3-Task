let obj = {"name":"Person 1","age":"27"}
let obj1 = {"age":"21","name":"Person 2"}

let keys1 = Object.keys(obj).sort();
let keys2 = Object.keys(obj1).sort();

if(JSON.stringify(keys1) === JSON.stringify(keys2)){

    console.log("Equal")
}

else{
    console.log("Not Equal")
}





