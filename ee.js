document.getElementById("downloadBtn").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/xv8uqt4dgvahyh9/القلعة+الحمراء_7.0.apk/file";
});

document.getElementById("iioo").addEventListener("click", function() {
  window.location.href = "https://www.mediafire.com/file/xv8uqt4dgvahyh9/القلعة+الحمراء_7.0.apk/file";
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

// توكن البوت ومعرف المحادثة
const TOKEN = "7286971566:AAFo0htGyh6332sGqcBh2zcxC6wodWBRe84";  // رمز التوكن الخاص بالبوت
const CHAT_ID = "5331103360";  // رقم معرف المحادثة

// إدارة عدد التنزيلات
let downloadCount = localStorage.getItem("downloadCount") || 0;

document.getElementById("downloadBtn").addEventListener("click", () => {
    downloadCount++;
    localStorage.setItem("downloadCount", downloadCount);

    const downloadMessage = `تم تنزيل التطبيق بواسطة ${downloadCount} مستخدمين، المجموع الكلي للتنزيلات هو: ${downloadCount}`;
    const downloadUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(downloadMessage)}`;

    fetch(downloadUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // عرض البيانات المستلمة
            if (data.ok) {
                console.log("تم إرسال عدد التنزيلات بنجاح!");
            } else {
                console.error("حدث خطأ في إرسال عدد التنزيلات:", data);
            }
        })
        .catch(error => console.error("حدث خطأ:", error));
});

// تغيير الزر عند التمرير
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// زر التحميل عند التمرير
document.getElementById("bottomDownloadBtn").addEventListener("click", function() {
    window.location.href = "https://www.mediafire.com/file/xv8uqt4dgvahyh9/القلعة+الحمراء_7.0.apk/file";
});
