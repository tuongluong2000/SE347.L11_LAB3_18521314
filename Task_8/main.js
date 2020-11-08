document.getElementById('loginButton').addEventListener('click', function() {
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    if(validate(userName, password)) {
        alert('Login success');
        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';
    }
});

function validate(username, password) {
    username.trim();
    password.trim();

    if (username == null || username == '') {
        alert('Missing username');
        return false;
    } else if (password == null || password == '') {
        alert('Missing password');
        return false;
    } else if (username != 'dungta' || password != '123456') {
        alert('Invalid username or password');
        return false; 
    }
    return true;
} 