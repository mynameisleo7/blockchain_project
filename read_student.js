window.addEventListener('load', async () => {
    // 檢查Web3是否存在於瀏覽器中
  
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    // 合約地址
    const contractAddress = '0x841884de4Df4CE0429a2fF144c0B63043d44CA3B';
    // 合約ABI（從Remix或合約編譯工具中獲取）
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
    ];

    // 實例化合約
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const urlParams = new URLSearchParams(window.location.search);
    const studentAddress = urlParams.get('address');

    // 要查詢的學生地址
    

    try {
        // 調用合約函數獲取學生資料
        const result = await contract.methods.students(studentAddress).call();
        // 解析返回的結果
        const studentData = {
            studentId: result[0],
            name: result[1],
            age: result[2],
            phone: result[3],
            email: result[4],
            location: result[5],
            subject: result[6]
        };
        // 更新HTML中的學生資料
        document.getElementById('name').innerText = '姓名：' + studentData.name;
        document.getElementById('age').innerText = '年齡：' + studentData.age;
        document.getElementById('phone').innerText = '電話：' + studentData.phone;
        document.getElementById('email').innerText = '郵件：' + studentData.email;
        document.getElementById('location').innerText = '地區：' + studentData.location;
        document.getElementById('subject').innerText = '需求科目：' + studentData.subject;
    } catch (error) {
        console.error(error);
        // 若發生錯誤，顯示錯誤訊息
        alert('讀取學生資料失敗');
    }
});


document.getElementById('closeButton').addEventListener('click', async () => {
    window.close();
});