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

  // ตีบวกระดับสูง (ตามแบบ MU Online)
  document.getElementById("upgrade-btn").addEventListener("click", () => {
    const successRate = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5]; // อัตราสำเร็จแต่ละระดับ
    const destroyRate = [0, 0, 5, 10, 15, 20, 25, 30, 35, 40]; // โอกาสไอเท็มถูกทำลาย

    const chance = successRate[level] || 5; // ถ้าระดับสูงกว่า 10, โอกาสเหลือ 5%
    const destroyChance = destroyRate[level] || 50; // ถ้าระดับสูงกว่า 10, โอกาสทำลาย 50%

    const success = Math.random() * 100 < chance;
    const status = document.getElementById("upgrade-status");

    if (success) {
      level += 1;
      status.textContent = `🎉 ตีบวกสำเร็จ! ตอนนี้เป็นระดับ +${level}`;
      status.classList.remove("text-red-400");
      status.classList.add("text-green-400");
    } else {
      const destroyItem = Math.random() * 100 < destroyChance; // เช็คว่าไอเท็มจะถูกทำลายหรือไม่
      if (destroyItem) {
        level = 0; // รีเซ็ตไอเท็ม
        status.textContent = "💥 ตีบวกล้มเหลว และไอเท็มถูกทำลาย!";
      } else {
        status.textContent = "❌ ตีบวกล้มเหลว!";
      }
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
});document.addEventListener("DOMContentLoaded", () => {
  let level = 0;

  // ตีบวกระดับสูง
  document.getElementById("upgrade-btn").addEventListener("click", () => {
    const successRate = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
    const chance = successRate[level] || 5;
    const success = Math.random() * 100 < chance;
    const status = document.getElementById("upgrade-status");

    if (success) {
      level += 1;
      status.textContent = `🎉 สำเร็จ! ตอนนี้ระดับ +${level}`;
      document.getElementById("result-level").textContent = `+${level}`;
      document.getElementById("result").classList.remove("hidden");
    } else {
      status.textContent = "❌ ล้มเหลว!";
    }
  });

  // เชื่อมต่อ Metamask
  document.getElementById("connect-btn").addEventListener("click", async () => {
    if (!window.ethereum) {
      alert("กรุณาติดตั้ง Metamask!");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      document.getElementById("wallet-status").textContent = `🔗 เชื่อมต่อแล้ว: ${accounts[0]}`;
    } catch (error) {
      console.error("เชื่อมต่อผิดพลาด:", error);
    }
  });
});

