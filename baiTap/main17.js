//toán tử 3 ngôi
// nhập vào điểm trung bình
// nếu dtb >= 8, điểm giỏi
// nếu 8 > dtb >= 6.5 điểm khá
// nếu 6.5 > dtb >= 5 điểm trung bình
// nếu dtb < 5 điểm yếu 

let x = Number(prompt("nhập vào điểm trung bình:"));
let dtb = x >= 8 ? "điểm giỏi" : (x >= 6.5 ? "điểm khá" : (5 < x ? "điểm trung bình" : "điểm yếu"));
console.log("xếp loại của học sinh là", dtb);

