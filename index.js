

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 加載動畫效果
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// 卡片懸停效果優化
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// 輪播圖自動播放控制
$('.carousel').carousel({
    interval: 3000,
    pause: 'hover'
});

// 圖片加載優化
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function () {
            this.classList.add('loaded');
        });
    });
});

// 響應式視頻容器調整
function adjustVideoHeight() {
    const videoContainers = document.querySelectorAll('.embed-responsive');
    if (window.innerWidth < 768) {
        videoContainers.forEach(container => {
            container.style.maxHeight = '200px';
        });
    } else {
        videoContainers.forEach(container => {
            container.style.maxHeight = '315px';
        });
    }
}

window.addEventListener('resize', adjustVideoHeight);
adjustVideoHeight();