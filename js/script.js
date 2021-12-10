function Login() {
        var done = 0;
        var username = document.login.username.value;
        username = username.toLowerCase();
        var password = document.login.password.value;
        password = password.toLowerCase();
        if (username == "user" && password == "user@123") {
          alert("Anda berhasil login");
          window.open("https://google.com");
        } else if (done == 0) {
          alert("Sepertinya username atau password yang kamu masukan salah, silahkan coba lagi.");
       }
     }
