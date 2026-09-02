let dtb = Number(prompt("Nhập điểm trung bình: "));

if (dtb < 10 && dtb >= 8) {
    console.log("Học lực giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
    console.log("Học lực khá");
} else if (dtb < 6.5 && dtb >= 5) {
    console.log("Học lực trung bình");
} else if (0 <= dtb && dtb < 5) {
    console.log("Học lực yếu");
} else {
    console.log("Điểm không hợp lệ");
} 

