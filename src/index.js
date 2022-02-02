// 1. Add function code goes here
exports.add = (i,l) => i+l;

// 2. Multiply function code goes here
exports.multiply =  (i,l) =>  i*l ;

// 3. OddOrEven function code goes here
exports.oddOrEven =  (i) =>{
  if(i % 2 === 1){
    return 'odd'}
  else {
    return 'even'
  }
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator =  () => {
  const array = []
  for (var i = 1; i < 101; i++) {
    array[i-1]=i;
  }
  return array
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting =  () => {
  console.log(y);
  let y = 2;
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue =  (...array) => {
  array.sort((a, b) => a - b);
  return array[0]
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray =  (array) => {
  const a = [];
  for (var i = 0; i < array.length; i++) {
    n = array[i];
    a[i]=n*2;
  }
  return a
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName =  (students, name) => {
  return students.filter(student => student.name === name)
};

// 9. Transform all of the above into arrow functions below here
