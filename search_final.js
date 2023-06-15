let web3;


var contractAddress;
var contractABI;
var contract;
var studentAddress;

window.addEventListener('load', async () => {
    
    const ganacheUrl = 'http://127.0.0.1:7545'; // 替换为 Ganache 私有链的 URL
    web3 = new Web3(new Web3.providers.HttpProvider(ganacheUrl));
    contractAddress = '0x841884de4Df4CE0429a2fF144c0B63043d44CA3B';
    contractABI = [
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
    ]
    // Contract instance
    contract = new web3.eth.Contract(contractABI, contractAddress);
});


// 獲取 HTML 元素




document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsDiv = document.getElementById('results');
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var people1 = document.getElementById("people1");
    var people2 = document.getElementById("people2");
   
    var result;
        try {
            // 調用合約函數搜尋學生
            const searchTerm = searchInput.value;
            if (option1.checked &&  people1.checked) {
                result = await contract.methods.searchStudentByLocation(searchTerm).call();
              } else if (option2.checked && people1.checked) {
                result = await contract.methods.searchStudentBySubject(searchTerm).call();
              } else if (option3.checked && people1.checked) {
                result = await contract.methods.searchStudentBySchool(searchTerm).call();
              } else if (option1.checked && people2.checked) {
                result = await contract.methods.searchTeacherByLocation(searchTerm).call();
              } else if (option2.checked && people2.checked) {
                result = await contract.methods.searchTeacherBySubject(searchTerm).call();
              } else if (option3.checked && people2.checked) {
                result = await contract.methods.searchTeacherBySchool(searchTerm).call();
              } 
              else {
                console.log("請選擇一個選項");
              }
            //const result = await contract.methods.searchStudentByLocation(searchTerm).call();

            // 清空搜尋結果
            resultsDiv.innerHTML = '';

            // 如果有符合搜尋條件的學生
            if (result.length > 0 && people1.checked ) {
                for (let i = 0; i < result.length; i++) {
                    studentAddress = result[i];
                    const getName = await contract.methods.students(studentAddress).call();
                    const studentName = getName[1];
                    // 創建連結元素
                    const link = document.createElement('a');
                    link.href = 'read_student.html?address=' + encodeURIComponent(studentAddress); // 使用 encodeURIComponent 对地址进行编码
                    link.innerText = '第'+(i+1)+'位學生：'+ studentName ;
                    link.target = '_blank'; // 在新的標籤頁中打開連結

                    // 添加到搜尋結果中
                    resultsDiv.appendChild(link);
                    resultsDiv.appendChild(document.createElement('br'));
                }
            }  else if( result.length > 0 && people2.checked) {
                for (let i = 0; i < result.length; i++) {
                    teacherAddress = result[i];
                    const getName = await contract.methods.teachers(teacherAddress).call();
                    const teacherName = getName[1];
                    // 創建連結元素
                    const link = document.createElement('a');
                    link.href = 'read_teacher.html?address=' + encodeURIComponent(teacherAddress); // 使用 encodeURIComponent 对地址进行编码
                    link.innerText = '第'+(i+1)+'位老師：' + teacherName ;
                    link.target = '_blank'; // 在新的標籤頁中打開連結

                    // 添加到搜尋結果中
                    resultsDiv.appendChild(link);
                    resultsDiv.appendChild(document.createElement('br'));
                }

            } else {
                resultsDiv.innerText = '找不到符合搜尋條件的學生';
            }
        } catch (error) {
            console.error(error);
            alert('搜尋學生失敗');
        }
    
});