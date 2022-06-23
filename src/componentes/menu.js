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
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Menu() {
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

  return (
    <div id="nav" class="nav-container d-flex">
        <div class="nav-content d-flex">
          <div class="logo position-relative">
            <a href="#">
              <div class="img"></div>
            </a>
          </div>

          <div class="user-container d-flex">
            <a
              href="#"
              class="d-flex user position-relative"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="profile"
                alt="profile"
                src={require("../assets/img/profile/profile-9.jpg")}
              />
              <div class="name">{user.nome}</div>
            </a>
            <div class="dropdown-menu dropdown-menu-end user-menu wide">
              <div class="row mb-3 ms-0 me-0">
                <div class="col-12 ps-1 mb-2">
                  <div class="text-extra-small text-primary">SUA CONTA</div>
                </div>
                <div class="col-12 ps-1 pe-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Perfil do Usuário</a>
                    </li>
                    <li>
                      <a href="#">Segurança</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row mb-1 ms-0 me-0">
                <div class="col-12 p-1 mb-3 pt-3">
                  <div class="separator-light"></div>
                </div>
                <div class="col-6 ps-1 pe-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">
                        <i
                          data-cs-icon="help"
                          class="me-2"
                          data-cs-size="17"
                        ></i>
                        <span class="align-middle">Ajuda</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-cs-icon="document-full"
                          class="me-2"
                          data-cs-size="17"
                        ></i>
                        <span class="align-middle">Docs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 pe-1 ps-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">
                        <i
                          data-cs-icon="gear"
                          class="me-2"
                          data-cs-size="17"
                        ></i>
                        <span class="align-middle">Config</span>
                      </a>
                    </li>
                    <li>
                      <a style={{ cursor: "pointer" }} onClick={logout}>
                        <i
                          data-cs-icon="logout"
                          class="me-2"
                          data-cs-size="17"
                        ></i>
                        <span class="align-middle">Sair</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ul class="list-unstyled list-inline text-center menu-icons">
            <li class="list-inline-item">
              <a href="#" id="colorButton">
                <i data-cs-icon="light-on" class="light" data-cs-size="18"></i>
                <i data-cs-icon="light-off" class="dark" data-cs-size="18"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="#"
                data-bs-toggle="dropdown"
                data-bs-target="#notifications"
                aria-haspopup="true"
                aria-expanded="false"
                class="notification-button"
              >
                <div class="position-relative d-inline-flex">
                  <i data-cs-icon="bell" data-cs-size="18"></i>
                  <span class="position-absolute notification-dot rounded-xl"></span>
                </div>
              </a>
              <div
                class="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out"
                id="notifications"
              >
                <div class="scroll">
                  <ul class="list-unstyled border-last-none">
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-1.jpg"
                        class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div class="align-self-center">
                        <a href="#">Joisse Kaycee just sesnt a new comment!</a>
                      </div>
                    </li>
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-2.jpg"
                        class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div class="align-self-center">
                        <a href="#">New order received! It is total $147,20.</a>
                      </div>
                    </li>
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-3.jpg"
                        class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div class="align-self-center">
                        <a href="#">
                          3 items just added to wish list by a user!
                        </a>
                      </div>
                    </li>
                    <li class="pb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-6.jpg"
                        class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div class="align-self-center">
                        <a href="#">Kirby Peters just sent a new message!</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div class="menu-container flex-grow-1">
            <ul id="menu" class="menu">
              <li>
                <Link to="/modulos">
                  <BiChip color="#fff" size={20} class="icon" />
                  <span class="label">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="#" data-href="Apps.html">
                  <BiDesktop color="#fff" size={20} class="icon" />
                  <span class="label">Módulos</span>
                </Link>
                <ul id="apps">
                  <li>
                    <Link to="/gflorestas">
                      <span class="label">Gestão de Florestas Públicas</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <span class="label">Gestão de Licitações</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="label">Gestão de Concessionários</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="label">Gestão de Contratos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="label">Central de Comunicação</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="label">Central do Administrador</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mobile-buttons-container">
            <a
              href="#"
              id="scrollSpyButton"
              class="spy-button"
              data-bs-toggle="dropdown"
            >
              <i data-cs-icon="menu-dropdown"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end"
              id="scrollSpyDropdown"
            ></div>
            <a href="#" id="mobileMenuButton" class="menu-button">
              <i data-cs-icon="menu"></i>
            </a>
          </div>
        </div>
        <div class="nav-shadow"></div>
      </div>
  )
}

export default Menu;