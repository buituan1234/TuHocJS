//kiểm tra năm nhập vào có phải năm nhuận không 

let x = parseInt(prompt("nhập vào số năm:"));
if ((x % 4 === 0 && x % 100 !== 0) || (x % 400 === 0)) {
    console.log("năm nhuận");
} else {
    console.log("năm không nhuận");
}
console.log(x);
console.log(typeof x);