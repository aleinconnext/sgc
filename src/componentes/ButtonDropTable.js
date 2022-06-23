import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { 
    BiDotsVerticalRounded,
    BiMapPin,
    BiPencil,
} from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

function ButtonDropTable(props) {
  const [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setId(props.id);
  },[]);

  function visualizarUMF(e) {
    alert(`Visualizando UMF ${props.id}`)
  }

  function gerenciarUMF(e) {
    // alert(`A UMF que será gerenciada é: ${props.id}`)
    navigate("/gerenciarumfs");
  }

  return (
    <>
        <Menu menuButton={
            <Link to="#"><BiDotsVerticalRounded color="#24af5c" size={20} class="icon" /></Link>}>
            <MenuItem onClick={visualizarUMF}><BsEye color="#24af5c" size={20} class="icon sp-5" />Visualizar</MenuItem>
            <MenuItem onClick={gerenciarUMF}><BiMapPin color="#24af5c" size={20} class="icon sp-5" />Gerenciar UMFs</MenuItem>
            {/* <MenuItem onClick={(e) => alert(`Visualizando UMF ${props.id}`)}><BsEye color="#24af5c" size={20} class="icon sp-5" /> Visualizar</MenuItem>
            <MenuItem onClick={(e) => alert(`A UMF que será gerenciada é: ${props.id}`)}><BiMapPin color="#24af5c" size={20} class="icon sp-5" />Gerenciar UMFs</MenuItem> */}
            <MenuItem><BiPencil color="#24af5c" size={20} class="icon sp-5" />Editar</MenuItem>
        </Menu>
    </>
  )
}

export default ButtonDropTable;