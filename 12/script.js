let arr = [10, 20, 30, 50, 235, 3000];
let i;
let str = "";

for (i = 0; i < arr.length; i++) {
    str = String(arr[i])
    if ((str[0] == 1) || (str[0] == 2) || (str[0] == 5)) {
        alert(arr[i]);
    }
}