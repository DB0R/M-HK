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

// تغيير الزر عند التمرير لأسفل
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    const downloadBtn = document.getElementById("downloadBtn");
    if (scrollPosition >= pageHeight - 50) {
        downloadBtn.style.display = "none";
        document.getElementById("bottomDownloadBtn").style.display = "block";
    } else {
        downloadBtn.style.display = "block";
        document.getElementById("bottomDownloadBtn").style.display = "none";
    }
});

// زر التحميل
document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "https://www.mediafire.com/file/xv8uqt4dgvahyh9/القلعة+الحمراء_7.0.apk/file";
});

// تغيير الزر عند التمرير
document.getElementById("iioo").addEventListener("click", function() {
    window.location.href = "https://www.mediafire.com/file/xv8uqt4dgvahyh9/القلعة+الحمراء_7.0.apk/file";
});
