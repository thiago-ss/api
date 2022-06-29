export class Validator {
    static validaIdade(data) {
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
}
