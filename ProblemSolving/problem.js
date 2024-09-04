const question = ["5", "1 2 3 4 5"];
let ans = 0;
const n = question[1].split(" ");

for (let i = 0; i < n.length - 1; i++) {
  ans = ans + Number(n[i]) + Number(n[i + 1]);
}

console.log(ans);
