// tìm các số hoàn hảo từ 1 đén 1000
for (let i = 1; i <= 1000; i++) {
    let sumUoc = 0;
    for (let n = 1; n < i; n++) {
        if (i % n === 0) {
            sumUoc += n;
        }
    }
    if (sumUoc === i) {
         console.log(i);
     }
}
