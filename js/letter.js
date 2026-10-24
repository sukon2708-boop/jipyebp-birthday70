const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดนะคะแฟน เค้าขอให้ปีนี้แฟนมีแต่เรื่องดีดีเข้ามา เป็น 23 ปีที่โคตรเจ๋งเลย ขอให้แฟนของเค้ามีแต่ความสุข เค้าอยากเห็นแฟนยิ้มได้เยอะ ๆ ในทุกวันเลย เพราะเค้าชอบมาก เค้าก็จะเป็นรอยยิ้มให้แฟนเหมือนกัน ิิ สมหวังทุกเรื่องนะคะ รักแฟนมาก ๆ เลย ( ถึงปีนี้จะไม่ได้อยู่ด้วย แต่จะรีบกลับแล้วไปหาไปกอดให้ไวที่สุดเลย ! ) รักแฟนทุกวันเลยแบบมากที่สุด ♥️

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
