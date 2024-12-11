// URLパラメータから情報を取得
const urlParams = new URLSearchParams(window.location.search);
const recipientName = urlParams.get('name');
const recipientDescription = urlParams.get('profile');
const recipientImage = urlParams.get('image');
const recipientAffiliation = urlParams.get('affiliation');
const recipientTags = urlParams.get('tags');

// プロフィール情報を設定
document.getElementById('consultation-name').textContent = recipientName || '相談相手';
document.getElementById('consultation-description').textContent = recipientDescription || 'プロフィール情報がありません。';
document.getElementById('consultation-image').src = recipientImage || 'images/default-profile.png';

// 所属を表示
if (recipientAffiliation) {
    const affiliationElement = document.createElement('p');
    affiliationElement.textContent = `所属: ${recipientAffiliation}`;
    affiliationElement.className = 'affiliation';
    document.querySelector('.profile-container').appendChild(affiliationElement);
}

// タグを表示
if (recipientTags) {
    const tagsElement = document.createElement('div');
    tagsElement.className = 'tags';
    recipientTags.split(',').forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = `#${tag}`;
        tagsElement.appendChild(span);
    });
    document.querySelector('.profile-container').appendChild(tagsElement);
}

// メッセージ生成機能と統合
const messageInput = document.getElementById('message-input');
const generateButton = document.getElementById('generate-message');
generateButton.addEventListener('click', () => {
    const yourName = document.getElementById('your-name').value.trim();
    const consultationContent = document.getElementById('consultation-content').value.trim();

    if (!yourName || !consultationContent) {
        alert('名前と相談内容を入力してください。');
        return;
    }

    const generatedMessage = `こんにちは、${recipientName}さん。\n\n` +
                             `私の名前は ${yourName} です。\n` +
                             `以下の内容で相談させてください。\n\n` +
                             `${consultationContent}\n\n` +
                             `よろしくお願いいたします。`;

    // メッセージ入力欄に生成されたメッセージを表示
    messageInput.value = generatedMessage;
});

// ホームに戻るボタンの動作
document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});