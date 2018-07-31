class Student {
	fullName: string;
	constructor(public firstName: string, public lastName: string)
	{
		this.fullName = firstName + " " + lastName; 
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return `Hello, ${person.firstName} ${person.lastName}`;
}

const users: Person[] = [
	new Student("Kentaro", "Takeda"),
	new Student("Shuji", "Yamamoto"),
	new Student("Yoko", "Minami"),
];

users.forEach((user: Person, index: number) => {
	let div = document.createElement('div');
	div.innerHTML = greeter(user);

	document.body.appendChild(div);
});