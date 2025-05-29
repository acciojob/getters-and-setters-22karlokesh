//complete this code
class Person {
	let name:string;
	let age:number;
	constructor(name: string, age: number){
		this.name= name;
		this.age= age;
	}
	get name(): string{
		return this.name;
	}
	set age(age: number){
		this.age = age;
	}
}

class Student extends Person {
	study(): void{
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	teach(): void {
		console.log(this.name+" is teaching")
	}
}

const person = new Person("John",25);
console.log(person.name);

person.age = 30;
console.log(person.age);

const student = new Student("Alice",22);
student.study();

const teacher = new Teacher("Bob",40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
