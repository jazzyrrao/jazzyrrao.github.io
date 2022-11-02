function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let d = sum / 3;
    return d;
}

function createSentence(num, noun) {
    let s = "On average, a Berkeley student has " + num + noun + "s.";
    return s;
}

function getRandomNum(max) {
	return Math.floor(Math.random() * (max+1));
}

var x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z)

let sentence = createSentence(avg, " cat")

console.log(sentence);
