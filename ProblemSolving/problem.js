const question = ["codekata"];
const quest1 = question[0].split("");
let quest2 = [];
let flag = 0;
const vowels = ["a", "e", "i", "o", "u"];
let ans = [];

for (let i = 0; i < quest1.length; i++) {
  flag = 0;
  for (let j = 0; j < vowels.length; j++) {
    if (quest1[i] !== vowels[j]) {
      flag++;
    }
  }
  if (flag == vowels.length) {
    quest2.push(quest1[i]);
  }
}

if (quest2.length > 0) {
  for (let i = quest2.length - 1; i >= 0; i--) {
    ans.push(quest2[i]);
  }
  console.log(ans.join(""));
} else {
  console.log(-1);
}
