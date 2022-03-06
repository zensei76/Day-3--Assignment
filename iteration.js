/*Day 3 - JS array & objects*/

//Task

//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)





var stud = [{
    "id" : "001", 
    "name": "Bhargav",
    "course": "FSD"
},
{
    "id" : "002", 
    "name": "Ram",
    "course": "FSD"
}];

console.log("This for Loop");//for loop

for(var i = 0; i < stud.length; i++) {
    var obj = stud[i];
    console.log(obj.name);
}

console.log('\n')

console.log("This for in loop");//for in loop
for (var data in stud) {
    console.log(stud)
 }

 console.log('\n')

console.log("This for of loop")//for of loop
 for (var element of stud) {
    console.log(element.id);
  }

  console.log('\n')

console.log("This for each loop");//for each loop
stud.forEach((item) => {

    console.log('ID: ' + item.id);
    console.log('NAME: ' + item.name);
    console.log('COURSE: ' + item.course);
    
})

