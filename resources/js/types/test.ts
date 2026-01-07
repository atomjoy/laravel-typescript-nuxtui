let firstName: string = 'Alex';

let member: boolean = true;

let age: number = 26;

const friends: string[] = ['Max', 'Alice', 'Margot', firstName];

const job: Record<string, string> = { title: 'Designer', desc: 'About designer', member: member + '' };

const firstItem = (items: number[]) => {
	return items[0];
};

const getItem = <T>(items: T[], id: number): T => {
	return <T>items[id];
};

let item1 = firstItem([1, 2, 3, 4, 5]);

let item2 = getItem([...friends, 'Tom', 'Jerry'], 2);

console.log(age, job, item1, item2);
