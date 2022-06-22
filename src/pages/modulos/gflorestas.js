import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useApp } from '../../context/AppContext';
import Menu from "../../componentes/menu";
import  { rsflorestas } from '../../data/dados';

import DataTable, { createTheme } from 'react-data-table-component';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
  text: {
    primary: '#fff',
    secondary: '#24af5c',
  },
  background: {
    default: '#242424',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#727272',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

function Gflorestas() {
  useEffect(() => {
    //console.log(rsflorestas);
  },[]);

  const handleChange = (state) => {
    console.log(state.selectedRows[0].id);
  };

  const columns = [
    {
        name: 'Floresta/Gleba',
        selector: row => row.nome.toUpperCase(),
        sortable: true,
        grow: 2
    },
    {
        name: 'UFMs Ativas',
        selector: row => row.umfsativas,
        sortable: true,
    },
    {
        name: 'Área Total (ha)',
        selector: row => row.areatotal,
        sortable: true,
    },
    {
        name: 'Ação',
        allowOverflow: true,
        button: true,
        width: "160px",
        cell: (row) => (
          <div>
            <button class="btn btn-sm btn-icon btn-icon-only btn-outline-tertiary mb-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="cs-icon cs-icon-gear"><path d="M8.32233 3.75427C8.52487 1.45662 11.776 1.3967 11.898 3.68836C11.9675 4.99415 13.2898 5.76859 14.4394 5.17678C16.4568 4.13815 18.0312 7.02423 16.1709 8.35098C15.111 9.10697 15.0829 10.7051 16.1171 11.4225C17.932 12.6815 16.2552 15.6275 14.273 14.6626C13.1434 14.1128 11.7931 14.9365 11.6777 16.2457C11.4751 18.5434 8.22404 18.6033 8.10202 16.3116C8.03249 15.0059 6.71017 14.2314 5.56062 14.8232C3.54318 15.8619 1.96879 12.9758 3.82906 11.649C4.88905 10.893 4.91709 9.29487 3.88295 8.57749C2.06805 7.31848 3.74476 4.37247 5.72705 5.33737C6.85656 5.88718 8.20692 5.06347 8.32233 3.75427Z"></path><path d="M10 8C11.1046 8 12 8.89543 12 10V10C12 11.1046 11.1046 12 10 12V12C8.89543 12 8 11.1046 8 10V10C8 8.89543 8.89543 8 10 8V8Z"></path></svg>
            </button>
            <button class="btn btn-sm btn-icon btn-icon-only btn-outline-quaternary mb-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="cs-icon cs-icon-power"><path d="M16 5C17.2447 6.37932 18 8.19116 18 10.1755 18 14.4969 14.4183 18 10 18 5.58172 18 2 14.4969 2 10.1755 2 8.19116 2.75527 6.37932 4 5M10 2 10 8"></path></svg>
            </button>
            <button class="btn btn-sm btn-icon btn-icon-only btn-outline-warning mb-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="cs-icon cs-icon-trend-up"><path d="M17.8636 5L11.2453 11.6183C10.4771 12.3865 9.23606 12.401 8.45017 11.6508L8.27708 11.4856C7.49119 10.7354 6.25016 10.7498 5.48192 11.5181L2 15"></path><path d="M14 5H18V9"></path></svg>
            </button>

          </div>
        ),
    },
  ];

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
                        <li className="breadcrumb-item"><a href="/dashboard">Módulos</a></li>
                        <li className="breadcrumb-item"><a href="#">Gestão de Florestas</a></li>
                      </ul>
                    </nav>
                  </div>

                  <div className="col-12 col-md-5 d-flex align-items-start justify-content-end">
                    <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start w-100 w-md-auto add-datatable">
                      <i data-cs-icon="plus"></i>
                      <span>Nova Floresta</span>
                    </button>

                  </div>
                </div>
              </div>

              {/* <div class="card mb-5">
                <div class="card-body">
                  <p class="mb-0">
                    A javascript scrollbar plugin which hides native scrollbars, provides custom styleable overlay scrollbars. Also, webkit scrollbar
                    overrides.
                  </p>
                </div>
              </div> */}

              <div class="card mb-5">
                <div class="card-body">
                <DataTable
                  title="Florestas Cadastradas"
                  columns={columns}
                  data={rsflorestas}
                  paginationPerPage={15}
                  pagination
                  highlightOnHover
                  theme="solarized"
                  //selectableRows
                  //onSelectedRowsChange={handleChange}
                />
                </div>
              </div>

              <div className="data-table-boxed">
                <div className="row mb-2">
                  <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
                    <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                      <input className="form-control datatable-search" placeholder="Search" data-datatable="#datatableBoxed" />
                      <span className="search-magnifier-icon">
                        <i data-cs-icon="search"></i>
                      </span>
                      <span className="search-delete-icon d-none">
                        <i data-cs-icon="close"></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
                    <div className="d-inline-block me-0 me-sm-3 float-start float-md-none">
                      <button
                        className="btn btn-icon btn-icon-only btn-foreground-alternate shadow add-datatable"
                        data-bs-delay="0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add"
                        type="button"
                      >
                        <i data-cs-icon="plus"></i>
                      </button>

                      <button
                        className="btn btn-icon btn-icon-only btn-foreground-alternate shadow edit-datatable disabled"
                        data-bs-delay="0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                        type="button"
                      >
                        <i data-cs-icon="edit"></i>
                      </button>

                      <button
                        className="btn btn-icon btn-icon-only btn-foreground-alternate shadow disabled delete-datatable"
                        data-bs-delay="0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                        type="button"
                      >
                        <i data-cs-icon="bin"></i>
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        className="btn btn-icon btn-icon-only btn-foreground-alternate shadow datatable-print"
                        data-bs-delay="0"
                        data-datatable="#datatableBoxed"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Print"
                        type="button"
                      >
                        <i data-cs-icon="print"></i>
                      </button>

                      <div className="d-inline-block datatable-export" data-datatable="#datatableBoxed">
                        <button className="btn p-0" data-bs-toggle="dropdown" type="button" data-bs-offset="0,3">
                          <span
                            className="btn btn-icon btn-icon-only btn-foreground-alternate shadow dropdown"
                            data-bs-delay="0"
                            data-bs-placement="top"
                            data-bs-toggle="tooltip"
                            title="Export"
                          >
                            <i data-cs-icon="download"></i>
                          </span>
                        </button>
                        <div className="dropdown-menu shadow dropdown-menu-end">
                          <button className="dropdown-item export-copy" type="button">Copy</button>
                          <button className="dropdown-item export-excel" type="button">Excel</button>
                          <button className="dropdown-item export-cvs" type="button">Cvs</button>
                        </div>
                      </div>

                      <div className="dropdown-as-select d-inline-block datatable-length" data-datatable="#datatableBoxed" data-childSelector="span">
                        <button className="btn p-0 shadow" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,3">
                          <span
                            className="btn btn-foreground-alternate dropdown-toggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-delay="0"
                            title="Item Count"
                          >
                            15 Items
                          </span>
                        </button>
                        <div className="dropdown-menu shadow dropdown-menu-end">
                          <a className="dropdown-item" href="#">10 Items</a>
                          <a className="dropdown-item active" href="#">15 Items</a>
                          <a className="dropdown-item" href="#">20 Items</a>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Gflorestas;