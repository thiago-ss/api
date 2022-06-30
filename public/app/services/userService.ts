import { Validator } from '../utils/validator.js'

export class User {
  constructor(
    public name: String,
    public cpf: String,
    public birthDate: Date,
    public email: String,
    public password: String,
    public address: String,
    public number: String,
    public complement: String,
    public city: String,
    public state: String,
    public country: String,
    public zipCode: String
  ) {}
}
class UserService {
  getInputData() {
    let name = (document.getElementById('name') as HTMLInputElement).value
    let cpf = (document.getElementById('cpf') as HTMLInputElement).value
    let birthDate = new Date((document.getElementById('birthDate') as HTMLInputElement).value)
    let email = (document.getElementById('email') as HTMLInputElement).value
    let password = (document.getElementById('password') as HTMLInputElement).value
    let address = (document.getElementById('address') as HTMLInputElement).value
    let number = (document.getElementById('number') as HTMLInputElement).value
    let complement = (document.getElementById('complement') as HTMLInputElement).value
    let city = (document.getElementById('city') as HTMLInputElement).value
    let state = (document.getElementById('state') as HTMLInputElement).value
    let country = (document.getElementById('country') as HTMLInputElement).value
    let zipCode = (document.getElementById('zipCode') as HTMLInputElement).value
    let user = new User(
      name,
      cpf,
      birthDate,
      email,
      password,
      address,
      number,
      complement,
      city,
      state,
      country,
      zipCode
    )

    return user
  }
  validaUsuario(user: User) {

    if (user.name.length < 3) {
      alert('O nome precisa ter mais que 3 caracteres')

      return false
    }
    if (user.cpf.length < 11) {
      alert('O CPF precisa ter no minimo 11 digitos')

      return false
    }
    if (user.password.length < 6) {
      alert('A senha precisa ter no minimo 6 caracteres')

      return false
    }
    if (Validator.validaIdade(user.birthDate) == false) {
      alert('Sua idade precisa ser superior a 18 anos.')

      return false
    }

    return true
  }
  adicionaUsuario() {
    let user = this.getInputData()
    if (this.validaUsuario(user)) {
      fetch('http://localhost:4040/api/v1/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
    } else {
      alert('Nao foi possivel cadastrar usuario')
    }
  }
  listaUsuario() {
    const id = (document.getElementById('idSearch-2') as HTMLInputElement).value
    const page = (document.getElementById('pageSearch') as 
    HTMLInputElement).value

    if (id != '') {
      fetch('http://localhost:4040/api/v1/user/' + id)
        .then(res => res.json())
        .then(data => console.log(data))
    } else if (page != '') {
      fetch('http://localhost:4040/api/v1/user/?page=' + page)
        .then(res => res.json())
        .then(data => console.log(data))
    } else {
      fetch('http://localhost:4040/api/v1/user/')
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }
  atualizaUsuario() {
    const id = (document.getElementById('idSearch') as HTMLInputElement).value
    let user = this.getInputData();
    if(!Validator.validaNome(user.name)) {
      alert('Nome deve conter mais de 3 caracteres');
    } else if(!Validator.validaCpf(user.cpf)) {
      alert('CPF deve conter 11 digitos');
    } else if(!Validator.validaSenha(user.password)) {
      alert('Senha deve conter no minimo 6 caracteres');
    } else {
      fetch('http://localhost:4040/api/v1/user/' + id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8" 
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }

  deletaUsuario() {
    const id = (document.getElementById('idSearch-2') as HTMLInputElement).value
    fetch('http://localhost:4040/api/v1/user/' + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8" 
      }
    }) 
    alert('Usuario removido')
  }
}

export default UserService