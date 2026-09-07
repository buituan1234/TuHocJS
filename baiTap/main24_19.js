// tính tổng S = 1! + 2! + 3! +...+10!

let sum = 0;
let gt = 1;
for(let i = 1; i <= 10; i++){
    gt = gt*i;// gt = gt g* i
    sum += gt;//sum = sum + gt
    console.log(i);
    console.log(gt);
}    console.log(sum);
