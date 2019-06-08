export default function(userData = {}, action) {

    console.log('Action from Signup user reducer >>', action);

    if(action.type === 'SIGNUP') {

  var userCopy = {
    ...userData,
    email: action.email,
    password: action.password,
    adress0x: action.adress0x,
    lastName: action.lastName,
    firstName: action.firstName,
    role: action.role,
    companyName: action.companyName,
    companyAddress: action.companyAddress
  };
    return userCopy;
    } else {
        return userData;
    }
  }
