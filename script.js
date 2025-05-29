class Person {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get age(): number {
		return this._age;
	}

	set age(age: number) {
		this._age = age;
	}
}

class Student extends Person {
	study(): void {
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(): void {
		console.log(this.name + " is teaching");
	}
}

// const person = new Person("John",25);
// console.log(person.name);

// person.age = 30;
// console.log(person.age);

// const student = new Student("Alice",22);
// student.study();

// const teacher = new Teacher("Bob",40);
// teacher.teach();

// Do not change the code below this line
(window as any).Person = Person;
(window as any).Student = Student;
(window as any).Teacher = Teacher;
