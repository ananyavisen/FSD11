// regular expression
// let regex = /hello/;
// let reg= new regex("pattern");
let text = "hello  World";
let pattern = /hello/;

console.log(pattern.test(text));

// flag modifiers

let text1 = "hello world hello hello hello";
let pattern1 = /hello/gi;
console.log(text1.match(pattern1));

//common pattern [abc] [a-z] [0-9]
let test = "hola this is a test";
let pattern2= /[abc]/;
console.log(test.match(pattern2));

// special character
// . -> any character
// ^ -> start of string
// $ -> end of string
// \d -> matches any digit
// \w -> matches any word (alphanumeric or underscore) 
// \s -> matches any whitespace character
let c = /^\d+$/;
console.log(c.test("12345"));
//'*' -> Matches zero or more of the preceding element.
// + -> Atleast one must be present
// ? -> either 0 or 1
// {n,m} -> from n to m

let reges = /\d{3}/;
console.log("12345".match(reges));