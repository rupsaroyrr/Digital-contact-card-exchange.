const contractAddress = "0xFb6B7c5498e4775EDD64a33c00177637452E6f52";
const abi = [[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "company",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "ContactCardCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "company",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "ContactCardUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_position",
				"type": "string"
			}
		],
		"name": "createContactCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getContactCard",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasContactCard",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_position",
				"type": "string"
			}
		],
		"name": "updateContactCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
    {
        "inputs": [
            { "internalType": "string", "name": "_name", "type": "string" },
            { "internalType": "string", "name": "_email", "type": "string" },
            { "internalType": "string", "name": "_phone", "type": "string" },
            { "internalType": "string", "name": "_company", "type": "string" },
            { "internalType": "string", "name": "_position", "type": "string" }
        ],
        "name": "createContactCard",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContactCard",
        "outputs": [
            { "internalType": "string", "name": "", "type": "string" },
            { "internalType": "string", "name": "", "type": "string" },
            { "internalType": "string", "name": "", "type": "string" },
            { "internalType": "string", "name": "", "type": "string" },
            { "internalType": "string", "name": "", "type": "string" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let web3;
let contract;
let accounts;

document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        accounts = await web3.eth.getAccounts();
        contract = new web3.eth.Contract(abi, contractAddress);
        alert("Wallet Connected!");
    } else {
        alert("Please install MetaMask");
    }
});

document.getElementById("createCard").addEventListener("click", async () => {
    if (!contract) return alert("Connect wallet first");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    await contract.methods.createContactCard(name, email, phone, company, position).send({ from: accounts[0] });
    alert("Contact Card Created!");
});