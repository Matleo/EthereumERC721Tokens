const aqua_token_contract = {
    "byteCode": "6080604052662386f26fc1000060085534801561001b57600080fd5b506009606060405190810160405280600181526020016001815260200160c8815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050506009606060405190810160405280600281526020016002815260200160c8815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050506009606060405190810160405280600381526020016003815260200160c8815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050506009606060405190810160405280600481526020016004815260200160c8815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050506121c9806101df6000396000f3fe608060405260043610610105576000357c0100000000000000000000000000000000000000000000000000000000900480635a10d66e116100a7578063a93bca4411610076578063a93bca4414610530578063b88d4fde146105a5578063e039556514610668578063e985e9c51461070e57610105565b80635a10d66e146103c85780636352211e146103f357806370a082311461046e578063a22cb465146104d357610105565b806323b872dd116100e357806323b872dd146102455780633249d212146102b357806342842e0e146103025780634b21acbc1461037057610105565b806301ffc9a71461010a578063081812fc1461017c578063095ea7b3146101f7575b600080fd5b34801561011657600080fd5b506101626004803603602081101561012d57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610797565b604051808215151515815260200191505060405180910390f35b34801561018857600080fd5b506101b56004803603602081101561019f57600080fd5b81019080803590602001909291905050506109e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102436004803603604081101561020d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a1f565b005b6102b16004803603606081101561025b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c06565b005b3480156102bf57600080fd5b506102ec600480360360208110156102d657600080fd5b8101908080359060200190929190505050610dcc565b6040518082815260200191505060405180910390f35b61036e6004803603606081101561031857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610de4565b005b6103b26004803603602081101561038657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed5565b6040518082815260200191505060405180910390f35b3480156103d457600080fd5b506103dd611051565b6040518082815260200191505060405180910390f35b3480156103ff57600080fd5b5061042c6004803603602081101561041657600080fd5b810190808035906020019092919050505061105b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561047a57600080fd5b506104bd6004803603602081101561049157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611098565b6040518082815260200191505060405180910390f35b3480156104df57600080fd5b5061052e600480360360408110156104f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506110e1565b005b6105a3600480360361010081101561054757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919050505061121d565b005b610666600480360360808110156105bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561062257600080fd5b82018360208201111561063457600080fd5b8035906020019184600183028401116401000000008311171561065657600080fd5b90919293919293905050506113bf565b005b34801561067457600080fd5b506106b76004803603602081101561068b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114e6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106fa5780820151818401526020810190506106df565b505050509050019250505060405180910390f35b34801561071a57600080fd5b5061077d6004803603604081101561073157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061157d565b604051808215151515815260200191505060405180910390f35b60008060405180807f737570706f727473496e74657266616365286279746573342900000000000000815250601901905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161490506000604051808061217d602191396021019050604051809103902060405180807f676574417070726f7665642875696e74323536290000000000000000000000008152506014019050604051809103902060405180807f736574417070726f76616c466f72416c6c28616464726573732c626f6f6c2900815250601f019050604051809103902060405180807f617070726f766528616464726573732c75696e74323536290000000000000000815250601801905060405180910390206040518080612100602591396025019050604051809103902060405180806121256029913960290190506040518091039020604051808061214e602f9139602f019050604051809103902060405180807f6f776e65724f662875696e7432353629000000000000000000000000000000008152506010019050604051809103902060405180807f62616c616e63654f6628616464726573732900000000000000000000000000008152506012019050604051809103902018181818181818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614905080806109d95750815b92505050919050565b60006006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a9257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610ad25750610ad1813361157d565b5b1515610add57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16610afe836109e2565b73ffffffffffffffffffffffffffffffffffffffff16141580610b4e5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610c0157826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505050565b80600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610cb357508273ffffffffffffffffffffffffffffffffffffffff16610c9b856109e2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610cc45750610cc3828461157d565b5b9050801515610cd257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614151515610d0e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610d4a57600080fd5b610d548786611611565b610d5e878661179b565b610d688686611aff565b848673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050505050565b60056020528060005260406000206000915090505481565b80600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610e9157508273ffffffffffffffffffffffffffffffffffffffff16610e79856109e2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610ea25750610ea1828461157d565b5b9050801515610eb057600080fd5b610ecc8787876020604051908101604052806000815250611d22565b50505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f1257600080fd5b6008543410151515610f2357600080fd5b6000610f2e83611d4a565b90506000600482811515610f3e57fe5b069050610f4961208c565b600982815481101515610f5857fe5b906000526020600020906003020160606040519081016040529081600082015481526020016001820154815260200160028201548152505090506000816000015182602001518360400151604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052805190602001209050806005600086815260200190815260200160002081905550837fca25d6db861cfd92cafc7681e451edd32c9756e7e73f571ca98433bb27ba524983600001518460200151856040015160405180848152602001838152602001828152602001935050505060405180910390a283945050505050919050565b6000600854905090565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561111c57600080fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600854341015151561122e57600080fd5b6000878787604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052805190602001209050600560008a8152602001908152602001600020548114151561128a57600080fd5b60008484846040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506005600087815260200190815260200160002054811415156112e657600080fd5b60006112f133611d4a565b9050600060646112ff611df0565b60ff166002878c0181151561131057fe5b040103905060008b8783604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052805190602001209050806005600085815260200190815260200160002081905550827fca25d6db861cfd92cafc7681e451edd32c9756e7e73f571ca98433bb27ba52498d898560405180848152602001838152602001828152602001935050505060405180910390a250505050505050505050505050565b82600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061146c57508273ffffffffffffffffffffffffffffffffffffffff16611454856109e2565b73ffffffffffffffffffffffffffffffffffffffff16145b8061147d575061147c828461157d565b5b905080151561148b57600080fd5b6114db89898989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611d22565b505050505050505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561157157602002820191906000526020600020905b81548152602001906001019080831161155d575b50505050509050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b8173ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561167e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156117975760006006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b8173ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561180857600080fd5b61185b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611e2e90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060026000838152602001908152602001600020549050600061196060018060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611e2e90919063ffffffff16565b90506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156119b057fe5b9060005260206000200154905080600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515611a0a57fe5b90600052602060002001819055506000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515611a6657fe5b9060005260206000200181905550600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611ac691906120ae565b50600060026000868152602001908152602001600020819055508260026000838152602001908152602001600020819055505050505050565b600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611b6d57600080fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050806002600084815260200190815260200160002081905550826004600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050906001820390600052602060002001600090919290919091505550611cda6001600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611e4a90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b611d2e84848484611e66565b1515611d3957600080fd5b611d44848484610c06565b50505050565b6000806000805490509050611d5f8382611aff565b808373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4600081908060018154018082558091505090600182039060005260206000200160009091929091909150555080915050919050565b600060c942604051602001808281526020019150506040516020818303038152906040528051906020012060019004811515611e2857fe5b06905090565b6000828211151515611e3f57600080fd5b818303905092915050565b60008183019050828110151515611e6057600080fd5b92915050565b6000611e7184612079565b1515611e805760009050612071565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f77578082015181840152602081019050611f5c565b50505050905090810190601f168015611fa45780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611fc657600080fd5b505af1158015611fda573d6000803e3d6000fd5b505050506040513d6020811015611ff057600080fd5b81019080805190602001909291905050509050600063150b7a027c0100000000000000000000000000000000000000000000000000000000029050807bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080823b905060008111915050919050565b6060604051908101604052806000815260200160008152602001600081525090565b8154818355818111156120d5578183600052602060002091820191016120d491906120da565b5b505050565b6120fc91905b808211156120f85760008160009055506001016120e0565b5090565b9056fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629736166655472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629736166655472616e7366657246726f6d28616464726573732c616464726573732c75696e743235362c6279746573296973417070726f766564466f72416c6c28616464726573732c6164647265737329a165627a7a72305820b89ccd7d0ed29d2c748cb344cc3d9a65a19ca3a4ab682124c76396512008340d0029",
    "abi":[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			}
		],
		"name": "create_token",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id1",
				"type": "uint256"
			},
			{
				"name": "kopf1",
				"type": "uint256"
			},
			{
				"name": "schwanz1",
				"type": "uint256"
			},
			{
				"name": "speed1",
				"type": "uint256"
			},
			{
				"name": "id2",
				"type": "uint256"
			},
			{
				"name": "kopf2",
				"type": "uint256"
			},
			{
				"name": "schwanz2",
				"type": "uint256"
			},
			{
				"name": "speed2",
				"type": "uint256"
			}
		],
		"name": "makeFish",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "kopf",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "schwanz",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "speed",
				"type": "uint256"
			}
		],
		"name": "NewbornFish",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "allOwnedTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMakingPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenPropertyHashes",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
}