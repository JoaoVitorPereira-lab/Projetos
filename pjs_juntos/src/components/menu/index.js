import { useNavigate, Link } from 'react-router-dom';

import './index.scss'

export default function Index(props) {
    const navigate = useNavigate();

    function sairClick(){
        storage.remove('usuario-logado')
        navigate('/');
    }

    function verificarMenuSelecionado(menu){
        if (menu === props.selecionado)
            return 'selecionado';
        else
            return '';
    }

    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <div>Portifolio.me</div>
                </div>

                <div className='menu-items'>
                    <Link to='/admin' className={verificarMenuSelecionado('calculadora')}>
                        <img src="/assets/images/icon-home.svg" alt="calculadora" />
                        <div>Calculadora</div>
                    </Link>
                    <Link to='/admin/cadastrar' className={verificarMenuSelecionado('cadastrar')}>
                        <img src="/assets/images/icon-cadastrar.svg" alt="clima" />
                        <div>Clima</div>
                    </Link>
                    <Link to='/admin/consultar' className={verificarMenuSelecionado('consultar')}>
                        <img src="/assets/images/icon-consultar.svg" alt="clonewhats" />
                        <div>Clone Whatsapp</div>
                    </Link>

                </div>
            </div>

            <div className='menu-items'>
                <a onClick={sairClick}>
                    <img src="/assets/images/icon-sair.svg" alt="consultar" />
                    <div>Sair</div>
                </a>
            </div>
        </nav>
    )
}