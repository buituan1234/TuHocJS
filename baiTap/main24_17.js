// tính tổng các số lẻ từ 1 đến n, nhập số n
// nếu nhập số 7, bỏ qua 3 rồi tính tổng

let tong = 0;
let n = Number(prompt("nhập số n:"));
while (!Number.isInteger(n)) {
    n = Number(prompt("hãy nhập lại số nguyên n:"));
}
for (let i = 1; i <= n; i += 2) {
    if (i === 3) {
        continue;
    } else {
        tong += i;
    }
    console.log(i);
} console.log(`tổng các số lẻ từ 1 đến ${n} (ngoại trừ 3) là ${tong}`);
