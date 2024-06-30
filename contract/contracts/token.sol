// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";


contract Token is ERC20, Ownable {
    address public s_owner;
    uint holdingCapinPercent;
    uint256 private s_buyTax;
    uint256 private s_sellTax;
    address private s_taxWallet;
    uint8 private s_tokenDecimals;

    mapping (address => bool ) private automatedMarketMakerPairs;

    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint _holdingCap,
        uint256 _buyTax,
        uint _sellTax,
        uint8 _tokenDecimals,
        address _ownerAddress
    ) ERC20(name, symbol) Ownable(_ownerAddress) {
        holdingCapinPercent = _holdingCap;
        s_buyTax = _buyTax;
        s_sellTax = _sellTax;
        s_tokenDecimals = _tokenDecimals;
        _mint(msg.sender, totalSupply * (10 ** uint256(decimals())));
    }

    function decimals() public view virtual override returns(uint8 newDecimals){
        newDecimals = s_tokenDecimals;
        if(newDecimals > 0){
            return newDecimals;
        }else {
            return 18;
        }
    }

    function getMaxHoldings() public view returns (uint256) {
        if (holdingCapinPercent == 0) {
            // If holding cap is set to 0, return maximum possible value
            return type(uint256).max;
        } else {
            return ((totalSupply() * holdingCapinPercent) / 100);
        }
    }

    function setBuyTax (uint256 _newBuyTax) public onlyOwner {
        require(_newBuyTax < s_buyTax, "new tax cannot exceed previous tax"); 
        s_buyTax = _newBuyTax;
    }

    function setSellTax (uint256 _newSellTax) public onlyOwner {
        require(_newSellTax < s_sellTax, "new tax cannot exceed previous tax"); 
        s_sellTax = _newSellTax;
    }

    function setAutomatedMarketMarkerPair(address pair, bool value) public onlyOwner {
        automatedMarketMakerPairs[pair] = value;
    }

    function setTaxWallet(address _newTaxWallet) public onlyOwner {
        s_taxWallet = _newTaxWallet;
    }

    function getTax() public view returns(uint256, uint256){
        return (s_buyTax, s_sellTax);
    }

    function _update(address from, address to, uint256 value) internal virtual override {
        // check if max holdings exceeded
        if(automatedMarketMakerPairs[from]){
            require(balanceOf(to) + value <= getMaxHoldings(), "You've exceeded the amount of token you can purchase");
        }

        // remove buy tax if "from" is pair address
        uint256 fees;
        if(automatedMarketMakerPairs[from] && s_buyTax > 0){
            fees = value * s_buyTax / 100;
        }
        // remove sell tax if "to" is pair address
        else if (automatedMarketMakerPairs[to] && s_sellTax > 0){
            fees = value * s_sellTax / 100;
        }

        if(fees > 0) {
            super._update(from, s_taxWallet, fees);
            value -= fees;
        }

        super._update(from, to, value);
    }
}
