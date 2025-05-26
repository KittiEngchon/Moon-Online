/* ตั้งค่าพื้นหลังและฟอนต์ */
body {
  background: linear-gradient(to right, #1a1a2e, #16213e);
  font-family: 'Kanit', sans-serif;
  color: white;
}

/* ปรับแต่งกล่องตัวละคร */
.char-btn, .wing-btn {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s;
}

.char-btn:hover, .wing-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
}

/* ปุ่มหลักของระบบ */
#upgrade-btn, #fuse-btn {
  box-shadow: 0px 4px 10px rgba(138, 43, 226, 0.5);
}

#upgrade-btn:hover, #fuse-btn:hover {
  filter: brightness(1.2);
}

/* แสดงผล NFT หลังจากรวม */
#result {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}
