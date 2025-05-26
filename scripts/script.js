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
    const successRate = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
    const destroyRate = [0, 0, 5, 10, 15, 20, 25, 30, 35, 40];

    const chance = successRate[level] || 5;
    const destroyChance = destroyRate[level] || 50;
    const success = Math.random() * 100 < chance;
    const status = document.getElementById("upgrade-status");

    if (success) {
      level += 1;
      status.textContent = `🎉 ตีบวกสำเร็จ! ตอนนี้เป็นระดับ +${level}`;
      status.classList.remove("text-red-400");
      status.classList.add("text-green-400");
    } else {
      const destroyItem = Math.random() * 100 < destroyChance;
      if (destroyItem) {
        level = 0;
        status.textContent = "💥 ตีบวกล้มเหลว และไอเท็มถูกทำลาย!";
      } else {
        status.textContent = "❌ ตีบวกล้มเหลว!";
      }
      status.classList.remove("text-green-400");
      status.classList.add("text-red-400");
    }

    document.getElementById("result-level").textContent = `+${level}`;
    document.getElementById("result").classList.remove("hidden");
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

