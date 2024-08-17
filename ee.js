document.getElementById("downloadBtn").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/9wenxisd8y6ul42/القلعة+الحمراء_7.0.apk/file";
});

document.getElementById("iioo").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/9wenxisd8y6ul42/القلعة+الحمراء_7.0.apk/file";
});
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var img2Position = document.querySelector('.header:nth-child(2)').offsetTop; // ارتفاع الصورة الثانية
  var button = document.getElementById('downloadBtn');

  if (scrollPosition < img2Position) { // عكس الشرط هنا
    button.style.bottom = '20px'; // يظهر الزر عند التمرير للأعلى من الصورة الثانية
  } else {
    button.style.bottom = '-100px'; // يختفي الزر عند الرفع للأعلى
  }
});
