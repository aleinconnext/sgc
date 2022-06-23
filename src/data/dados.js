const logins = [
    {
        username: "116.720.546-48",
        password: "123456"
    },
    {
        username: "700.391.932-09",
        password: "123456"
    }
]

const rsflorestas = [
    {
        id: 1,
        nome: "Conjunto Glebas Manamuru Arapiuns",
        umfsativas:5,
        areatotal: 150956.95,
        areatotaldispoconcessao: 253425.13,
        arealiquidadispconcessao: 234042.94,
        arealiquidaconsedida: 143409.09,
        municipios: [
            {
                id: 1,
                municipio: "Aveiro"
            },
            {
                id: 2,
                municipio: "Juruti"
            },
            {
                id: 3,
                municipio: "Santarém"
            },
        ],
        Categoria: [
            {
                idcategoria: 1,
                volumecomercial: 0.76,
                volumeinventario: 2.75724897700000,
                tiposespecie: 5
            },
            {
                idcategoria: 2,
                volumecomercial: 5.99,
                volumeinventario: 21.78341173000000,
                tiposespecie: 19
            },
            {
                idcategoria: 3,
                volumecomercial: 1.87,
                volumeinventario: 6.79712416600000,
                tiposespecie: 21
            },
            {
                idcategoria: 4,
                volumecomercial: 8.48,
                volumeinventario: 30.82037839000000,
                tiposespecie: 39
            },
            {
                idcategoria: 5,
                volumecomercial: 8.70,
                volumeinventario: 31.65586607000000,
                tiposespecie: 19
            },
        ],
        unidademanejo: [
            {
                idufm: 1,
                ufm: "UMF 1 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Juruti "
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Santarém "
                    },
                ]
            },
            {
                idufm: 1,
                ufm: "UMF 2 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Aveiro "
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Juruti  "
                    },
                    {
                        idmunicipio: 3,
                        municipio: "Santarém "
                    },
                ]
            },
            {
                idufm: 1,
                ufm: "UMF 3 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Aveiro"
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Santarém "
                    },
                ]
            },
        ],
    },
    {
        id: 2,
        nome: "Floresta Estadual do Paru",
        umfsativas:8,
        areatotal: 3527593.51,
        areatotaldispoconcessao: 253425.13,
        arealiquidadispconcessao: 234042.94,
        arealiquidaconsedida: 143409.09,
        municipios: [
            {
                id: 1,
                municipio: "Aveiro"
            },
            {
                id: 2,
                municipio: "Juruti"
            },
            {
                id: 3,
                municipio: "Santarém"
            },
        ],
        Categoria: [
            {
                idcategoria: 1,
                volumecomercial: 0.76,
                volumeinventario: 2.75724897700000,
                tiposespecie: 5
            },
            {
                idcategoria: 2,
                volumecomercial: 5.99,
                volumeinventario: 21.78341173000000,
                tiposespecie: 19
            },
            {
                idcategoria: 3,
                volumecomercial: 1.87,
                volumeinventario: 6.79712416600000,
                tiposespecie: 21
            },
            {
                idcategoria: 4,
                volumecomercial: 8.48,
                volumeinventario: 30.82037839000000,
                tiposespecie: 39
            },
            {
                idcategoria: 5,
                volumecomercial: 8.70,
                volumeinventario: 31.65586607000000,
                tiposespecie: 19
            },
        ],
        unidademanejo: [
            {
                idufm: 1,
                ufm: "UMF 1 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Juruti "
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Santarém "
                    },
                ]
            },
            {
                idufm: 1,
                ufm: "UMF 2 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Aveiro "
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Juruti  "
                    },
                    {
                        idmunicipio: 3,
                        municipio: "Santarém "
                    },
                ]
            },
            {
                idufm: 1,
                ufm: "UMF 3 - MAMURU",
                areatotal: 45721.33,
                arealiquida: 45721.33,
                status: "Concedido",
                class: 4,
                municipios: [
                    {
                        idmunicipio: 1,
                        municipio: "Aveiro"
                    },
                    {
                        idmunicipio: 2,
                        municipio: "Santarém "
                    },
                ]
            },
        ],
    }
]

const rsCategorias = [
    {
        idcategoria: 1,
        nmcategoria: "Categoria 1",
        volumecomercial: 0.76,
        volumeinventario: 2.75724897700000,
        especies: [
            {
                nomecientifico: "Cedrela odorata L.",
                nomepopular: "Cedro"
            },
            {
                nomecientifico: "Tabebuia serratifolia (Vahl) Nichols.",
                nomepopular: "Ipê"
            },
            {
                nomecientifico: "Tabebuia serratifolia (Vahl) Nichols.",
                nomepopular: "Ipê-roxo"
            },
            {
                nomecientifico: "Tabebuia sp",
                nomepopular: "Ipê amarelo"
            },
            {
                nomecientifico: "Tabebuia sp.",
                nomepopular: "Ipê-roxo"
            },
        ]
    },
]

const rsumf = [
    {
        idumf: 1,
        nmumf: "UMF 1 - MAMURU",
        status: "Concedido",
        areatotal: 45721.33,
        arealiquida: 43435.26,
        situacao: 1
    },
    {
        idumf: 2,
        nmumf: "UMF 2 - MAMURU",
        status: "Concedido",
        areatotal: 19817.71,
        arealiquida: 18826.82,
        situacao: 1
    },
    {
        idumf: 3,
        nmumf: "UMF 3 - MAMURU",
        status: "Concedido",
        areatotal: 85417.91,
        arealiquida: 81147.01,
        situacao: 1
    },
    {
        idumf: 4,
        nmumf: "UMF 4 - MAMURU",
        status: "Aguardando Concessão",
        areatotal: 48799.91,
        arealiquida: 43477.17,
        situacao: 1
    },
    {
        idumf: 5,
        nmumf: "UMF 5 - MAMURU",
        status: "Aguardando Concessão",
        areatotal: 53668.27,
        arealiquida: 47156.68,
        situacao: 1
    }
]

export { logins, rsflorestas, rsumf };