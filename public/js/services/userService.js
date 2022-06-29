import { Validator } from '../utils/validator.js'
class User {
  constructor(
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
  ) {
    this.name = name
    this.cpf = cpf
    this.birthDate = birthDate
    this.email = email
    this.password = password
    this.address = address
    this.number = number
    this.complement = complement
    this.city = city
    this.state = state
    this.country = country
    this.zipCode = zipCode
  }
}
class UserService {
  getInputData() {
    var name = document.getElementById('name').value
    var cpf = document.getElementById('cpf').value
    var birthDate = new Date(document.getElementById('birthDate').value)
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var address = document.getElementById('address').value
    var number = document.getElementById('number').value
    var complement = document.getElementById('complement').value
    var city = document.getElementById('city').value
    var state = document.getElementById('state').value
    var country = document.getElementById('country').value
    var zipCode = document.getElementById('zipCode').value
    var user = new User(
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
  validaUsuario(user) {
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
    var user = this.getInputData()
    if (this.validaUsuario(user)) {
      fetch('http://localhost:4040/api/v1/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((userJson) => {
          if (userJson.message) {
            alert(userJson.message || 'Erro desconhecido')
          } else if (userJson?._id) {
            localStorage.setItem('@project.user_id', userJson._id)
          }
        })
    } else {
      alert('Nao foi possivel cadastrar usuario')
    }
  }
  listaUsuario() {
    const id = document.getElementById('idSearch').value
    const page = document.getElementById('pageSearch').value
    if (id != '') {
      fetch('http://localhost:4040/api/v1/user/' + id)
        .then((res) => res.json())
        .then((userData) => {
          console.log(userData)
        })
    } else if (page != '') {
      fetch('http://localhost:4040/api/v1/user/?page=' + page)
        .then((res) => res.json())
        .then((userData) => {
          console.log(userData)
        })
    } else {
      fetch('http://localhost:4040/api/v1/user')
        .then((res) => res.json())
        .then((userData) => {
          console.clear()
          console.log(userData)
        })
    }
  }
}

export default UserService
