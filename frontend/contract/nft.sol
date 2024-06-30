// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC1155, Ownable {
    string[] public names; //array of names
    uint[] public ids; //uint array of ids
    string public baseMetadataurl; //url of token
    string public name; //name of token
    uint public mintFee = 0 wei; // 0 by default

    mapping(string => uint) public nametoId; //mapping the name to id
    mapping(uint => string) public idtoName; // mapping the id ot name

    constructor(
        string memory _contractName,
        string memory _uri,
        string[] memory _names,
        uint[] memory _ids
    ) ERC1155(_uri) Ownable(msg.sender) {
        names = _names;
        ids = _ids;
        createMapping();
        setURI(_uri);
        baseMetadataurl = _uri;
        name = _contractName;
        transferOwnership(tx.origin);
    }

    // creating a mpping of strings to ids

    function createMapping() private {
        for (uint id = 0; id < ids.length; id++) {
            nametoId[names[id]] = ids[id];
            idtoName[ids[id]] = names[id];
        }
    }

    // set our url and make it opensea compatible

    function uri(
        uint256 _tokenid
    ) public view override returns (string memory) {
        return
            string(
                abi.encodePacked(
                    baseMetadataurl,
                    Strings.toString(_tokenid),
                    ".json"
                )
            );
    }

    function getNames() public view returns (string[] memory) {
        return names;
    }

    // change metadata, only owner

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    // setting a mint fee
    function setMintfee(uint _fee) public onlyOwner {
        mintFee = _fee;
    }

    // function to mint the nft
    function mint(
        address account,
        uint _id,
        uint256 amount
    ) public payable returns (uint) {
        require(msg.value == mintFee);
        _mint(account, _id, amount, "");
        return _id;
    }

    // function to mint in batche
    function mintBatch(
        address to,
        uint256[] memory _ids,
        uint256[] memory amounts,
        bytes memory data
    ) public {
        _mintBatch(to, _ids, amounts, data);
    }
}
