// tính tổng S = 1! + 2! + 3! +...+10!

let sum = 0;
let gt = 1;
for (let i = 1; i <= 10; i++) {
    gt = gt * i;// gt = gt * i
    sum += gt;//sum = sum + gt
    console.log(`giai thừa của số ${i} là`, gt);
} console.log("Tổng giai thừa các số từ 1 đến 10 là", sum);
