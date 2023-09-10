// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 700);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// 各セクションへのスムーススクロール
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("ul li a[href^='#']");

    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offset = targetSection.getBoundingClientRect().top;
            const headerHeight = 50; // ヘッダーの高さなど、オフセットを調整する必要がある場合に設定
            const scrollOptions = {
                top: offset + window.scrollY - headerHeight,
                behavior: "smooth",
            };

            window.scrollTo(scrollOptions);
        }
    }
});

// ページが読み込まれた後に実行されるコード
document.addEventListener('DOMContentLoaded', function () {
  // ロゴをクリックしたときの処理
  const logoLink = document.querySelector('.logo a');
  if (logoLink) {
      logoLink.addEventListener('click', function (event) {
          event.preventDefault(); // デフォルトのクリック動作をキャンセル

          // ページのトップまでスクロール
          window.scrollTo({
              top: 0,
              behavior: 'smooth' // スムーススクロールを有効にする
          });
      });
  }
});

// ハンバーガーメニュー
$('.hamburger').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('.nav a').on('click', function() {
    $('#header').removeClass('open');
  });
