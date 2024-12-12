// プロフィールデータ
const profiles = [
    {
        "name": "山田 太郎",
        "affiliation": "テクノロジー企業",
        "profile": "視覚障害を持ちながら、テクノロジーで未来を切り開く活動をしています。",
        "tags": ["当事者", "弱視"],
        "image": "images/profile/user1.webp"
    },
    {
        "name": "佐藤 花子",
        "affiliation": "デザインスタジオ",
        "profile": "弱視ですが、アートとデザインの力で新しい価値を作り出しています。",
        "tags": ["アーティスト", "弱視"],
        "image": "images/profile/user2.webp"
    },
    {
        "name": "鈴木 一郎",
        "affiliation": "マーケティング会社",
        "profile": "マーケティングの力で視覚障害者のニーズを社会に届けています。",
        "tags": ["マーケティング", "エンジニア"],
        "image": "images/profile/user3.webp"
    },
    {
        "name": "高橋 美咲",
        "affiliation": "福祉団体",
        "profile": "福祉の視点から視覚障害者の生活を支援しています。",
        "tags": ["福祉", "当事者"],
        "image": "images/profile/user4.webp"
    },
    {
        "name": "伊藤 健太",
        "affiliation": "AI開発企業",
        "profile": "視覚障害者向けのAI技術を開発しています。",
        "tags": ["エンジニア", "AI"],
        "image": "images/profile/user5.webp"
    },
    {
        "name": "田中 裕子",
        "affiliation": "視覚障害者団体",
        "profile": "視覚障害者向けのイベントやワークショップを開催しています。",
        "tags": ["イベント", "当事者"],
        "image": "images/profile/user6.webp"
    },
    {
        "name": "中村 太一",
        "affiliation": "教育機関",
        "profile": "視覚障害者のための教育プログラムを提供しています。",
        "tags": ["教育", "弱視"],
        "image": "images/profile/user7.webp"
    },
    {
        "name": "木村 奈々",
        "affiliation": "ファッションブランド",
        "profile": "視覚障害者にも優しいファッションを提案しています。",
        "tags": ["ファッション", "デザイン"],
        "image": "images/profile/user8.webp"
    },
    {
        "name": "石川 一郎",
        "affiliation": "医療機器メーカー",
        "profile": "視覚障害者向けの医療機器を開発しています。",
        "tags": ["医療", "エンジニア"],
        "image": "images/profile/user9.webp"
    },
    {
        "name": "青木 真理",
        "affiliation": "出版社",
        "profile": "視覚障害者向けの点字出版物を制作しています。",
        "tags": ["点字", "出版"],
        "image": "images/profile/user10.webp"
    },
    {
        "name": "松本 大樹",
        "affiliation": "音楽スタジオ",
        "profile": "視覚障害者のための音楽ワークショップを開催しています。",
        "tags": ["音楽", "ワークショップ"],
        "image": "images/profile/user11.webp"
    },
    {
        "name": "竹内 里奈",
        "affiliation": "旅行会社",
        "profile": "視覚障害者向けの旅行プランを提供しています。",
        "tags": ["旅行", "福祉"],
        "image": "images/profile/user12.webp"
    },
    {
        "name": "加藤 陽一",
        "affiliation": "スタートアップ企業",
        "profile": "視覚障害者の生活を便利にするアプリを開発しています。",
        "tags": ["スタートアップ", "アプリ"],
        "image": "images/profile/user13.webp"
    },
    {
        "name": "山本 佳奈",
        "affiliation": "スポーツチーム",
        "profile": "視覚障害者向けのスポーツイベントを企画しています。",
        "tags": ["スポーツ", "イベント"],
        "image": "images/profile/user14.webp"
    },
    {
        "name": "宮田 健司",
        "affiliation": "法律事務所",
        "profile": "視覚障害者の権利を守る活動を行っています。",
        "tags": ["法律", "福祉"],
        "image": "images/profile/user15.webp"
    }
];

// HTMLに動的にプロフィールを生成
const profileList = document.getElementById('profiles');

profiles.forEach(profile => {
    const card = document.createElement('div');
    card.className = 'profile-card';

    // アイコンと名前・所属のコンテナ
    const headerContainer = document.createElement('div');
    headerContainer.style.display = 'flex';
    headerContainer.style.alignItems = 'center';

    // プロフィール画像
    const icon = document.createElement('img');
    icon.className = 'profile-icon';
    icon.src = profile.image;
    icon.alt = `${profile.name}のプロフィール画像`;

    // 名前と所属
    const header = document.createElement('div');
    header.className = 'profile-header';

    const name = document.createElement('h2');
    name.textContent = profile.name;

    const affiliation = document.createElement('p');
    affiliation.className = 'affiliation';
    affiliation.textContent = profile.affiliation;

    // 名前と所属をヘッダーに追加
    header.appendChild(name);
    header.appendChild(affiliation);

    // ヘッダーコンテナにアイコンとヘッダーを追加
    headerContainer.appendChild(icon);
    headerContainer.appendChild(header);

    // プロフィール文章
    const description = document.createElement('p');
    description.textContent = profile.profile;

    // タグ
    const tags = document.createElement('div');
    tags.className = 'tags';

    profile.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = `#${tag}`;
        tags.appendChild(span);
    });

    // 問い合わせボタン
    const contactButton = document.createElement('button');
    contactButton.className = 'contact-button';

    // ボタンの中身を作成
    const buttonContent = document.createElement('div');
    buttonContent.style.display = 'flex';
    buttonContent.style.alignItems = 'center';
    buttonContent.style.justifyContent = 'center';
    buttonContent.style.gap = '8px';

    // アイコン
    const buttonIcon = document.createElement('i');
    buttonIcon.className = 'fas fa-envelope-open-text'; // Font Awesome用クラス

    // テキスト
    const buttonText = document.createElement('span');
    buttonText.textContent = 'この人に相談する';

    // アイコンとテキストをボタンコンテンツに追加
    buttonContent.appendChild(buttonIcon);
    buttonContent.appendChild(buttonText);

    // ボタンにコンテンツを追加
    contactButton.appendChild(buttonContent);

    // ボタンのクリックイベント
contactButton.addEventListener('click', () => {
    const queryParams = new URLSearchParams({
        name: profile.name,
        profile: profile.profile,
        image: profile.image,
        affiliation: profile.affiliation, // 所属を追加
        tags: profile.tags.join(',')     // タグをカンマ区切りで追加
    }).toString();
    window.location.href = `chat.html?${queryParams}`;
});

    // カードにすべての要素を追加
    card.appendChild(headerContainer);
    card.appendChild(description);
    card.appendChild(tags);
    card.appendChild(contactButton);

    profileList.appendChild(card);
});