// სპრედ ოპერატორის გამოყენება:
// შექმენით მასივი numbers, რომელშიც მოიცავს მარტივი მთელი რიცხვები (მაგ. [3, 7, 12, 5, 8]).
// Mapping მეთოდი (map):
// გამოიყენეთ map მეთოდი ახლანდელ რიცხვებზე და შექმენით ახალი მასივი squaredNumbers, სადაც თითოეული რიცხვი მოდის კვადრატად.
// Filtering მეთოდი (filter):
// გამოიყენეთ filter მეთოდი, რომელიც numbers მასივიდან ამოღებს მხოლოდ ლუწ რიცხვებს და შეინახეთ მასივში evenNumbers.
// Reduce მეთოდი (reduce):
// გამოიყენეთ reduce მეთოდი, რომელიც დააჯამებს მასივის და დააბრუნებს შედეგს.
// ლოგიკური ოპერატორები:
// შექმენით ფუნქცია checkNumbers, რომელიც:
// მიიღებს ერთ რიცხვს არგუმენტად.
// დააბრუნებს true, თუ რიცხვი მეტია 10-ზე და ლუწია.
// დააბრუნებს false ყველა სხვა შემთხვევაში.
// შედეგის დაბეჭდვა:

// დააკონსოლოგეთ  თითოეული შედეგი.

const numbers = [3, 7, 12, 5, 8];
console.log(numbers);

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((num1, num2) => num1 + num2, 0);
console.log(sum);

const a = 5;
let result = 0;
if (a > 10 && a % 2 === 0) {
    result = "true";
}
else {result = "false"}

console.log(result);

// მეორე ვარიანტი:

// const a = 5;
// const result = (a > 10 && a % 2 === 0) ? "true" : "false";
// console.log(result);