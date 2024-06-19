document.getElementById("downloadBtn").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/p9aqhcj15nw6ikk/%25D8%25A7%25D9%2584%25D9%2582%25D9%2584%25D8%25B9%25D9%2587_%25D8%25A7%25D9%2584%25D8%25AD%25D9%2585%25D8%25B1%25D8%25A7%25D8%25A1.apk/file";
});

document.getElementById("iioo").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/p9aqhcj15nw6ikk/%25D8%25A7%25D9%2584%25D9%2582%25D9%2584%25D8%25B9%25D9%2587_%25D8%25A7%25D9%2584%25D8%25AD%25D9%2585%25D8%25B1%25D8%25A7%25D8%25A1.apk/file";
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
