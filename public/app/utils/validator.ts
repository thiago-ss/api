import { User } from '../services/userService';

export class Validator {
    static validaIdade(data: Date) {
        let dataAtual = new Date();
        let resultado = false;
        let idade = dataAtual.getFullYear() - data.getFullYear();
        if (new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate()) <
            new Date(dataAtual.getFullYear(), data.getMonth(), data.getDate())) {
            idade--;
        }
        if (idade >= 18) {
            resultado = true;
        }
        return resultado;
    }

    static validaNome(nome: String) {
        if(nome.length < 3) {
            throw new Error("Nome deve ter mais de 3 caracteres");
        } else {
            return true;
        }
    }

    static validaCpf(cpf: String) {
        if(cpf.length < 11) {
            throw new Error("CPF deve ter 11 digitos");
        } else {
            return true;
        }
    }

    static validaSenha(senha: String) {
        if(senha.length < 6) {
            throw new Error("Senha deve ter 6 caracteres");
        } else {
            return true;
        }
    }
      static validaEmail(email: string) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      }
}
