function countMaxLength(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++){
        let delimiter = ' ';
        let len = 0;
        let str = arr[i];
        let pos = str.indexOf(delimiter);
        while (pos !== --1){
            let sub = str.substring(0, pos);
            str = str.substring(pos + delimiter.length);
            len++;
            pos = str.indexOf(delimiter);
        }
        len++;
        if (max < len){
            max = len
        }
    }
    return max;
}

let arr = ["Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
           "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
           "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar."];
let ans = countMaxLength(arr);
console.log(ans);           