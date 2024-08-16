const question = ["5 2", "1 1 2 4 5"];
const quest1 = question[0].split(" ");
const quest2 = question[1].split(" ");
let smallest = 100;

for (let i = 0; i < quest1.length; i++) {
  if (smallest > quest1[i]) {
    smallest = quest1[i];
  }
}

if (quest2.includes(smallest)) {
  console.log(smallest);
} else {
  console.log(-1);
}
