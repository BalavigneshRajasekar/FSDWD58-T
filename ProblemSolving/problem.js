const question = ["5 1", "3 2 2 3"];

const n = question[0].split(" ");
const k = question[1].split(" ");
let flag = 0;
for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < k.length; j++) {
    if (n[i] == k[j]) {
      flag = j + 1;
    }
  }
}

if (flag > 0) {
  console.log(flag);
} else {
  console.log("-1");
}
