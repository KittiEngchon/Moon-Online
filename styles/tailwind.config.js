module.exports = {
  purge: ["./index.html", "./scripts/**/*.js"],
  darkMode: "class", // รองรับโหมดมืด
  theme: {
    extend: {
      colors: {
        mystic: "#8A2BE2",  // สีม่วงเรืองแสง
        inferno: "#FF4500", // สีแดงเพลิง
        cosmic: "#00CED1", // สีฟ้าอวกาศ
      },
      animation: {
        glow: "glow-animation 1.5s infinite alternate",
      },
      keyframes: {
        "glow-animation": {
          "0%": { boxShadow: "0px 0px 10px rgba(255,255,255,0.3)" },
          "100%": { boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
