// nhập vào số nguyên n
// tính giai thừa số nguyên n: n!
// viết 2 cách dùng vòng lặp for và while

// let giaithua = 1;
// let x = Number(prompt("nhập vào số nguyên n:"));
// if (x === 0) {
//     console.log("giai thừa của 0 là 1");
// }else if(x < 0){
//     console.log("số âm không có giai thừa");
// } 
// else {
//     for (let i = 1; i <= x; i++) {
//         giaithua = i * giaithua;
//     }
//         console.log(`giai thừa ${x} bằng`, giaithua);
// }

let x = Number(prompt("Nhập vào số nguyên không âm:"));

// 1. Vòng lặp kiểm tra dữ liệu nhập (Chạy đến khi nào nhập đúng số nguyên >= 0 thì thôi)
while (!Number.isInteger(x) || x < 0) {
    x = Number(prompt("Số không hợp lệ! Mời bạn nhập lại số nguyên không âm:"));
}

// 2. Tính giai thừa sau khi đã có x hợp lệ
if (x === 0) {
    console.log("Giai thừa của 0 là 1.");
} else {
    let gt = 1;
    for (let i = 1; i <= x; i++) {
        gt *= i;
    }
    console.log(`Giai thừa của ${x} là: ${gt}`);
}
