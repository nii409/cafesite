"use strict";

//  すべてのhref="#"のaタグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// 上のaタグにそれぞれクリックイベントを設定
for(let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {

    e.preventDefault(); // デフォルトの動作をキャンセル
    let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
    let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    const offset = window.pageYOffset; // 現在のスクロール量を取得
    const target = rect + offset;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}