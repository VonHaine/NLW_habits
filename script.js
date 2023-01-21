const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//Registrou na memória o evento de "click" e "mudança" e guarda na memória
button.addEventListener("click", add)
form.addEventListener("change", save)

//Executa a funcção quando ocorre os eventos
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  //Registra a data atual e renderiza os ícones conforme registrado pelo CSS pelo objeto
  if (dayExists) {
    alert("Dia já incluso!")
    return
  }

  nlwSetup.addDay(today)
}

//Transforma os dados em string para guardar no localstorage
function save() {
  console.log("nlwSetup.data")
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//Transforma as strings do localstorage em objeto novamente e salva os dados reistrados no navegador
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || []
nlwSetup.setData(data)
nlwSetup.load()
