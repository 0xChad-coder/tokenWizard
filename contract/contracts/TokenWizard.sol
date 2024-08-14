// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./token.sol";
import "./nft.sol";


contract TokenWizard {
    NFT[] public tokens; //
    mapping(uint => address) public indexToContract; //
    mapping(uint => address) public indexToOwner; //

    event TokenCreated(
        address indexed tokenAddress,
        string name,
        string symbol,
        uint256 totalSupply
    );
    event NFTCreated(address owner, address tokenContract); //
    event NFTMinted(address owner, address tokenContract, uint amount); //

    function createToken(
        string memory name,
        string memory symbol,
        uint256 _totalSupply,
        uint _holdingCap,
        uint256 _buyTax,
        uint256 _sellTax,
        uint8 _tokenDecimals,
        address _ownerAddress,
        uint256 teamAllocation,
        address teamAllocationAddress
    ) external {
        Token newToken = new Token(name, symbol, _totalSupply, _holdingCap, _buyTax, _sellTax, _tokenDecimals, _ownerAddress);
        uint256 totalSupply = _totalSupply * 10 ** _tokenDecimals;
        uint256 teamShare = totalSupply * teamAllocation / 100;
        // transfer to team wallet
        if(teamAllocation > 0) {
            newToken.transfer(teamAllocationAddress, teamShare);
            totalSupply -= teamShare;
        }
        newToken.transfer(msg.sender, totalSupply);
        emit TokenCreated(address(newToken), name, symbol, totalSupply);
    }

    function mintNFT(uint _index, string memory _name, uint256 amount) public {
        uint id = getIdByName(_index, _name);
        tokens[_index].mint(indexToOwner[_index], id, amount);
        emit NFTMinted(tokens[_index].owner(), address(tokens[_index]), amount);
    }

    function getCountNFTbyIndex(
        uint256 _index,
        uint256 _id
    ) public view returns (uint amount) {
        return tokens[_index].balanceOf(indexToOwner[_index], _id);
    }

    function getCountNFTbyName(
        uint256 _index,
        string calldata _name
    ) public view returns (uint amount) {
        uint id = getIdByName(_index, _name);
        return tokens[_index].balanceOf(indexToOwner[_index], id);
    }

    function getIdByName(
        uint _index,
        string memory _name
    ) public view returns (uint) {
        return tokens[_index].nametoId(_name);
    }

    function getNameById(
        uint _index,
        uint _id
    ) public view returns (string memory) {
        return tokens[_index].idtoName(_id);
    }

    function getNFTbyIndexandId(
        uint _index,
        uint _id
    )
        public
        view
        returns (
            address _contract,
            address _owner,
            string memory _uri,
            uint supply
        )
    {
        NFT nft = tokens[_index];
        return (
            address(nft),
            nft.owner(),
            nft.uri(_id),
            nft.balanceOf(indexToOwner[_index], _id)
        );
    }
}
