// เชื่อมต่อกับ Metamask
async function connectWallet() {
  if (!window.ethereum) {
    alert("กรุณาติดตั้ง Metamask!");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("wallet-status").textContent = `🔗 เชื่อมต่อแล้ว: ${accounts[0]}`;
    return accounts[0];
  } catch (error) {
    console.error("การเชื่อมต่อกระเป๋าเงินผิดพลาด:", error);
  }
}

// ตรวจสอบเครือข่ายที่ใช้งาน
async function checkNetwork() {
  const chainId = await ethereum.request({ method: "eth_chainId" });
  
  if (chainId !== "0x1") { // ตรวจสอบว่าอยู่บน Ethereum Mainnet
    alert("⚠ กรุณาสลับไปยัง Ethereum Mainnet!");
  }
}

// เชื่อมต่อกับ Smart Contract
const contractAddress = "0xYourContractAddress"; // ใส่ที่อยู่ Smart Contract
const contractABI = [ /* ใส่ ABI ของ Smart Contract ที่นี่ */ ];
const web3 = new Web3(window.ethereum);
const Web3 = require('web3');
const nftContract = new web3.eth.Contract(contractABI, contractAddress);

// มิ้น NFT ผ่าน Smart Contract
async function mintNFT() {
  try {
    const accounts = await web3.eth.getAccounts();
    await nftContract.methods.mint().send({ from: accounts[0] });
    alert("🎉 มิ้น NFT สำเร็จ!");
  } catch (error) {
    console.error("❌ ผิดพลาดในการมิ้น NFT:", error);
  }
}

// เชื่อมต่อฟังก์ชันกับปุ่ม
document.getElementById("connect-btn").addEventListener("click", connectWallet);
document.getElementById("fuse-btn").addEventListener("click", mintNFT);
