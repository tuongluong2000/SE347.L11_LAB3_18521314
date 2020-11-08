var name;
var age;

function input() {
    do {
        name = prompt("Tên của bạn là: ");
        name.trim();
    } while (name == null || name == "");
    do {
        age = prompt("Bạn bao nhiêu tuổi: ");
        age.trim();
    } while (age == null || age == "" || !Number.isInteger(parseInt(age)));
}

function output() {
    var htmlName = `<p>Họ và tên: <strong>` + name + `</strong></p>`;
    var htmlAge = `<p>Tuổi: <u>` + age + `</u></p>`;
    document.write(htmlName,htmlAge);
}

input();
output();
