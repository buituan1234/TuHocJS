//tìm 2 số biết tổng và hiệu 
//x + y = Tong
//x - y = hieu

let Tong = Number(prompt("nhập tổng: "));
let Hieu = Number(prompt("nhập hiệu: "));
let x = Number((Tong + Hieu) / 2);
let y = Number(x - Hieu);
console.log("gia tri x can tim la:", x);
console.log("gia tri y can tim la:", y);