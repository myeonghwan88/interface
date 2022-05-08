interface Person2 {
  name: string;
  age?: number; //?는 없어도 되는 항목에 넣어주는 것
}

function hello2(person: Person2) : void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: "Mark", age: 39});
hello2({name: "anna"});