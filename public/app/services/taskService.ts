class Task {
    constructor(
        public description: String,
        public date: String,
        public user: String
    ) {}
}

export class TaskService {
    getTaskInputData() {
        let description = (document.getElementById("description") as HTMLInputElement).value
        let date = (document.getElementById("date") as HTMLInputElement).value
        let user = (document.getElementById("user") as HTMLInputElement).value

        return new Task(description, date, user)
    }

    validaDataTask(data: any) {
        let dataTask = new Date(data)
        let dataAtual = new Date()
        if(dataTask > dataAtual) {
            return true
        } else {
            return false
        }
    }

    adicionaTask() {
        let task = this.getTaskInputData()
        let validacao = this.validaDataTask(task.date)
        if(validacao) {
            console.log(JSON.stringify(task))

            fetch("http://localhost:4040/api/v1/task", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(task)
            })
            .then(res => res.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(e => alert(e))
        }
    }

    listaTask() {
        const id = (document.getElementById("idTaskSearch-2") as HTMLInputElement).value
        const page = (document.getElementById("pageSearch") as HTMLInputElement).value

        if(id != '') {
            fetch('http://localhost:4040/api/v1/task/' + id)
            .then(res => res.json())
            .then(data => console.log(data))
        } else if(page != '') {
            fetch('http://localhost:4040/api/v1/task?page=' + page)
            .then(res => res.json())
            .then(data => console.log(data))
        } else {
            fetch('http://localhost:4040/api/v1/task')
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    atualizaTask() {
        const id = (document.getElementById('idTaskSearch') as HTMLInputElement).value;
        let task = this.getTaskInputData()

        let resultado = false

        if(task.date != '') {
            resultado = this.validaDataTask(task.date)
        } else {
            resultado = true
        }

        if(resultado) {
            fetch('http://localhost:4040/api/v1/task/' + id, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }) 
            .then(res => res.json())
            .then(data => console.log(data))
        } else {
            alert('Erro ao atualizar task')
        }
    }

    deletaTask() {
        const id = (document.getElementById('idTaskSearch-2') as HTMLInputElement).value;
        fetch('http://localhost:4040/api/v1/task/' + id, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        alert('Task removida com sucesso')
    }
}