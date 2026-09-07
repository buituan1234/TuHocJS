//giải phương trình bậc 2 
//ax^2 + bx + c = 0

let a = Number(prompt("Nhập giá trị của a: "));
let b = Number(prompt("Nhập giá trị của b: "));
let c = Number(prompt("Nhập giá trị của c: "));

if (a === 0) {
    //bx + c = 0
    if (b === 0) {
        if (c === 0) {
            console.log("phương trình vô số nghiệm");
        } else {
            console.log("phương trình vô nghiệm");
        }
    } else {
        console.log("phương trình có nghiệm x", -c / b);
    }
} else {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("phương trình vô nghiệm");
    } else if (delta === 0) {
        console.log("phương trình có nghiệm kép x bằng", -b / (2 * a));
    } else {
        console.log("phương trình có nghiệm x1 bằng", (-b + Math.sqrt(delta)) / (2 * a));
        console.log("phương trình có nghiệm x2 bằng", (-b - Math.sqrt(delta)) / (2 * a));
    }
}
