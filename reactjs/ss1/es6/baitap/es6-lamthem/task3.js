let sv1 = {
    firstName: 'John',
    gender: 'male',
    english: 'English'
};

let sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

const getInfo = ({firstName = "Quân", degree = "NA"}) => {
    const student = {
        firstName,
        degree
    }
    console.log(student)
}

getInfo(sv1);
getInfo(sv2);