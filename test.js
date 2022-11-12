//String
/*
const name = 'Yash Prasad';
const age = 25;
const address = 'Prestige Falcon City, Bangalore';
console.log(`My name is ${name}, age is ${age}, address is ${address}`);
const input = 'My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore';
console.log(input.split(','));
*/


//Arrays
/*
const fruit = ['orange', 'apple', 'mango'];
console.log(fruit);
fruit.push('lichi');
console.log(fruit);
fruit[2] = 'melon';
console.log(fruit);
fruit.unshift('guava');
console.log(fruit);
fruit.pop();
console.log(fruit);
console.log(fruit);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf('apple'));
*/


//Objects
/*
const person = {
    fname: 'Akhilesh',
    lname: 'Singh',
    hobbies: ['play', 'sing', 'book'],
    address: {
        place: 'Sector - 66',
        city: 'Noida'
    }
}
console.log(person);
console.log(person.hobbies[2]);
console.log(person.fname);
alert(person.address.place);
const { fname, lname, address:{city} } = person;
console.log(fname);
console.log(city);
person.email = 'akhilesh.gmail';
console.log(person);
*/


//Loop
/*
for(let i = 0; i < 5; i++){
    console.log(i);
}
let j= 0;
while(j  < 5){
    console.log(j);
    j++;
}
*/


//Array of Objects/Todo
/*
const todo = [
    {
        id: 1,
        task: 'eat',
        isDone: false
    },

    {
        id: 2,
        task: 'sleep',
        isDone: true
    },

    {
        id: 3,
        task: 'go',
        isDone: false
    }
];
console.log(todo[1].task);
console.log(todo);
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);
for(let i = 0; i < todo.length; i ++){
    console.log(`id is ${todo[i].id}, task is ${todo[i].task}, is task done ${todo[i].isDone}`)
}
for(let todos of todo){
    console.log(todos);
}
todo.forEach(function(todos){
    console.log(todos);
});
const todoText = todo.map(function(todos){
    return todos.task;
});
console.log(todoText);
const todoFilter = todo.filter(function(todos){
    return todos.isDone === false;
}).map(function(todos){
    return todos.task;
})
console.log(todoFilter);
*/


//Functions
/*
function convert(temp){
	return temp + 273;
}

console.log(convert(35));

function convertKC(temp, conversion){
	if(conversion == 'K'){
		return temp + 273;
	}
	else if(conversion == 'C'){
		return temp - 273;
    }
}

console.log(convertKC(350, 'C'));
*/
/*Create a constructor function Student which takes in first name, last name , roll number , Sex and Student's age
Make 2 students objects
Console log the full name (first name + last name) of the student object with greater age
Write a function inside the constructor to getBirthYear and fullName of the student
Write a function outside which takes minimum age to be egligible as arguments and return whether the student is egligible or not by calculating his age from dob .
If student's age greater than or equal to minimum age to be egligible => he is egligible, else he is not egligible
*/


//Constructors
/*
function Person(firstName, lastName, rollNo, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.gender = gender;
    this.age = new Date(age);
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    this.getAgeYear = function(){
        return this.age.getFullYear();
    }
}
function eligible(stage){
    if(p1.getAgeYear() < stage){
        return 'False';
    }
    else{
        return 'True';
    }
}
const p1 = new Person('aman', 'nath', 12, 'M', '06/10/2002');
const p2 = new Person('amit', 'thar', 14, 'F', '06/06/2008');
console.log(`${p1.firstName} ${p1.lastName}`);
console.log(p1.getAgeYear());
console.log(p1.getFullName());
console.log(eligible(13));
console.log(p1);
*/


//Classes
/*
class Person{
    constructor(firstName, lastName, rollNo, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.gender = gender;
        this.age = new Date(age);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getAgeinYrs(){
        return this.age.getFullYear();
    }
}

const p1 = new Person('aman', 'nath', 12, 'M', '12/08/2005');
const p2 = new Person('amit', 'thar', 14, 'M', '17/09/2001');

console.log(p1.firstName);
console.log(p2.getFullName());
console.log(p1.getAgeinYrs());
*/


//Inheritence & Dates
/*
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        countUser = countUser + 1;
    }
    static count(){
        return countUser;
    }
    register(){
        return 'User is registered';
    }
}
let countUser = 0;
let user1 = new User('armit', 'arm@email', '1234567');
let user2 = new User('armit', 'arm@email', '1234567');
let user3 = new User('armit', 'arm@email', '1234567');
console.log(user1.register());
console.log(User.count());
class Member extends User{
    constructor(username, email, password, memberPackage){
        super();
        this.package = memberPackage;
    }
    getPackage(){
        console.log('User '+this.username+' is subscribed to package'+this.package);
    }
    mempershipUpto(date){
        const newDate = new Date(date.setMonth(date.getMonth()+1));
        console.log('Your free trial Membership is active upto '+newDate);
    }
    renewMembership(date, subscription){
        if(subscription == 'Y'){
            const newDate = new Date(date.setYear(date.getYear()+1));
            console.log('renewed membership : '+newDate);
        }
        if(subscription == 'M'){
            const newDate = new Date(date.setMonth(date.getMonth()+1));
            console.log('renewed membership : '+newDate);
        }
    }
}
let m1 = new Member('mark', 'mark@gmail.com', '123456', 'Gold');
m1.getPackage();
m1.mempershipUpto(new Date());
m1.renewMembership(new Date(), 'Y');
m1.renewMembership(new Date(), 'M');
*/


//DOM
/*
// Single Element Selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
// Multiple Element Selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
*/


//Loping through DOM items
/*
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
*/


//Dom Manipulation
/*
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.style.color = 'green';
ul.children[1].style.color = 'yellow';
*/


//Events
/*
const button = document.querySelector('.btn');
button.addEventListener('click', function(e){
    e.preventDefault();
    console.log('click');
})
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.backgroundColor = 'green';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello World</h1>';
})
button.addEventListener('mouseover', (e) => {
    button.style.backgroundColor = 'orange';
})
button.addEventListener('mouseout', (e) => {
    button.style.backgroundColor = 'yellow';
})
*/

/*
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter value';
    }
    else{
        console.log('Success');
    }
}
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter value';
    }
    else{
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
    }
}

console.log(localStorage.setItem('name', nameInput.value));
console.log(localStorage.setItem('email', emailInput.value));