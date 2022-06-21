import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PulseLoader from "react-spinners/PulseLoader";
import { FiUser, FiUnlock } from "react-icons/fi";
import { useApp } from '../context/AppContext';
import  logins from '../data/dados';

const initialvalue = {
    cpf : '',
    senha : '',
}

function Login() {
  const navigate = useNavigate();
  const { modoescuro, setModoescuro, user, setUser, msg, setMsg  } = useApp();
  const [values, setValues] = useState(initialvalue);
  const [loading, setLoading] = useState(false);
 
  function onChange(ev){
    const {name, value} = ev.target;
    setValues({ ...values, [name]: value });
  } 
  
  function changeModo(){
    setModoescuro(!modoescuro)
  }

  async function loginUser(credentials) {
      // return fetch('http://localhost:8080/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(credentials)
      // })
      //   .then(data => data.json())
      setLoading(false);
      if (logins[0].username.replace(/[^a-z0-9]/gi,'') === credentials.username.replace(/[^a-z0-9]/gi,'') && logins[0].password === credentials.password){
          // navigate('/dashboard');
          window.location.href = "/dashboard";
      } else {
          Swal.fire({
              icon: 'error',
              title: '<span style="font-size: 18px;">Atenção</span>',
              html: '<span style="font-size: 16px;">Usuário ou senha inválidos!</span>',
          });
      }
      
  }

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const login = await setTimeout(() => {
      let username = values.cpf;  
      let password = values.senha;  
      const token =  loginUser({
        username,
        password
    });
    }, 2000);
    
  }

  return (
    <div id="root" className="h-100">
      <div className="fixed-background"></div>
      
      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row g-0 h-100">
          <div className="offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100">
            <div className="min-h-100 d-flex align-items-center">
              <div className="w-100 w-lg-75 w-xxl-50">
                <div>
                  <div className="mb-5">
                    <h1 className="display-3 text-white">Gestão de Concessões</h1>
                  </div>
                  <p className="h6 text-white lh-1-5 mb-5">
                     É uma das modalidades de gestão que, de forma onerosa, dá o direito à empresa de explorar sustentavelmente os produtos e serviços florestais, 
					 gerando arrecadação para o Estado e Municípios e trazendo benefícios principalmente para as populações tradicionais. Essa arrecadação gerada 
					 pela concessão florestal será gerida pelo Fundeflor.
                  </p>
                </div>
              </div>
            </div>
          </div>
      
          <div className="col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0">
            <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
              <div className="sw-lg-50 px-5">
                <div className="sh-11">
                    <div className="logo-sgc"></div>
                </div>
                <div className="mb-5">
                  <h2 className="cta-1 mb-0 text-primary">Bem-vindo(a),</h2>
                  <h2 className="cta-1 text-primary">Vamos começar!</h2>
                </div>
                <div className="mb-5">
                  <p className="h6">Por favor, use suas credenciais para fazer o login.</p>
                </div>
                <div>
                  <form id="loginForm" className="tooltip-end-bottom" onSubmit={onLogin}>
                    <div className="mb-3 filled form-group tooltip-end-top">
                      <FiUser size={20}/>
                      <input className="form-control" placeholder="CPF do usuário" name="cpf" onChange={onChange}/>
                    </div>
                    <div className="mb-3 filled form-group tooltip-end-top">
                      <FiUnlock size={20}/>
                      <input className="form-control pe-7" name="senha" type="password" placeholder="Sua senha" onChange={onChange}/>
                      <a className="text-small position-absolute t-3 e-3" href="Pages.Authentication.ForgotPassword.html">Esqueceu?</a>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary w-100">{loading ? <PulseLoader color={'#fff'} loading={true} size={5} /> : 'Entrar'}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
