let userRole = "admin";
let accessLevel;
if(userRole === "admin"){
    accessLevel= "full access";
} else if (userRole === "manager"){
    accessLevel= "limited access";
}else{
    accessLevel= "no access";
}
console.log("Access Level:", accessLevel);
////////////////////////////////////////////////
let isLoggedIn = true;
let userMessage;
if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "welcome,admin "
    }else{
        userMessage = "welcome,user "
    }
}else{
    userMessage = "please log in";
}
console.log("User Message:", userMessage);
////////////////////////////////////////////////
let userType = "subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory="adminstrator";
        break;
    case "manager":
        userCategory="manager";
        break;
    case "subscriber":
        userCategory="subscriber";
        break;
    default:
        userCategory="unknown"
}
console.log("User Category:", userCategory);
////////////////////////////////////////////////
let isAuthenticated = true;
let authenticationStatus =isAuthenticated = true? "Authenticated":"Not authenticated";
console.log("Authentication Status:", authenticationStatus);