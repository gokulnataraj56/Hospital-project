localStorage.setItem("Username", "gokul");
localStorage.setItem("Password", "123");
localStorage.setItem("doctoruser","mukil");
localStorage.setItem("doctorpassword","123");
function log() {
    const user = document.getElementById('usernames').value;
    const password = document.getElementById('passwords').value;

    const storedUser = localStorage.getItem("Username");
    const storedPassword = localStorage.getItem("Password");
    const doctorUser = localStorage.getItem("doctoruser");
    const doctorPassword = localStorage.getItem("doctorpassword");
    if (user === "") {
        alert("Enter user name");
    } else if (password === "") {
        alert("Enter password");
    }
    else if (user === storedUser && password === storedPassword) {
        window.location.href = "../Admin_page/admin.html";
    }
    else if (user === doctorUser && password === doctorPassword) {
        window.location.href = "../Doctor's_page/doctor.html";
    } else {
        alert("Enter valid username or password");
    }
}