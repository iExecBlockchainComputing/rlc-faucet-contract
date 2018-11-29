pragma solidity ^0.5.0;

import "./Ownable.sol";

contract Migrations is Ownable
{
	uint public lastCompletedMigration;

	constructor() public
	{
	}

	function setCompleted(uint completed) public onlyOwner
	{
		lastCompletedMigration = completed;
	}

	function upgrade(address newAddress) public onlyOwner
	{
		Migrations upgraded = Migrations(newAddress);
		upgraded.setCompleted(lastCompletedMigration);
	}
}
