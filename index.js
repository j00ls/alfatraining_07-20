var cowsay = require("cowsay");

console.log(cowsay.think({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));


date1 = randomDate(new Date(2020, 0, 1), new Date())
date2 = randomDate(new Date(2020, 0, 1), new Date())

function dateDiffString() {
  //TODO implement
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function dateDiffString() {
  console.log(date1);
  console.log(date2);
}
