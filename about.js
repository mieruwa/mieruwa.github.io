// FAQのアコーディオン機能
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// トップに戻るボタンの機能
const backToTopButton = document.getElementById('back-to-top');

const toggleBackToTopButton = () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

window.addEventListener('scroll', toggleBackToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ページ読み込み時の初期化
window.addEventListener('DOMContentLoaded', () => {
    toggleBackToTopButton();
});

const members = [
    {
        name: "大津 慶悟",
        img: "images/about/member/user1.jpeg",
        description: "洗練されたデザインでブランドの魅力を引き出します。",
        social: {
            instagram: "https://instagram.com/example1",
            x: "https://x.com/example1"
        }
    },
    {
        name: "鈴木 我信",
        img: "images/about/member/user2.webp",
        description: "技術力でプロジェクトの可能性を広げます。",
        social: {
            instagram: "https://instagram.com/example2",
            x: "https://x.com/example2"
        }
    },
    {
        name: "山田 康平",
        img: "images/about/member/user3.jpeg",
        description: "共感を生むストーリーを伝える広報担当。",
        social: {
            instagram: "",
            x: "https://x.com/example3"
        }
    },
    {
        name: "星野 銀次",
        img: "images/about/member/user4.jpeg",
        description: "情報を魅力的に届けるプロモーションのスペシャリスト。",
        social: {
            instagram: "https://instagram.com/example4",
            x: "https://x.com/example4"
        }
    },
    {
        name: "小原 檀",
        img: "images/about/member/user5.jpeg",
        description: "堅実なコードでプロジェクトを支えるエンジニア。",
        social: {
            instagram: "",
            x: "https://x.com/example5"
        }
    }
];

const memberGrid = document.querySelector('.member-grid');
members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';

    const img = document.createElement('img');
    img.src = member.img;
    img.alt = member.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = member.name;
    card.appendChild(name);

    const desc = document.createElement('p');
    desc.textContent = member.description;
    card.appendChild(desc);

    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    Object.entries(member.social).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.innerHTML = `<i class="fab fa-${platform}"></i>`;
        socialLinks.appendChild(link);
    });

    card.appendChild(socialLinks);
    memberGrid.appendChild(card);
});