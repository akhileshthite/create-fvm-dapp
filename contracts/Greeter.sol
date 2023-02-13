// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Greeter {
    string message = "Hello, world!";

    function read() public view returns (string memory) {
        return message;
    }

    function write(string memory newMessage) public {
        message = newMessage;
    }
}