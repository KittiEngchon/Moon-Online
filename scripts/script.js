document.addEventListener("DOMContentLoaded", () => {
  let selectedChar = "";
  let selectedWing = "";
  let level = 0;

  // เลือกตัวละคร
  document.querySelectorAll(".char-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedChar = btn.dataset.char;
      document.querySelectorAll(".char-btn").forEach(b => b.classList.remove("border-purple-500"));
      btn.classList.add("border-purple-500");
    });
  });

  // เลือกปีก
  document.querySelectorAll(".wing-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedWing = btn.dataset.wing;
      document.querySelectorAll(".wing-btn").forEach(b => b.classList.remove("border-purple-500"));
      btn.classList.add("border-purple-500");
    });
  });

  // ตีบวก NFT
  document.getElementById("upgrade-btn").addEventListener("click", () => {
    const success = Math.random() < 0.6; // โอกาสสำเร็จ 60%
    const status = document.getElementById("upgrade-status");
    if (success) {
      level += 1;
      status.textContent = `ตีบวกสำเร็จ! เลเวลตอนนี้: +${level}`;
      status.classList.remove("text-red-400");
      status.classList.add("text-green-400");
    } else {
      status.textContent = "ตีบวกล้มเหลว!";
      status.classList.remove("text-green-400");
      status.classList.add("text-red-400");
    }
  });

  // ฟิวชัน NFT และแสดงผลลัพธ์
  document.getElementById("fuse-btn").addEventListener("click", () => {
    const name = document.getElementById("nft-name-input").value || "NFT-ไม่มีชื่อ";
    document.getElementById("result-name").textContent = name;
    document.getElementById("result-class").textContent = selectedChar || "ยังไม่เลือกตัวละคร";
    document.getElementById("result-wing").textContent = selectedWing || "ยังไม่เลือกปีก";
    document.getElementById("result-level").textContent = `+${level}`;
    document.getElementById("result").classList.remove("hidden");
  });
});
