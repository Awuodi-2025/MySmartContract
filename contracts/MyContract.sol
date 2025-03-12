// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MyContract {
    int256 private number;
    string private text;

    // Event to notify frontend when values change
    event ValuesUpdated(int256 newNumber, string newText);

    // Function to set values
    function setValues(int256 _number, string memory _text) public {
        number = _number;
        text = _text;
        emit ValuesUpdated(_number, _text);
    }

    // Function to get values
    function getValues() public view returns (int256, string memory) {
        return (number, text);
    }
}
