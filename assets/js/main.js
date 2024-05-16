// 滑动主体
function goToMain() {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    behavior: "smooth",
  });
}
// 夜间模式切换
function switchDarkMode() {
  function setThemeColor(color) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
  }
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setThemeColor('#171717');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setThemeColor('#ffffff');
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setThemeColor('#ffffff');
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setThemeColor('#171717');
    }
  }
}
document.onkeydown = function (e) {
  if (e.ctrlKey && e.altKey) {
    switchDarkMode();
  }
}

// 生成二维码
var link = document.querySelectorAll("[data-qrcode-link]");
var qrcodeImg = document.querySelectorAll("[data-qrcode-img]");
for (let i = 0; i < link.length; i++) {
  new AwesomeQR.AwesomeQR({
    text: link[i].getAttribute("data-qrcode-link"), // 内容
    // size: 256, // 二维码大小
    margin: 12, // 二维码白边大小
  }).draw()
    .then((dataURL) => {
      qrcodeImg[i].setAttribute("src", dataURL)
    })
    .catch((err) => {
      console.error(err);
    });
}

// 导航栏磨砂效果
function addBottomBorder(id) {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var headBox = document.getElementById(id);
  if (scrollTop >= 100) {
    headBox.classList.add("bg-gray-100", "dark:bg-gray-900");
  } else {
    headBox.classList.remove("bg-gray-100", "dark:bg-gray-900");
  }
}
addBottomBorder('header');
window.onscroll = function () {
  addBottomBorder('header');
}

var main = document.getElementById('main');
var sidebar = document.getElementById('sidebar');
var minSidebarButton = document.getElementById('min-sidebar-button');
var maxSidebarButton = document.getElementById('max-sidebar-button');


// minSidebarButton.addEventListener("click", function(){
//   sidebar.classList.remove('md:translate-x-0');
//   main.classList.replace("md:ml-64","ml-0");
//   sidebar.setAttribute("data-sidebar-status","min")

//   if (sidebar.getAttribute("data-sidebar-status") == "min") {
//     maxSidebarButton.classList.remove("hidden");
//     maxSidebarButton.classList.add("hidden","md:block");
//   }
// });

// maxSidebarButton.addEventListener("click", function(){
//   sidebar.classList.add('md:translate-x-0');
//   main.classList.replace("ml-0","md:ml-64");
//   sidebar.setAttribute("data-sidebar-status","max")

//   if (sidebar.getAttribute("data-sidebar-status") == "max") {
//     maxSidebarButton.classList.remove("hidden","md:block");
//     maxSidebarButton.classList.add("hidden");
//   }
// })

$(function () {

  $('.anchor').click(function () {
    var navto = $(this).attr('navto');
    if (navto != "#") {
      var $div = $('#' + navto);
      var top = $div.offset().top || 0;
      $('html,body').animate({
        'scroll-top': top - 65
      }, 500);
    } else {
      $('html,body').animate({
        'scroll-top': 0
      }, 500);
    }
  });


});
