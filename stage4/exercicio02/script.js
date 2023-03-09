function Estudante(nome, notaP1, notaP2) {
    this.nome = nome;
    this.notaP1 = notaP1;
    this.notaP2 = notaP2;
}

const estudante1 = new Estudante("dudu", 6, 4);
const estudante2 = new Estudante("giullia", 8, 8);
const estudante3 = new Estudante("rian", 9, 8);

const alunos = [estudante1, estudante2, estudante3];

alunos.forEach(x => { //nao consigo acessar os valores dos objetos :(
    let mediaFinal = (x.notaP1 + x.notaP2)/2;
    if(mediaFinal < 7) {
        alert(`Não foi dessa vez, ${x.nome} =(\nNão desista!`);
    } else {
        alert(`Parabéns, ${x.nome}, você foi aprovado(a) no concurso! =)`);
    }
});