// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DigitalContactCard {
    struct ContactCard {
        string name;
        string email;
        string phone;
        string company;
        string position;
    }

    mapping(address => ContactCard) private contactCards;
    mapping(address => bool) public hasContactCard;

    event ContactCardCreated(address indexed owner, string name, string email, string phone, string company, string position);
    event ContactCardUpdated(address indexed owner, string name, string email, string phone, string company, string position);
    
    function createContactCard(string memory _name, string memory _email, string memory _phone, string memory _company, string memory _position) public {
        require(!hasContactCard[msg.sender], "Contact card already exists");
        contactCards[msg.sender] = ContactCard(_name, _email, _phone, _company, _position);
        hasContactCard[msg.sender] = true;
        emit ContactCardCreated(msg.sender, _name, _email, _phone, _company, _position);
    }
    
    function updateContactCard(string memory _name, string memory _email, string memory _phone, string memory _company, string memory _position) public {
        require(hasContactCard[msg.sender], "Contact card does not exist");
        contactCards[msg.sender] = ContactCard(_name, _email, _phone, _company, _position);
        emit ContactCardUpdated(msg.sender, _name, _email, _phone, _company, _position);
    }
    
    function getContactCard(address _owner) public view returns (string memory, string memory, string memory, string memory, string memory) {
        require(hasContactCard[_owner], "Contact card does not exist");
        ContactCard memory card = contactCards[_owner];
        return (card.name, card.email, card.phone, card.company, card.position);
    }
}
