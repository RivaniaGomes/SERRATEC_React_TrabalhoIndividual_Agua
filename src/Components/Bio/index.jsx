import './styles.css'
import { useState } from 'react'

function Bio() {
    const [meta, setMeta] = useState("")
    const [ml, setMl] = useState("")
    const [copo, setCopo] = useState(0)
    const [mensagem, setMensagem] = useState("")

    function incluirCopos() {
        setCopo(copo + 1)
    }

    function funcoesInserir() {
        incluirCopos();
    }

    const conferirMeta = () => {
        if (copo < meta) {
            setMensagem(`Você bebeu apenas ${copo} copos de água!`)
        } else if (meta < copo) {
            setMensagem(`Você bebeu ${copo} copos de água, META ATINGIDA!`)
        } else {
            setMensagem(`BEBA ÁGUA!`)
        }
    };

    function resetCopo() {
        setCopo(copo - copo)
    }

    function resetMl() {
        setMl(ml == "")
    }

    function resetMeta() {
        setMeta(meta == "")
    }

    function resetMensagem() {
        setMensagem(`A quantidade ideal de água consumida por dia pode variar entre 25 a 40 ml.`)
    }


    function funcoesReset() {
        resetCopo();
        resetMl();
        resetMeta();
        resetMensagem();
    }

    return (
        <div className='bio container w-80 p-3'>
            <h2 className='titulo w-80 p-3 text-center'>Prenche as informações abaixo:</h2>
            <div className='bio-ml-meta row align-items-center shadow-lg p-3 mb-5 rounded w-80 p-3'>
                <div className='col-sm w-80 p-3 align-items-center'>
                    <h3 className='col-sm text-center sub-titulo w-80 p-3'>Quantos ml tem o copo utilizado:</h3>
                    <input className='col-sm align-items-center w-80 p-3 text-center'
                        type="number"
                        placeholder="DIGITE QUANTOS ML"
                        value={ml}
                        onChange={(e) => setMl(e.target.value)}
                    />
                </div>
                <div className='col-sm w-80 p-3 align-items-center'>
                    <h3 className='col-sm text-center sub-titulo w-80 p-3 text-center'>Quantos copos pretende beber:</h3>
                    <input className='col-sm align-items-center w-80 p-3 text-center'
                        type="number"
                        placeholder="DIGITE SUA META"
                        value={meta}
                        onChange={(e) => setMeta(e.target.value)}
                    />
                </div>
            </div>
            <h2 className='titulo w-80 p-3 text-center'>Acompanheu sua evolução:</h2>
            <div className='bio-acompanhe row align-items-center shadow-lg p-3 mb-5 rounded w-80 p-3'>
                <div className='col-6-sm bio-evolucao w-80 p-3'>
                    <div className='col-sm w-80 p-3'>
                        <h3 className='align-items-stretch w-80 p-3 text-center'>
                            Até o momento foi consumido {ml * copo}ml de água!
                        </h3>
                    </div>
                    <div className='col-sm w-80 p-3'>
                        <h3 className='align-items-stretch w-80 p-3 text-center'>
                            Para atingir sua meta precisa beber {ml * meta}ml de água!
                        </h3>
                    </div>
                </div>
                <div className='col-sm bio-inserir align-items-center w-80 p-3'>
                    <div className='col-sm w-80 p-3'>
                        <p>
                            <button className='btn btn-primary btn-lg btn-block text-white w-80 p-3 align-items-center text-center'onClick={funcoesInserir}>ADICIONE 1 COPO</button>
                        </p>
                        <p>
                            <button className='btn btn-primary btn-lg btn-block text-white w-80 p-3 align-items-center text-center'onClick={funcoesReset}>ZERE A CONTAGEM</button>
                        </p>
                    </div>
                </div>
            </div>
            <h2 className='titulo w-80 p-3 text-center '>Verifique seu desempenho:</h2>
            <div className='bio-desempenho column shadow-lg p-3 mb-5 rounded w-80 p-3'>
                <div className='col-sm bio-retorno align-items-center w-80 p-3'>
                    <div className='col-sm w-80 p-3 text-center'>
                        <h3>
                            {mensagem}
                        </h3>
                    </div>
                </div>
                <div className='col-sm bio-conferir align-items-center w-80 p-3'>
                    <div className='col-sm w-80 p-3'>
                        <p>
                            <button className='btn btn-primary btn-lg btn-block text-white w-80 p-3 text-center' onClick={conferirMeta}>CLIQUE E CONFIRA</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;