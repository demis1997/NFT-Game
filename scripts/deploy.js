const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Ryu", "Ken", "Chun Li"],       // Names
      ["https://www.smashbros.com/assets_v2/img/fighter/ryu/main.png", // Images
      "https://ssb.wiki.gallery/images/thumb/b/bd/Street_Fighter_-_Ken_Third_Strike_Online.png/1200px-Street_Fighter_-_Ken_Third_Strike_Online.png", 
      "https://static.wikia.nocookie.net/fantendo/images/f/f9/SFxT_Chun-Li.png/revision/latest?cb=20190822175036"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],
      "Akuma", // Boss name
  "https://beagamecharacter.com/wp-content/uploads/2016/07/AkumaSpotlight.jpg", // Boss image
  10000, // Boss hp
  50 // Boss attack damage                    // Attack damage values
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();