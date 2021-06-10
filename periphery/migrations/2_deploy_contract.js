const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0x7f339AA56dd38CB92277c95C29F50647ac25594F'; // ไป deploy contract จาก core ก่อน แล้วเอามาใส่

    if(network === 'mainnet'){
        weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');
    }else{
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }
    await deployer.deploy(Router, FACTORY_ADDRESS, WETH);
};
