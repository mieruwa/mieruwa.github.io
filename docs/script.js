// タグとその色を記録したJSONデータ
const tagColors = {
    "当事者": "#2e8b57",
    "弱視": "#6b8e23",
    "アーティスト": "#ff7f50",
    "エンジニア": "#4682b4",
    "マーケティング": "#daa520"
};

// プロフィールデータ
const profiles = [
    {
        "name": "山田 太郎",
        "profile": "視覚障害を持ちながら、テクノロジーで未来を切り開く活動をしています。",
        "tags": ["当事者", "弱視"],
        "image": "user1.jpg"
    },
    {
        "name": "佐藤 花子",
        "profile": "弱視ですが、アートとデザインの力で新しい価値を作り出しています。",
        "tags": ["アーティスト", "弱視"],
        "image": "user2.jpg"
    },
    {
        "name": "鈴木 一郎",
        "profile": "マーケティングの力で視覚障害者のニーズを社会に届けています。",
        "tags": ["マーケティング", "エンジニア"],
        "image": "user3.jpg"
    }
];

// HTMLに動的にプロフィールを生成
const profileList = document.getElementById('profiles');

profiles.forEach(profile => {
    const card = document.createElement('div');
    card.className = 'profile-card';

    const icon = document.createElement('img');
    icon.className = 'profile-icon';
    icon.src = profile.image;
    icon.alt = `${profile.name}のプロフィール画像`;

    const content = document.createElement('div');
    content.className = 'profile-content';

    const name = document.createElement('h2');
    name.textContent = profile.name;

    const description = document.createElement('p');
    description.textContent = profile.profile;

    const tags = document.createElement('div');
    tags.className = 'tags';

    profile.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;

        // タグごとに色を適用
        span.style.backgroundColor = tagColors[tag] || "#ccc"; // デフォルト色
        tags.appendChild(span);
    });

    // 問い合わせセクションの追加
    const contactSection = document.createElement('div');
    contactSection.className = 'contact-section';

    const contactButton = document.createElement('button');
    contactButton.className = 'contact-button';
    contactButton.textContent = '問い合わせ';

    contactButton.addEventListener('click', () => {
        // プロフィール情報をクエリパラメータとして送信
        const queryParams = new URLSearchParams({
            name: profile.name,
            profile: profile.profile
        }).toString();
        window.location.href = `chat.html?${queryParams}`;
    });

    contactSection.appendChild(contactButton);

    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(tags);
    content.appendChild(contactSection);

    card.appendChild(icon);
    card.appendChild(content);

    profileList.appendChild(card);
});