
// se fosse no js comum: (açucar sintático)
// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

class Usuario {
    public nome;
    public idade;
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo
    constructor(nome: string, idade: number, jogo: string) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `O jogo atual é ${this.jogo}`;
    }
    
}

const jogador = new Player('Lucas', 20, 'Fifa');
console.log(jogador.dizerOJogoAtual())