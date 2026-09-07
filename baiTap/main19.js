
let x = Number(prompt(`
    Chọn các tìm kiếm:
1. Tìm theo tên
2. Tìm theo tác giả
3. Tìm theo nhà sản xuất  
4. Tìm theo tiêu đề  
    `));
if (Number.isNaN(x)) {
    alert("Bạn phải nhập số từ 1 đến 4");
} else {
    switch (x) {
        case 1:
            alert("bạn đã chọn tìm theo tên");
            break;
        case 2:
            alert("bạn đã chọn tìm theo tác giả");
            break;
        case 3:
            alert("bạn đã chọn tìm theo nhà sản xuất");
            break;
        case 4:
            alert("bạn đã chọn tìm theo tiêu đề");
            break;
        default:
            alert("lựa chọn không hợp lệ");
    }
}
console.log(typeof x);
