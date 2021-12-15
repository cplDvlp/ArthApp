// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    string public name = "ArthApp";
    string public symbol = "ARTH1";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 100000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
