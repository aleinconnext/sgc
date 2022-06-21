import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = (props) => {
    const [modoescuro, setModoescuro] = useState(false);
    const [msg, setMsg] = useState("Bem-vindo");

    const [user, setUser] = useState({
        logado: false,
        userid: 0,
        nome: "Andreza Reis",
        sobrenome: "",
        avatar: "",
        email: "",
        valido: 0,
        sexo: "",
        datanascimento: "",
        escolaorigem:"",
        plano: 0,
        cpf: "",
        telefone: "",
        cep: "",
        token: ""
    });

    return(
        <AppContext.Provider value={{ modoescuro, setModoescuro , user, setUser, msg, setMsg }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);