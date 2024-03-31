import { useEffect, useState } from "react"

function App() {

  let [altura, setAltura] = useState(0);
  let [peso, setPeso] = useState(0);
  let [classificacaoIMC, setClassificacaoIMC] = useState(0);
  const imc = parseFloat(peso / (altura * altura))

  function alteraAltura(e) {
    setAltura(parseFloat(e.target.value))
  }
  function alteraPeso(e) {
    setPeso(parseFloat(e.target.value))
  }


useEffect( () => {
  retornaClassificacao()
}, [altura, peso])



  function retornaClassificacao() {

    
    if (imc === null) setClassificacaoIMC("");
    if (imc < 18.5) setClassificacaoIMC("magreza");
    if (imc >= 18.5 && imc < 25) setClassificacaoIMC("normal");
    if (imc >= 25 && imc < 30) setClassificacaoIMC("sobrepeso");
    if (imc >= 30 && imc < 40) setClassificacaoIMC("obesidade");
    if (imc >= 40) setClassificacaoIMC("obesidade grave");

  }




  return (
    <>
      
        <div className="container text-light text-center align-items-center pb-3">
          
          <div className="bg-dark col-lg-5 mx-auto p-5 mt-5 rounded-5">

          <h2 className="pt-2">Calculadora de IMC</h2>

          <div className="align-items-center pt-5 ">
            <div className="">
              <label className="p-2" for="altura">Altura</label>
              <input name="altura" type="number" placeholder="Digite sua altura" onChange={alteraAltura} />
            </div>

            <div className="pt-2">
              <label className="p-2" for="altura">Peso</label>
              <input className="" name="peso" type="number" placeholder="Digite seu peso" onChange={alteraPeso} />
            </div>
          </div>

          <p className="mt-3">{isNaN(imc) ? "Aguardando dados...": `Seu IMC é de ${imc.toFixed(2)} e é classificado como ${classificacaoIMC}.`}</p>
          </div>
        </div>
      
    </>
  )
}

export default App
