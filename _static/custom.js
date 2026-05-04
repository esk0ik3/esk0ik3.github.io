document.addEventListener('mousemove', (e) => {
    // ターゲットにする要素（今回は箇条書きのマーカーや特定のアイコンなど）
    const targets = document.querySelectorAll('li, h2, .sd-card');
    
    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const dx = mouseX - targetX;
        const dy = mouseY - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 150px以内に近づいたら逃げる
        if (distance < 150) {
            const force = (150 - distance) / 150;
            const moveX = (dx / distance) * force * -50; // 逃げる距離
            const moveY = (dy / distance) * force * -50;
            
            target.style.transform = `translate(${moveX}px, ${moveY}px)`;
            target.style.transition = 'transform 0.1s ease-out';
            target.style.color = '#00ffcc'; // 近づくと発光
        } else {
            target.style.transform = 'translate(0, 0)';
            target.style.transition = 'transform 0.6s ease-in-out';
            target.style.color = ''; 
        }
    });
});

// ゆらゆら揺れるアニメーションを全体に追加
document.body.insertAdjacentHTML('beforeend', `
<style>
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(0.5deg); }
        100% { transform: translateY(0px) rotate(0deg); }
    }
    .bd-article h1, .bd-article p {
        animation: float 4s ease-in-out infinite;
    }
</style>
`);
