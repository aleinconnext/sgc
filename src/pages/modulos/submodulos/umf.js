import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useApp } from '../../../context/AppContext';
import Menu from "../../../componentes/menu";
import FilterComponent from "../../../componentes/FilterComponent";
import  { rsumf } from '../../../data/dados';
import ButtonDrop from '../../../componentes/ButtonDropTable';

import {
  BiSearchAlt,
  BiRepeat
} from "react-icons/bi";

import DataTable, { createTheme } from 'react-data-table-component';
import "../../../assets/css/datatable.css";

function Umf() {
  useEffect(() => {
    //console.log(rsflorestas);
  },[]);
  
  return (
    <div id="root">
      <Menu />
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title-container">
                <div className="row">
                  <div className="col-12 col-md-7">
                    <h1 className="mb-0 pb-0 display-4" id="title">Gestão de Florestas</h1>
                    <nav className="breadcrumb-container d-inline-block" aria-label="breadcrumb">
                      <ul className="breadcrumb pt-0">
                        <li className="breadcrumb-item"><a href="/modulos">Módulos</a></li>
                        <li className="breadcrumb-item"><a href="/gflorestas">Gestão de Florestas</a></li>
                        <li className="breadcrumb-item">Gerenciar Unidades de Manejo Florestal</li>
                      </ul>
                    </nav>
                  </div>

                  <div className="col-12 col-md-5 d-flex align-items-start justify-content-end">
                    <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start w-100 w-md-auto add-datatable">
                      <i data-cs-icon="plus"></i>
                      <span>Nova UMF</span>
                    </button>
                  </div>
                </div>
              </div>

              

              <div class="card mb-5">
                <div class="card-body">
                  <h4 class="card-title mb-4">Dados da floresta</h4>
                  <div class="heading"><b>Nome da área:</b> <span class="fw-normal">CONJUNTO DE GLEBAS MAMURU ARAPIUNS</span></div>
                  <div class="heading"><b>Área total:</b> <span class="fw-normal">127.477,48 ha</span></div>
                  <div class="heading"><b>Municípios abrangidos:</b> <span class="fw-normal">Aveiro, Juruti e Santarém.</span></div>
                  <br/>
                  <h4 class="card-title mb-4">UMFs cadastradas</h4>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">UMF</th>
                        <th scope="col">Status</th>
                        <th scope="col">Área Total (ha)	</th>
                        <th scope="col">Área Líquida (ha)</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        rsumf.map(item => (
                            <tr>
                              <th scope="row">{item.nmumf}</th>
                              <td>{item.status}</td>
                              <td>{item.areatotal}</td>
                              <td>{item.arealiquida}</td>
                              <td>{item.situacao == 0 ? <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" /> : <input class="form-check-input" type="checkbox" checked />}</td>
                              <td><ButtonDrop id={item.idumf} /></td>
                            </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <p className="mb-0 text-muted text-medium">Colored Strategies 2021</p>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                <ul className="breadcrumb pt-0 pe-0 mb-0 float-end">
                  <li className="breadcrumb-item mb-0 text-medium"><a href="#" className="btn-link">Review</a></li>
                  <li className="breadcrumb-item mb-0 text-medium"><a href="#" className="btn-link">Purchase</a></li>
                  <li className="breadcrumb-item mb-0 text-medium"><a href="#" className="btn-link">Docs</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Umf;