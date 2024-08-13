const question = ["3 4"];
const quest1 = question[0].split(" ");
let ans = 1;

for (let i = 1; i <= quest1[1]; i++) {
  ans = ans * quest1[0];
}
console.log(ans);
