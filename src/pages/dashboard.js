import React, { useEffect } from "react";
import {
  BiHive,
  BiLayer,
  BiBuildings,
  BiCctv,
  BiCoinStack,
  BiNote,
  BiReceipt,
  BiDirections,
  BiChat,
  BiUserPlus,
  BiDesktop,
  BiChip,
} from "react-icons/bi";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Dashboard() {
  const { modoescuro, setModoescuro, user, setUser, msg, setMsg } = useApp();

  function dadosLogin() {
    setUser({
      logado: true,
      nome: "Gabryella Silva Gonçalves",
    });
    setMsg("você está logado!");
  }

  function logout() {
    setUser({
      logado: false,
      nome: "",
    });
    setMsg("você não está logado!");
    window.location.href = "/";
  }

  useEffect(() => {
    <script src="%PUBLIC_URL%/assets/font/CS-Line/csicons.min.js"></script>;
    dadosLogin();
    if (user.logado === false) {
      //window.location.href = "/";
    } else {
      dadosLogin();
    }
  }, []);

  return (
    <div id="root">
      <Menu />
      <main>
        <div class="container">
          <div class="page-title-container">
            <div class="row">
              <div class="col-12 col-md-7">
                <h1 class="mb-0 pb-0 display-4" id="title">
                  Módulos
                </h1>
                <nav
                  class="breadcrumb-container d-inline-block"
                  aria-label="breadcrumb"
                >
                  <ul class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                      <a href="Dashboards.Default.html">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="Pages.html">Módulos</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body min-h-100">
              Painel de módulos liberados no sistema.
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2">
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiHive color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      // to="/gflorestas"
                      style={{cursor: "pointer"}}
                      onClick={() => window.location.href = "/gflorestas"}
                      class="heading stretched-a d-block"
                    >
                      Gestão de Florestas Públicas
                    </a>
                    <div class="text-muted">
                      Login form with email and password.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiLayer color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.Login.html"
                      class="heading stretched-link d-block"
                    >
                      Gestão de Licitações
                    </a>
                    <div class="text-muted">
                      Register form with email, password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiBuildings color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ForgotPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Gestão de Concessionários
                    </a>
                    <div class="text-muted">
                      Password recovery form with an email field.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiCctv color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Monitoramento de Contratos
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiCoinStack color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Arrecadação Consolidada
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiNote color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Relatórios
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiReceipt color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Gestão de Contratos
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiDirections color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Visitas de Campo
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiChat color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Central de Comunicação
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card min-h-100">
                <div class="card-body row gx-4">
                  <div class="col-auto">
                    <BiUserPlus color="#24af5c" size={25} />
                  </div>
                  <div class="col">
                    <a
                      href="Pages.Authentication.ResetPassword.html"
                      class="heading stretched-link d-block"
                    >
                      Central do Administrador
                    </a>
                    <div class="text-muted">
                      Password reset form with password and password
                      confirmation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="footer-content">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p class="mb-0 text-muted text-medium">
                  Sistema de Gestão de Concessões - IDEFLOR BIO
                </p>
              </div>
              <div class="col-sm-6 d-none d-sm-block">
                <ul class="breadcrumb pt-0 pe-0 mb-0 float-end">
                  <li class="breadcrumb-item mb-0 text-medium">
                    <a href="#" class="btn-link">
                      Desenvolvimento: Educa Tecnologia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
