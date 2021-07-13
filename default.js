/*
   Default Parameters
*/ 

function showMyInfo(username, role, theme) {
   
    username = username === undefined ? 'Default User' : username;
    role = role === undefined ? 'Default Role ' : role;
    theme =theme === undefined ? 'Default Theme ' : theme;

    return 'Hello ' ${username}; Your Role Is : $ (role), Website Theme Is: $(theme)

}   

console.log(showMyInfo());
console.log(showMyInfo('Osama'));
console.log(showMyInfo('Osama','Admin'));
console.log(showMyInfo('osama','admin','Black'));
