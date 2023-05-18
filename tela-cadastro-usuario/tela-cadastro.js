/** Acessando o input e label de nome **/
let inputName = document.querySelector('#inputName')
let labelName = document.querySelector('#labelName')

/** Variavel de validação do campo nome inicia como false **/
let validName = false;

/** Acessando o input e label de usuário **/
let inputUser = document.querySelector('#inputUser')
let labelUser = document.querySelector('#labelUser')

/** Variavel de validação do campo usuário inicia como false **/
let validUser = false;

/** Acessando o input e label de senha **/
let inputPassword = document.querySelector('#inputPassword')
let labelPassword = document.querySelector('#labelPassword')

/** Variavel de validação do campo senha inicia como false **/
let validPassword = false;

/** Acessando o input e label de confirmação de senha **/
let inputConfirmPassword = document.querySelector('#inputConfirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')

/** Variavel de validação do campo de confirmação senha inicia como false **/
let validPasswordConfirm = false;

/** Acessa os elementos que exibiram msg de sucesso ou erro */
let msgSuccess = document.querySelector('#msgSuccess')
let msgError = document.querySelector('#msgError')

/** Validações para o campo nome **/
inputName.addEventListener('keyup', () => {
    /** verifica se o campo nome possui no minimo 3 caracteres */
    if (inputName.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        /** Altera conteúdo da label com um alerta **/
        labelName.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        inputName.setAttribute('style', 'border-color: red')
        /** Validação continua false */
        validName = false;

     /** Caso o campo seja valido */
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Nome'
        inputName.setAttribute('style', 'border-color: green')

        /** Validação passa para true */
        validName = true;
    }
})

/** Validações para o campo usuário **/
inputUser.addEventListener('keyup', () => {
    /** verifica se o campo usuário possui no minimo 3 caracteres */
    if (inputUser.value.length <= 5) {
        labelUser.setAttribute('style', 'color: red')
        /** Altera conteúdo da label com um alerta **/
        labelUser.innerHTML = 'Usuário *Insira no minimo 6 caracteres'
        inputUser.setAttribute('style', 'border-color: red')
        /** Validação continua false */
        validUser = false;

     /** Caso o campo seja valido */
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'Usuário'
        inputUser.setAttribute('style', 'border-color: green')

        /** Validação passa para true */
        validUser = true;
    }
})

/** Validações para o campo usuário **/
inputPassword.addEventListener('keyup', () => {
    /** verifica se o campo usuário possui no minimo 3 caracteres */
    if (inputPassword.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        /** Altera conteúdo da label com um alerta **/
        labelPassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        inputPassword.setAttribute('style', 'border-color: red')
        /** Validação continua false */
        validPassword = false;

     /** Caso o campo seja valido */
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha'
        inputPassword.setAttribute('style', 'border-color: green')

        /** Validação passa para true */
        validPassword = true;
    }
})

inputConfirmPassword.addEventListener('keyup', () => {
    /** Se o valor digitado da senha for diferente do input de confirmação de senha */
    if(inputPassword.value != inputConfirmPassword.value){
        labelConfirmPassword.setAttribute('style', 'color: red')
        /** Altera conteúdo da label com um alerta **/
        labelConfirmPassword.innerHTML = 'Confirmar senha *As senhas não conferem!'
        inputConfirmPassword.setAttribute('style', 'border-color: red')
        validPasswordConfirm = false
    }
    else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirmar senha'
        inputConfirmPassword.setAttribute('style', 'border-color: green')

        /** Validação passa para true */
        validPasswordConfirm = true;
    }
})

/** Função para realizar o cadastro de usuários no LocalStorage */
function registerUser(){
    if (validName && validUser && validPassword && validPasswordConfirm){
        console.log("cadastrado!")
        let userList = JSON.parse(localStorage.getItem('userList') || '[]')
        
        userList.push(
        {
            nameRegistred: inputName.value,
            userRegistred: inputUser.value,
            passwordRegistred: inputPassword.value
        }
        )

        localStorage.setItem(userList, JSON.stringify(userList));

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong> Cadastrando usuário... </strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = '';

        setTimeout(()=>{
            window.location.href = '../tela-login/tela-login.html'
        }, 2000)
    }
    else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
      }
}



