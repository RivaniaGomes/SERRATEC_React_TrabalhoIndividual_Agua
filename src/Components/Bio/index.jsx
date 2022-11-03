import './styles.css'
import { useState } from 'react'
import AddWatter from './../AddWater/index';
import Button from './../Button/index';

function Bio() {
    const [meta, setMeta] = useState('');
    const [ml, setMl] = useState('');
    const [copo, setCopo] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [gotas, setGotas] = useState(['']);
    const [historico, setHistorico] = useState([]);

    function incluirCopos() {
        if (ml != '' && ml != 0) {
            setCopo(copo + 1);
        } else {
            alert(`Preencha a quantidade de ml do seu copo!`);
        }
    };

    const criarGotas = () => {
        if (ml != 0 && ml != '') {
            setGotas([...gotas, '💧 ']);
        }
    };

    function gerarHistorico() {
        if (ml != '' && ml != 0) {
            let data = new Date().toString();
            setHistorico([...historico, data]);
        }
    };

    function funcoesInserir() {
        incluirCopos();
        criarGotas();
        gerarHistorico();
    };

    const conferirMeta = () => {
        if (copo != 0 && copo < meta) {
            setMensagem(`Você bebeu apenas ${copo} copos de água!`);
        } else if (meta < copo) {
            setMensagem(`Você bebeu ${copo} copos de água, META ATINGIDA!`);
        } else {
            setMensagem(`BEBA ÁGUA!`);
        }
    };

    function resetCopo() {
        setCopo(0);
    };

    function resetMl() {
        setMl('');
    };

    function resetMeta() {
        setMeta('');
    };

    function resetMensagem() {
        setMensagem(`A quantidade ideal de água consumida por kg pode variar entre 25 a 40 ml.`);
    };

    function resetGotas() {
        setGotas(['']);
    };

    function resetHistorico() {
        setHistorico(['']);
    };

    function funcoesReset() {
        resetCopo();
        resetMl();
        resetMeta();
        resetMensagem();
        resetGotas();
        resetHistorico();
    };

    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler livros',
            completed: true,
        },
    ]);

    const handleWatterAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: Math.random(10),
                completed: false,
            },
        ];
        setTasks(newTasks);
    };

    return (
        <>
            {/* <AddWatter handleWatterAddition={handleWatterAddition} /> */}
            <div className='bio container w-80 p-3 rounded'>
                <h2 className='titulo w-80 p-3 text-center text-body'>Prencha as informações abaixo:</h2>
                <div className='bio-ml-meta row align-items-center shadow-lg p-3 mb-5 rounded w-80 p-3'>
                    <div className='col-sm w-80 p-3 align-items-center'>
                        <h3 className='col-sm text-center text-black-50 sub-titulo w-80 p-3 h3'>Quantos ml tem o copo utilizado:</h3>
                        <input className='col-sm align-items-center w-80 p-3 text-center text-primary h5'
                            type='number'
                            placeholder='DIGITE QUANTOS ML'
                            value={ml}
                            min='0'
                            onChange={(e) => setMl(e.target.value)}
                        />
                    </div>
                    <div className='col-sm w-80 p-3 align-items-center'>
                        <h3 className='col-sm text-center text-black-50 sub-titulo w-80 p-3 h3'>Quantos copos pretende beber:</h3>
                        <input className='col-sm align-items-center w-80 p-3 text-center text-primary h5'
                            type='number'
                            placeholder='DIGITE SUA META'
                            value={meta}
                            min='0'
                            onChange={(e) => setMeta(e.target.value)}
                        />
                    </div>
                </div>
                <h2 className='titulo w-80 p-3 text-center text-body'>Acompanhe sua evolução:</h2>
                <div className='bio-acompanhe row align-items-center shadow-lg p-3 mb-5 rounded w-80 p-3'>
                    <div className='col-6-sm bio-evolucao w-80 p-3'>
                        <div className='col-sm w-80 p-3'>
                            <h3 className='align-items-stretch w-80 p-3 text-center text-black-50'>
                                Até o momento foram consumidos <span className='text-primary'>{ml * copo} </span>ml de água!
                            </h3>
                        </div>
                        <div className='col-sm w-80 p-3'>
                            <h3 className='align-items-stretch w-80 p-3 text-center text-black-50'>
                                Para atingir sua meta precisa consumir <span className='text-primary'> {ml * meta} </span>ml de água!
                            </h3>
                        </div>
                    </div>
                    <div className='col-sm bio-inserir align-items-center w-80 p-3'>
                        <div className='col-sm w-80 p-3'>
                            <p>
                                {gotas.map(criarGotas => { return '💧 ' })}
                            </p>
                            <p>
                                <Button onClick={funcoesInserir}>ADICIONE 1 COPO</Button>
                            </p>
                            <p>
                                <Button onClick={funcoesReset}>ZERE A CONTAGEM</Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container w-80 rounded'>
                <h2 className='titulo w-80 p-3 text-center text-body'>Verifique seu desempenho:</h2>
                <div className='bio-desempenho row align-items-center shadow-lg p-3 mb-5 rounded w-80 p-3'>
                    <div className='bio-desempenho column w-100'>
                        <div className='col-sm bio-retorno align-items-center w-80 p-3'>
                            <div className='col-sm w-80 p-3 text-center'>
                                <h3 className='text-black-50 h3'>
                                    {mensagem}
                                </h3>
                            </div>
                        </div>
                        <div className='col-sm bio-conferir align-items-center w-100 p3'>
                            <div className='col-sm w-80 p-3'>
                                <p>
                                    <Button onClick={conferirMeta}>CLIQUE E CONFIRA</Button>
                                </p>
                            </div>
                            <div className='col-sm w-80 p-3'>
                                <ul className='text-center text-secondary h4'>{historico.map(histo => <li key={histo}> {histo} </li>)}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bio;