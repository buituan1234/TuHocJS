// nhập số a từ bàn phím
// nếu a là số chẵn, tính tổng các số chẵn từ 0 đến a
// nếu a là số lẻ, in ra dòng chữ không tính số lẻ

let a = Number(prompt("nhập vào số a bất kì:"));
let tong = 0;
// if (a % 2 !== 0) {
//     for (let i = 1; i <= a; i += 2) {
//         tong += i;
//         console.log(i);
//     }
//     console.log(`tổng các số lẻ từ 0 đến ${a} là ${tong}`);
// } else {

//     for (i = 0; i <= a; i += 2) {
//         tong += i;
//         console.log(i);
//     }
//     console.log(`tổng các số chẵn từ 0 đến ${a} là ${tong}`);
// }

let batDau;
if (a % 2 === 0) {
    batDau = 0;
} else {
    batDau = 1;
}
for (let i = batDau; i <= a; i += 2) {
    tong += i;
    console.log(i);
} 
console.log(`tổng các ${a % 2 === 0 ?"số chẵn":"số lẻ"} từ 0 đến ${a} là ${tong}`);//toán tử 3 ngôi 