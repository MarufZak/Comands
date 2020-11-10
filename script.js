let arr = [];
do {
    var ask = prompt('Введите add/del/stop');
    var secArr = ask.split(', ');
    if (secArr[0] == 'add') {
        arr.push(secArr[1]);
        alert(arr);
    }
    if (secArr[0] == 'del') {
        for (const key in secArr) {
            for (const keys in arr) {
                // console.log(arr[keys]);
                if (arr[keys] == secArr[1]) {
                    arr.splice(keys, 1)
                    alert(arr);
                }
            }
        }
    }
} while (ask != 'stop');
alert(arr);
