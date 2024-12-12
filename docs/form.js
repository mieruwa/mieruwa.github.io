// form.js
document.getElementById("CONFIRM_BTN").addEventListener("click", () => {
    // 入力内容を取得
    const category = document.getElementById("category").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // 入力内容を`sessionStorage`に保存
    sessionStorage.setItem("category", category);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("message", message);

    //テキストボックスに関する条件分岐
    if ((!email || email.length === 0) && (!message || message.length === 0)) {
        // 両方が未入力の場合にアラートを表示
        alert("メールアドレスとメッセージの両方を入力してください。");
        return;
    }
    // 確認画面に移動
    window.location.href = "confirm.html";
});
