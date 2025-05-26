// ตรวจสอบว่า Metamask ถูกติดตั้ง
async function connectWallet() {
  if (!window.ethereum) {
    alert("⚠ กรุณาติดตั้ง Metamask!");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("wallet-status").textContent = `🔗 เชื่อมต่อแล้ว: ${accounts[0]}`;
    
    await checkNetwork();
    await getBalance(accounts[0]);
    await getTokenBalance(accounts[0]);

    return accounts[0];
  } catch (error) {
    console.error("การเชื่อมต่อผิดพลาด:", error);
  }
}

// ตรวจสอบเครือข่ายที่ใช้งาน
async function checkNetwork() {
  const chainId = await ethereum.request({ method: "eth_chainId" });

  if (chainId !== "0x1") { // ตรวจสอบว่าผู้ใช้ต้องอยู่บน Ethereum Mainnet
    alert("⚠ กรุณาสลับไปยัง Ethereum Mainnet!");
  }
}

// ดึงยอดคงเหลือ ETH
async function getBalance(address) {
  try {
    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(address);
    const ethBalance = web3.utils.fromWei(balance, "ether");
    document.getElementById("wallet-balance").textContent = `💰 ยอดคงเหลือ: ${ethBalance} ETH`;
  } catch (error) {
    console.error("❌ ผิดพลาดในการดึงยอดคงเหลือ:", error);
  }
}

// ดึงยอดคงเหลือ Token (USDT หรือ MATIC)
async function getTokenBalance(address) {
  try {
    const tokenAddress = "0xYourTokenAddress"; // ใส่ที่อยู่ของ Token
    const tokenABI = [ /* ใส่ ABI ของ Token ที่นี่ */ ];
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    
    const balance = await tokenContract.methods.balanceOf(address).call();
    const formattedBalance = web3.utils.fromWei(balance, "ether");

    document.getElementById("token-balance").textContent = `🪙 Token คงเหลือ: ${formattedBalance}`;
  } catch (error) {
    console.error("❌ ผิดพลาดในการดึงยอด Token:", error);
  }
}

// ตั้งค่าการเชื่อมต่อกับ Smart Contract
const contractAddress = "0xYourContractAddress"; // ใส่ที่อยู่ของ Smart Contract
const contractABI = [ /* ใส่ ABI ของ Smart Contract ที่นี่ */ ];
const web3 = new Web3(window.ethereum);
const nftContract = new web3.eth.Contract(contractABI, contractAddress);

// มิ้น NFT ผ่าน Smart Contract
async function mintNFT() {
  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    await nftContract.methods.mint().send({ from: accounts[0] });
    alert("🎉 มิ้น NFT สำเร็จ!");
  } catch (error) {
    console.error("❌ ผิดพลาดในการมิ้น NFT:", error);
  }
}

// เชื่อมต่อฟังก์ชันกับปุ่ม
document.getElementById("connect-btn").addEventListener("click", connectWallet);
document.getElementById("fuse-btn").addEventListener("click", mintNFT);
