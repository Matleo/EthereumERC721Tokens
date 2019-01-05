const erc721 = {
    "byteCode": "608060405234801561001057600080fd5b50611c44806100206000396000f3fe6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100b4578063081812fc14610126578063095ea7b3146101a157806323b872dd146101ef57806342842e0e1461025d5780634f077eaf146102cb5780636352211e1461032657806370a08231146103a1578063a22cb46514610406578063b88d4fde14610463578063e985e9c514610526575b600080fd5b3480156100c057600080fd5b5061010c600480360360208110156100d757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506105af565b604051808215151515815260200191505060405180910390f35b34801561013257600080fd5b5061015f6004803603602081101561014957600080fd5b8101908080359060200190929190505050610906565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ed600480360360408110156101b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610943565b005b61025b6004803603606081101561020557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b2a565b005b6102c96004803603606081101561027357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cf0565b005b3480156102d757600080fd5b50610324600480360360408110156102ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610de1565b005b34801561033257600080fd5b5061035f6004803603602081101561034957600080fd5b8101908080359060200190929190505050610eb3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ad57600080fd5b506103f0600480360360208110156103c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef0565b6040518082815260200191505060405180910390f35b34801561041257600080fd5b506104616004803603604081101561042957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f39565b005b6105246004803603608081101561047957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156104e057600080fd5b8201836020820111156104f257600080fd5b8035906020019184600183028401116401000000008311171561051457600080fd5b9091929391929390505050611075565b005b34801561053257600080fd5b506105956004803603604081101561054957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061119c565b604051808215151515815260200191505060405180910390f35b60008060405180807f737570706f727473496e74657266616365286279746573342900000000000000815250601901905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050600060405180807f6973417070726f766564466f72416c6c28616464726573732c6164647265737381526020017f29000000000000000000000000000000000000000000000000000000000000008152506021019050604051809103902060405180807f676574417070726f7665642875696e74323536290000000000000000000000008152506014019050604051809103902060405180807f736574417070726f76616c466f72416c6c28616464726573732c626f6f6c2900815250601f019050604051809103902060405180807f617070726f766528616464726573732c75696e743235362900000000000000008152506018019050604051809103902060405180807f7472616e7366657246726f6d28616464726573732c616464726573732c75696e81526020017f74323536290000000000000000000000000000000000000000000000000000008152506025019050604051809103902060405180807f736166655472616e7366657246726f6d28616464726573732c6164647265737381526020017f2c75696e743235362900000000000000000000000000000000000000000000008152506029019050604051809103902060405180807f736166655472616e7366657246726f6d28616464726573732c6164647265737381526020017f2c75696e743235362c6279746573290000000000000000000000000000000000815250602f019050604051809103902060405180807f6f776e65724f662875696e7432353629000000000000000000000000000000008152506010019050604051809103902060405180807f62616c616e63654f6628616464726573732900000000000000000000000000008152506012019050604051809103902018181818181818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614905080806108fd5750815b92505050919050565b60006005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156109b657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806109f657506109f5813361119c565b5b1515610a0157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16610a2283610906565b73ffffffffffffffffffffffffffffffffffffffff16141580610a725750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610b2557826005600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505050565b80600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610bd757508273ffffffffffffffffffffffffffffffffffffffff16610bbf85610906565b73ffffffffffffffffffffffffffffffffffffffff16145b80610be85750610be7828461119c565b5b9050801515610bf657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614151515610c3257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610c6e57600080fd5b610c788786611230565b610c8287866113ba565b610c8c868661171e565b848673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050505050565b80600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610d9d57508273ffffffffffffffffffffffffffffffffffffffff16610d8585610906565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dae5750610dad828461119c565b5b9050801515610dbc57600080fd5b610dd88787876020604051908101604052806000815250611941565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e1d57600080fd5b610e27828261171e565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a460008190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f7457600080fd5b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b82600033905060006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061112257508273ffffffffffffffffffffffffffffffffffffffff1661110a85610906565b73ffffffffffffffffffffffffffffffffffffffff16145b806111335750611132828461119c565b5b905080151561114157600080fd5b61119189898989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611941565b505050505050505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b8173ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561129d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156113b65760006005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b8173ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561142757600080fd5b61147a6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196990919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060026000838152602001908152602001600020549050600061157f60018060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061196990919063ffffffff16565b90506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156115cf57fe5b9060005260206000200154905080600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561162957fe5b90600052602060002001819055506000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561168557fe5b9060005260206000200181905550600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036116e59190611bc7565b50600060026000868152602001908152602001600020819055508260026000838152602001908152602001600020819055505050505050565b600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561178c57600080fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050806002600084815260200190815260200160002081905550826004600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208290806001815401808255809150509060018203906000526020600020016000909192909190915055506118f96001600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198590919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b61194d848484846119a1565b151561195857600080fd5b611963848484610b2a565b50505050565b600082821115151561197a57600080fd5b818303905092915050565b6000818301905082811015151561199b57600080fd5b92915050565b60006119ac84611bb4565b15156119bb5760009050611bac565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611ab2578082015181840152602081019050611a97565b50505050905090810190601f168015611adf5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611b0157600080fd5b505af1158015611b15573d6000803e3d6000fd5b505050506040513d6020811015611b2b57600080fd5b81019080805190602001909291905050509050600063150b7a027c0100000000000000000000000000000000000000000000000000000000029050807bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080823b905060008111915050919050565b815481835581811115611bee57818360005260206000209182019101611bed9190611bf3565b5b505050565b611c1591905b80821115611c11576000816000905550600101611bf9565b5090565b9056fea165627a7a72305820103f4ec9af3ac0ba648e9a7ebc49481f13b8c87764d68bb5100b7e6f1fde43630029",
    "abi": [
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
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "create_token",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
        }
    ]
}