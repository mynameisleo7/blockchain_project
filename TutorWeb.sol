// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract tutor{
    mapping(address => bool) public registeredUsers;
    address public user_address;


    struct Student{
        uint studentId;
        string name;
        uint age;
        string phone;
        string email;
        string location;
        string subject;
    }


    struct Teacher{
        uint teacherId;
        string name;
        uint age;
        string phone;
        string email;
        string location;
        string graduateSchool;
        string subject;
    }

    uint studentId = 1 ;
    uint teacherId = 1 ;

    mapping(address => Student) public students;
    mapping(address => Teacher) public teachers;

    address[] public studentAddresses;
    address[] public teacherAddresses;


    //預設、內建學生老師資料
    address defaultAddress = 0xf697903524B7C629aF3EDFf4C3308421C581eE03;
    address secondAddress = 0xb7b8Bd2Ba4a5D8eFA9c6bF8e31D500a51466ac4d;
    address thirdAddress = 0x74e74D7dA886Db294BE6e8e0Bc5156515c40Ff1F;
    address forthAddress = 0xDCd7E2a45c91A13fda6B434091641A1277e42Dd0;
    address fifthAddress = 0xADDc6C1494781A1eeFD044FFa24Cf7E7C8c6807c;

    constructor(){
        Student memory firstStudent = Student(studentId,"Leo",24,"0978937777","111753145@nccu.edu.tw","Taipei","math");
        students[defaultAddress] = firstStudent;
        studentAddresses.push(defaultAddress);
        studentId += 1 ;
        Student memory secondStudent = Student(studentId,"Leo",24,"0978937777","111753145@nccu.edu.tw","Taipei","English");
        students[secondAddress] = secondStudent;
        studentAddresses.push(secondAddress);
        studentId += 1 ;
        Student memory thirdStudent = Student(studentId,"Leo",24,"0978937777","111753145@nccu.edu.tw","Tainan","Physics");
        students[thirdAddress] = thirdStudent;
        studentAddresses.push(thirdAddress);
        studentId += 1 ;
        Teacher memory firstTeacher = Teacher(teacherId,"YuYoLiu",24,"0978937777","b05502166@ntu.edu.tw","Taipei","NTU","Math");
        teachers[defaultAddress] = firstTeacher;
        teacherAddresses.push(defaultAddress);
        teacherId += 1;
        user_address = 0x3b30cD3048dE5c2820f66bE02fB79176D97f0604;
        registeredUsers[user_address] = true;
    }

    function registerStudent ( string memory name , uint age , string memory phone , string memory email , string memory location,string memory subject) public {
        require(bytes(students[msg.sender].name).length == 0, "Student already registered");
        Student memory newStudent = Student(studentId , name , age ,  phone ,  email ,  location,subject);
        students[msg.sender] = newStudent;
        studentAddresses.push(msg.sender);
        studentId += 1 ;
    }

    function registerTeacher (  string memory name , uint age , string memory phone , string memory email , string memory location , string memory graduateSchool,string memory subject) public {
        require(bytes(teachers[msg.sender].name).length == 0, "Teacher already registered");
        Teacher memory newTeacher = Teacher(teacherId , name , age , phone, email, location , graduateSchool,subject);
        teachers[msg.sender] = newTeacher;
        teacherAddresses.push(msg.sender);
        teacherId += 1 ;
    }

    function searchStudentByLocation(string memory location) public view returns (address[] memory) {
        address[] memory result = new address[](studentAddresses.length);
        uint count = 0;
        for (uint i = 0; i < studentAddresses.length; i++) {
            address studentSearchAddress = studentAddresses[i];
            if (keccak256(bytes(students[studentSearchAddress].location)) == keccak256(bytes(location))) {
             result[count] = studentSearchAddress;
             count++;
            }
         }
    // 将结果数组缩小为实际匹配的元素数量
        assembly {
            mstore(result, count)
        }
    return result;
    }

    function searchTeacherBySubject(string memory subject) public view returns (address[] memory) {
        address[] memory result = new address[](teacherAddresses.length);
        uint count = 0;
        for (uint i = 0; i < teacherAddresses.length; i++) {
            address teacherSearchAddress = teacherAddresses[i];
            if (keccak256(bytes(teachers[teacherSearchAddress].subject)) == keccak256(bytes(subject))) {
             result[count] = teacherSearchAddress;
             count++;
            }
         }
         // 将结果数组缩小为实际匹配的元素数量
        assembly {
            mstore(result, count)
        }
    return result;
    }
    
    function isUserRegistered(address user) public view returns (bool) {
        return registeredUsers[user];
    }

    function registerUser() public {
        registeredUsers[msg.sender] = true;
    }

    
}
