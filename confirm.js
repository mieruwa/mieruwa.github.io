// confirm.js

// ページ読み込み時に保存されたデータを表示
window.addEventListener("DOMContentLoaded", () => {
    const category = sessionStorage.getItem("category");
    const email = sessionStorage.getItem("email");
    const message = sessionStorage.getItem("message");

    const confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.innerHTML = `
        <p><strong>カテゴリ:</strong> ${category}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message}</p>
    `;
});

// 修正ボタンの処理
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "contact.html";
});

// 送信ボタンの処理
document.getElementById("submitBtn").addEventListener("click", () => {
    window.location.href = "result.html";
});
