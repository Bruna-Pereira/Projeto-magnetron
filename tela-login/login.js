function logIn(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let userList = [];

    let userValid = {
        nameUser: '',
        user: '',
        password: ''
    }

    userList = JSON.parse(localStorage.getItem('userList'))

    userList.forEach((item) => {
        if(user.value == item.userRegistred && password.value == item.passwordRegistred){
            userValid = {
                nameUser: item.nameRegistred,
                user: item.userRegistred,
                password: item.passwordRegistred
            }
        }
    });
 

    if(user.value == userValid.user && password.value == userValid.password){
        console.log("login efetuado")
    }
    else {
        console.log("deu ruim")
    }






}