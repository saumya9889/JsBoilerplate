var greeter= "hii"  // global scope

function test(){
    var hello= "Hello"; //local scope
    console.log(hello);
}
test();
console.log("greeter",greeter);

//Hoisting ES6

