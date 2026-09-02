//tính chỉ số BMI dựa vào chiều cao và cân nặng 

let chieuCao = Number(prompt("nhập vào chiều cao(m):"));
let canNang = Number(prompt("nhập vào cân nặng:"));
let BMI = canNang / (Math.pow(chieuCao, 2));
if (BMI < 15) {
    console.log("thân hình quá gầy");
} else if (BMI >= 15 && BMI < 16) {
    console.log("thân hình gầy");
} else if (BMI >= 16 && BMI < 18.5) {
    console.log("thân hình hơi gầy");
} else if (BMI >= 18.5 && BMI < 25) {
    console.log("thân hình bình thường");
} else if (BMI >= 25 && BMI < 30) {
    console.log("thân hình hơi béo");
} else if (BMI >= 30 && BMI < 35) {
    console.log("thân hình béo");
} else {
    console.log("thân hình quá béo");
}
console.log(BMI.toFixed(2));//lấy 2 số sau dấu phẩy số thập phân 