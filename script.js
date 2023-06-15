// 创建 web3 实例
let web3;

// 当页面加载完成时运行代码
window.addEventListener('DOMContentLoaded', async () => {
  // 检查 MetaMask 是否已安装
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask to use this dApp!');
    return;
  }

  // 创建 web3 实例
  const ganacheUrl = 'http://localhost:7545'; // 替换为 Ganache 私有链的 URL
  web3 = new Web3(new Web3.providers.HttpProvider(ganacheUrl));

  

});

// 连接按钮的点击事件
document.getElementById('connectButton').addEventListener('click', async () => {
  // 请求用户授权连接到 MetaMask
  await window.ethereum.enable();

  // 获取用户钱包地址
  //const accounts = await web3.eth.getAccounts();
  //const walletAddress = accounts[0].toLowerCase(); // Ganache 链上的地址是小写形式
  const walletAddress = ethereum.selectedAddress.toLowerCase();

  // 更新页面上的钱包地址
  document.getElementById('addressText').textContent += walletAddress;

  // 连接到智能合约
  const contractAddress = '0x841884de4Df4CE0429a2fF144c0B63043d44CA3B'; // 替换为您的智能合约地址
  const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "isUserRegistered",
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
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"name": "registerStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "graduateSchool",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"name": "registerTeacher",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "registeredUsers",
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
				"name": "location",
				"type": "string"
			}
		],
		"name": "searchStudentByLocation",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"name": "searchStudentBySubject",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"name": "searchTeacherByLocation",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"name": "searchTeacherBySchool",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"name": "searchTeacherBySubject",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studentAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"name": "students",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teacherAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"name": "teachers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "teacherId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "graduateSchool",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "user_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // 替换为您的智能合约 ABI

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // 检查用户是否已注册
    const isRegistered = await contract.methods.isUserRegistered(walletAddress).call();

    // 更新页面上的注册状态
    if (isRegistered) {
        document.getElementById('registrationStatus').textContent = 'Status: Registered User';
        document.getElementById('registerTeacherButton').classList.remove('hidden');
        document.getElementById('registerStudentButton').classList.remove('hidden');
        document.getElementById('searchButton').classList.remove('hidden');
    } else {
        document.getElementById('registrationStatus').textContent = 'Status: Unregistered User';
        document.getElementById('registerButton').classList.remove('hidden');
    }
});


document.getElementById('registerButton').addEventListener('click', () => {
    // 在当前标签页中加载 register.html
    window.location.href = 'register.html';
  });
