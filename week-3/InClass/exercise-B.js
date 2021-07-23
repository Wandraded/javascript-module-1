const people = ['juan', 'matias', 'julian', 'maria', 'wendy', 'jesus']
const people2 = ["Daniel ", "irina ", " Gordon", "ashleigh "];
function test(name,people,people2) {
    const people3 = people.concat(people2).sort()
    return (people3.includes(name)) ? `${name} is at the class with <people in the array>` : `${name} is not at the class with <people in the array></people>`
}
console.log(test('juan',people,people2))