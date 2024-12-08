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

    // 確認画面に移動
    window.location.href = "confirm.html";
});
