const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish','Việt nam'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};


const {firstName,gender,education:{degree}, language:[language]} = person;
const student = {
    firstName: firstName,
    gender: gender,
    degree: degree,
    language
}
console.log(student)