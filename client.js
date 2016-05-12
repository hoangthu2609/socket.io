var socket = io();
var addUser = new Window();
//trang dang nhaq
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myText").onkeypress = function(event) {
        var keyCode = event.keyCode;
        var data = document.getElementById("myText").value;
        if (keyCode == 13) {
            // thong bao khi chua nhap ten
            if (data.length < 1) {
                alert("ban chua nhap ten")

            } else {
                //dang nhap

                var id = '';
                // su dung bien thoi gian lam id
                var now = new Date();
                id = now.getTime();

                //socket.emit('login',data);
                document.getElementById("myText").value = "";
                var cookieData = { name: data, id: id };
                document.cookie = ("users=" + JSON.stringify(cookieData));

                var addUsername = cookieData;
                socket.emit('user', addUsername);
                console.log(addUsername);
                window.location.href = 'http://localhost:9999/index.html';
                console.log('dang nhap thanh cong')
            }
        }
    };
});
