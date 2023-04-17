const nameList = ["Aline", "Otavio", "Cleiton", "Gabriel", "Jean", "Guilherme", "Ana", "Caio"]

const nomeAux = nameList;

var num_seleciona = -1;

const botaofil = document.getElementById("Filtrar");
const botaoadd = document.getElementById("add");
const botaosel = document.getElementById("sel");
const botaorel = document.getElementById("rel");
const saida = document.getElementById("saida");
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");


this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {

        let listItems = document.createElement("li");

        if (num_seleciona == i){
            listItems.className = "alert alert-link";
        } else{
            listItems.className = "";
        }
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
  
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

botaofil.addEventListener("click", inputHandler);

function adicionarNome(){
    num_seleciona = 0;
    nome = searchField.value.toLowerCase(); //pega o nome do local de pesquisa
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){
            //adciona o nome ao final da lista
            nameList.push(nome);
            saida.innerHTML = "Nome adicionado " + nome;
        } else {
            saida.innerHTML = "nome ja adicionado anteriormente"
        }
    } else {
        saida.innerHTML = "Insira um nome valido"
    }
}

botaoadd.addEventListener("click", adicionarNome);


function removerNome(){
    
    nome = nameList[num_seleciona ];

    nameList.splice(num_seleciona , 1);
    saida.innerHTML = "Nome removido: " + nome;

    inputHandler();
    
}
botaorel.addEventListener("click", removerNome);
    
function seleciona(){
    saida.innerHTML = ""

    var aux = nameList[num_seleciona]

    if (nameList.length == num_seleciona){
        num_seleciona = 0;
    } else{
    num_seleciona += 1;
    }

    console.log(num_seleciona);

    inputHandler();

}

botaosel.addEventListener("click", seleciona)
