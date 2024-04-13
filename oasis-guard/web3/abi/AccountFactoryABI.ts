export const AccountFactoryABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "accountAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32[2]",
                name: "publicKey",
                type: "bytes32[2]",
            },
        ],
        name: "AccountCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32[2]",
                name: "_publicKey",
                type: "bytes32[2]",
            },
        ],
        name: "createAccount",
        outputs: [
            {
                internalType: "address",
                name: "accountAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[2]",
                name: "_publicKey",
                type: "bytes32[2]",
            },
        ],
        name: "getAccountAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[2]",
                name: "_publicKey",
                type: "bytes32[2]",
            },
        ],
        name: "hashPublicKey",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];