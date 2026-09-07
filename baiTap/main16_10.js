//nhập vào 1 tháng bất kì cho biết tháng đó có bao nhiêu ngày
//nếu là tháng 2 yêu cầu nhập thêm năm để kiểm tra năm nhuận hay không
//nếu năm nhuận tháng 2 có 29 ngày, nếu không phải năm nhuận, tháng 2 có 28 ngày

let x = parseInt(prompt("nhap vao 1 thang bat ki:"));
if (x === 1 || x === 3 || x === 5 || x === 7 || x === 8 || x === 10 || x === 12) {
    console.log("thang", x, "co 31 ngay");
} else if (x === 4 || x === 6 || x === 9 || x === 11) {
    console.log("thang", x, "co 30 ngay");
} else if (x === 2) {
    let y = parseInt(prompt("nhap them nam:"));
    //kiểm tra năm nhuận 
    if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
        console.log("thang 2 nam", y, "co 29 ngay");
    } else {
        console.log("thang 2 nam", y, "co 28 ngay");
    }

} else {
    console.log("nhap dung nam");
}