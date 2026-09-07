//nhập 1 tháng bất kì, cho biết tháng đó là quý mấy

//cách viết code 1
// let x = parseInt(prompt("nhập vào tháng bất kì"));
// if (Number.isNaN(x) || x > 12 || x < 1) {
//     console.log("hãy nhập từ 1 đến 12");
// }
// else {
//     if (x === 1 || x === 2 || x === 3) {
//         console.log("tháng bạn nhập là quý 1");
//     }
//     else if (x === 4 || x === 5 || x === 6) {
//         console.log("tháng bạn nhập là quý 2");
//     }
//     else if (x === 7 || x === 8 || x === 9) {
//         console.log("tháng bạn nhập là quý 3");
//     }
//     else {
//         console.log("tháng bạn nhập là quý 4");
//     }
// }

//cách viết code 2
let x = parseInt(prompt("nhập 1 tháng bất kì"));
if(x >= 1 && x <= 3){
    console.log("tháng bạn nhập là quý 1");
}
else if(x >= 4 && x <= 6){
    console.log("tháng bạn nhập là quý 2");
}
else if(x >= 7 && x <= 9){
    console.log("tháng bạn nhập là quý 3");
}
else if(x >= 10 && x <= 12){
    console.log("tháng bạn nhập là quý 4");
}
else{
    console.log("vui lòng nhập từ 1 đến 12");
}