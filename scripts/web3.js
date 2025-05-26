// เชื่อมต่อกับ Metamask
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      document.getElementById("wallet-status").textContent = `เชื่อมต่อแล้ว: ${accounts[0]}`;
      return accounts[0];
    } catch (error) {
      console.error("การเชื่อมต่อกระเป๋าเงินผิดพลาด:", error);
    }
  } else {
    alert("กรุณาติดตั้ง Metamask!");
  }
}

// ตรวจสอบเครือข่าย
async function checkNetwork() {
  const chainId = await ethereum.request({ method: "eth_chainId" });
  if (chainId !== "0x1") { // เช็คว่าผู้ใช้ไม่ได้อยู่บนเครือข่าย Ethereum Mainnet
    alert("กรุณาสลับไปยัง Ethereum Mainnet!");
  }
}

// โต้ตอบกับ Smart Contract
const contractAddress = "0xYourContractAddress"; // ใส่ที่อยู่ของ Smart Contract
const contractABI = [ /* ใส่ ABI ของ Smart Contract ที่นี่ */ ];
const web3 = new Web3(window.ethereum);
const nftContract = new web3.eth.Contract(contractABI, contractAddress);

async function mintNFT() {
  try {
    const accounts = await web3.eth.getAccounts();
    await nftContract.methods.mint().send({ from: accounts[0] });
    alert("🎉 มิ้น NFT สำเร็จ!");
  } catch (error) {
    console.error("ผิดพลาดในการมิ้น NFT:", error);
  }
}

// เชื่อมต่อฟังก์ชันกับปุ่ม
document.getElementById("connect-btn").addEventListener("click", connectWallet);
document.getElementById("fuse-btn").addEventListener("click", mintNFT);
