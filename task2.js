//write a function which can convert the the input given
//in 12 hours format to 24 hours format.


const convertTo24HoursFormat = time => {
    let arr = time.split(':');

    if (arr[0] > 12 || arr[0] == '00') {
        return 'Please input a correct time format';
    } else if (arr[0] === '12' && arr[1][2] === 'A') {
        arr[0] = '00';
        arr[1] = arr[1].slice(0, 2);
        let newTIme = arr[0] + ':' + arr[1];
        return newTIme;
    } else if (arr[0] === '12' && arr[1][2] === 'P') {
        return time;
    } else if (arr[0] < 12 && arr[1][2] === 'P') {
        arr[0] = Number(arr[0]) + 12;
        arr[1] = arr[1].slice(0, 2);
        let newTime = arr[0] + ':' + arr[1];
        return newTime;
    } else if (arr[0] < 12 && arr[1][2] === 'A') {
        return time;
    } else {
        'Please enter the time input in the correct format (HH:MM)';
    }

}

let ans = convertTo24HoursFormat('00:10PM');
console.log(ans);