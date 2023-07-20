export const wearableAbi = [{ "anonymous": false, "inputs": [{ "components": [{ "internalType": "address", "name": "facetAddress", "type": "address" }, { "internalType": "enum IDiamondCut.FacetCutAction", "name": "action", "type": "uint8" }, { "internalType": "bytes4[]", "name": "functionSelectors", "type": "bytes4[]" }], "indexed": false, "internalType": "struct IDiamondCut.FacetCut[]", "name": "_diamondCut", "type": "tuple[]" }, { "indexed": false, "internalType": "address", "name": "_init", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "_calldata", "type": "bytes" }], "name": "DiamondCut", "type": "event" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "facetAddress", "type": "address" }, { "internalType": "enum IDiamondCut.FacetCutAction", "name": "action", "type": "uint8" }, { "internalType": "bytes4[]", "name": "functionSelectors", "type": "bytes4[]" }], "internalType": "struct IDiamondCut.FacetCut[]", "name": "_diamondCut", "type": "tuple[]" }, { "internalType": "address", "name": "_init", "type": "address" }, { "internalType": "bytes", "name": "_calldata", "type": "bytes" }], "name": "diamondCut", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "_functionSelector", "type": "bytes4" }], "name": "facetAddress", "outputs": [{ "internalType": "address", "name": "facetAddress_", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "facetAddresses", "outputs": [{ "internalType": "address[]", "name": "facetAddresses_", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_facet", "type": "address" }], "name": "facetFunctionSelectors", "outputs": [{ "internalType": "bytes4[]", "name": "facetFunctionSelectors_", "type": "bytes4[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "facets", "outputs": [{ "components": [{ "internalType": "address", "name": "facetAddress", "type": "address" }, { "internalType": "bytes4[]", "name": "functionSelectors", "type": "bytes4[]" }], "internalType": "struct IDiamondLoupe.Facet[]", "name": "facets_", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "_interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "balance_", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_owners", "type": "address[]" }, { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "bals", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "approved_", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "bool", "name": "_approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_value", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "bool", "name": "_approved", "type": "bool" }], "name": "emitApprovalEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }], "name": "emitTransferBatchEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "emitTransferSingleEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_value", "type": "string" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "emitUriEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]