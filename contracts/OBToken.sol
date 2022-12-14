// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OBToken is ERC20 {
    constructor() ERC20("OKT", "OKToken"){
        _mint(msg.sender, 10000 * 10 ** 18);
    }
}
