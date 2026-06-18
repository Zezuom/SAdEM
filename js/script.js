const botaoMenu = document.getElementById("botaoMenu")
const menuPrincipal = document.getElementById("menuPrincipal")
const formContato = document.getElementById("formContato")
const retornoFormulario = document.getElementById("retornoFormulario")

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener("click", () => {
    const menuAberto = menuPrincipal.classList.toggle("menu-aberto")
    botaoMenu.setAttribute("aria-expanded", String(menuAberto))
  })
}


const botoesSubaba = document.querySelectorAll("[data-subaba]")
const paineisSubaba = document.querySelectorAll("[data-painel]")

function ativarSubaba(nomeSubaba) {
  botoesSubaba.forEach((botao) => {
    const ativo = botao.dataset.subaba === nomeSubaba
    botao.classList.toggle("ativa", ativo)
    botao.setAttribute("aria-selected", String(ativo))
  })

  paineisSubaba.forEach((painel) => {
    const ativo = painel.dataset.painel === nomeSubaba
    painel.classList.toggle("ativo", ativo)
    painel.hidden = !ativo
  })
}

botoesSubaba.forEach((botao) => {
  botao.addEventListener("click", () => {
    ativarSubaba(botao.dataset.subaba)
  })
})

if (window.location.hash === "#eventos" || window.location.hash === "#eventos-sadem") {
  ativarSubaba("eventos")
}

const resumos = document.querySelectorAll(".resumo-nucleo")
const botoesExpandir = document.querySelectorAll("[data-expandir]")
const secaoDetalhes = document.getElementById("secaoDetalhesNucleos")
const detalhes = document.querySelectorAll(".detalhe-nucleo")
const botoesProximo = document.querySelectorAll("[data-proximo]")

function ativarResumo(idNucleo) {
  resumos.forEach((resumo) => {
    const ativo = resumo.dataset.resumo === idNucleo
    resumo.classList.toggle("ativo", ativo)
  })
}

function ativarDetalhe(idNucleo, rolarAteDetalhe = false) {
  if (!secaoDetalhes) {
    return
  }

  secaoDetalhes.hidden = false

  detalhes.forEach((detalhe) => {
    const ativo = detalhe.dataset.detalhe === idNucleo
    detalhe.classList.toggle("ativo", ativo)
    detalhe.hidden = !ativo
  })

  ativarResumo(idNucleo)

  if (rolarAteDetalhe) {
    secaoDetalhes.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

resumos.forEach((resumo) => {
  resumo.addEventListener("click", (evento) => {
    if (evento.target.closest("button")) {
      return
    }

    ativarResumo(resumo.dataset.resumo)
  })
})

botoesExpandir.forEach((botao) => {
  botao.addEventListener("click", () => {
    ativarDetalhe(botao.dataset.expandir, true)
  })
})

botoesProximo.forEach((botao) => {
  botao.addEventListener("click", () => {
    ativarDetalhe(botao.dataset.proximo, true)
  })
})

if (formContato && retornoFormulario) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault()
    retornoFormulario.textContent = "Formulário simulado. Para receber mensagens reais, conecte esta página a um serviço de formulário ou backend."
  })
}
