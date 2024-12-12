// form.js
function validateEmail(email) {
    // メールアドレスの形式を判定する正規表現
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 正規表現で検証
    if (!emailPattern.test(email)) {
        // メールアドレスが正しくない場合アラートを表示
        alert("正しいメールアドレスを入力してください。");
        return false; // 検証失敗
    }
    return true; // 検証成功
}

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
    } else if (!validateEmail(email)) {
        return;
    }
    // 確認画面に移動
    window.location.href = "confirm.html";
});
