
// Problem Solving (30’) (Nhiều cách giải càng tốt)

// Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, khoảng cách giữa các số bằng nhau (và tất nhiên là 0 và số n-1 cũng ở cạnh nhau). Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20

//////////Cách 1
function findOppositeNumber(n, firstNum) {
    let firstNumIndex;
    let OppositeNumber;
    const mainArray = [];
    if (n >= 4 && n <= 20) {
        for (i = 0; i < n; i++) {
            mainArray.push(i);
        }
        for (i = 0; i < mainArray.length; i++) {
            if (firstNum == mainArray[i]) {
                firstNumIndex = mainArray.indexOf(mainArray[i]);
            }
        }
        OppositeNumber = mainArray[firstNumIndex + mainArray.length / 2];
        if (OppositeNumber == undefined) {
            OppositeNumber = mainArray[firstNumIndex - mainArray.length / 2];
        }

        console.log(OppositeNumber);
    } else {
        console.log("invallid n");

    }
}
findOppositeNumber(10, 2);
findOppositeNumber(10, 6);
findOppositeNumber(10, 5);

//////////Cách 2
function findOppositeNumber2(n, firstNum) {
    let OppositeNumber;
    const mainArray2 = [];
    if (n >= 4 && n <= 20) {
        for (i = 0; i < n; i++) {
            mainArray2.push(i);
        }

        if (firstNum > mainArray2.length / 2) {
            OppositeNumber = firstNum - mainArray2.length / 2;
        } else if (firstNum < mainArray2.length / 2) {
            OppositeNumber = firstNum + mainArray2.length / 2;

        } else {
            OppositeNumber = mainArray2[0];
        }
        console.log(OppositeNumber);
    } else {
        console.log("invallid n");

    }
}
findOppositeNumber2(10, 2);
findOppositeNumber2(10, 6);
findOppositeNumber2(10, 5);


// Viết 1 hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xen kẽ cùng vị trí vị trí của 2 chuỗi với nhau.

function mergeString(string1, string2) {
    let string1Array = string1.split("");
    let string2Array = string2.split("");
    let mergeArray = [];
    for (i = 0; i < string2Array.length; i++) {
        if (string1Array[i] != undefined) {
            mergeArray.push(string1Array[i]);
        }
        if (string2Array[i] != undefined) {
            mergeArray.push(string2Array[i]);
        }
    }
    console.log(mergeArray);
}
mergeString('abc', 'xyzt');
mergeString('abc', 'xyz');



