var yearOfBirth;
var thisYear;

function input() {
    thisYear = new Date().getFullYear();
    var flag = true;
    while(flag) {
        flag = false;
        yearOfBirth = prompt("Năm sinh của bạn là: ");
        yearOfBirth.trim();

        if (yearOfBirth == null || yearOfBirth == "") {
            alert("Không được để trống");
            flag = true;
        } else if (!Number.isInteger(parseInt(yearOfBirth))) {
            alert("Đây không phải là một năm");
            flag = true;
        } else if (yearOfBirth > thisYear) {
            alert("Năm sinh không được sau năm hiện tại");
            flag = true;
        }
    }
}

function output() {
    var age = parseInt(thisYear) - parseInt(yearOfBirth);
    document.write('Năm nay số tuổi của bạn là: ' + age);
}

input();
output();
