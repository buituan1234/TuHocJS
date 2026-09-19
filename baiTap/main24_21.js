// nhập số nguyên a từ bàn phím, a > 0, cho biết số đó có phải số nguyên tố không
// kết thúc chương trình hỏi bạn có muốn thoát chương trình không, nếu có thì thoát
// số nguyên tố chia hết cho 1 và chính nó

// while (true) {
//     let a = Number(prompt("Nhập vào số nguyên a:"));
//     while (!Number.isInteger(a) || a <= 0) {
//         a = Number(prompt("mời nhập lại số nguyên a:"));
//     }

//     let isPrime = true;
//     for (let i = 2; i < a; i++) {
//         if (a % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         alert(a + " la so nguyen to");
//     } else {
//         alert(a + " khong phai la so nguyen to");
//     }

//     let anwser = prompt(`ban co muon tiep tuc khong
//     nhap "no" de thoat
//     nhap phim bat ki de tiep tuc`);
//     if (anwser.toLowerCase() === "no") {
//         break;
//     }
// }

let tiepTuc = true;

do {
    // 1. Nhập số a > 0
    let a = Number(prompt("Nhập vào số nguyên a (a > 0):"));

    // Kiểm tra đầu vào hợp lệ
    if (Number.isNaN(a) || a <= 0 || !Number.isInteger(a)) {
        alert("Vui lòng nhập một số nguyên dương lớn hơn 0!");
    } else {
        // 2. Logic kiểm tra số nguyên tố
        let laSoNguyenTo = true;

        if (a === 1) {
            laSoNguyenTo = false; // 1 không phải là số nguyên tố
        } else {
            // Chạy vòng lặp từ 2 đến căn bậc 2 của a để tối ưu
            for (let n = 2; n <= Math.sqrt(a); n++) {
                if (a % n === 0) {
                    laSoNguyenTo = false; // Tìm thấy ước khác -> Không phải SNT
                    break; // Dừng vòng lặp ngay
                }
            }
        }

        // In kết quả
        if (laSoNguyenTo) {
            alert(`Số ${a} LÀ số nguyên tố.`);
        } else {
            alert(`Số ${a} KHÔNG PHẢI là số nguyên tố.`);
        }
    }

    // 3. Hỏi người dùng có muốn thoát không
    let traLoi = prompt("Bạn có muốn thoát chương trình không? (Nhập 'no' để thoát):");

    if (traLoi !== null && traLoi.toLowerCase() === "no") {
        tiepTuc = false; // Thoát vòng lặp do...while
        alert("👋 Đã thoát chương trình. Tạm biệt!");
    }

} while (tiepTuc);