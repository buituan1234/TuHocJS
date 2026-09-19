// nhập vào số nguyên n, in ra kết quả n giai thừa n!

// let n = Number(prompt("Nhập vào số nguyên n:"));
// while (!Number.isInteger(n) || n < 0) {
//     n = Number(prompt("Vui lòng nhập số lớn hơn 0"));
// }
// let giaiThua = 1;
// for (let i = 1; i <= n; i++) {
//     giaiThua *= i;
// }
// console.log(`giai thừa của ${n} là`, giaiThua);

function tinhGiaiThua(n) {
    while (!Number.isInteger(n) || n < 0) {
        n = Number(prompt("Vui lòng nhập số lớn hơn 0"));
    }
    let giaiThua = 1;
    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}
let n = Number(prompt("Nhập vào số nguyên n:"));
while (!Number.isInteger(n) || n < 0) {
    n = Number(prompt("Vui lòng nhập số lớn hơn 0"));
}
let ketQua = tinhGiaiThua(n);
console.log(`giai thừa của ${n} là`, ketQua);