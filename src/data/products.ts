export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    manufacturer: string;
    description: string;
}

export const products: Product[] = [
    // Volkswagen
    {
        id: 1,
        name: "Porta Dianteira e traseira Gol 1995 A 2008",
        price: 1358.00,
        image: "/assets/products-img/portas-1995-2008.png",
        manufacturer: "Volkswagen",
        description: "Portas Dianteiras | Traseiras do Gol ano 1995 A Gol ano 2008"
    },
    {
        id: 2,
        name: "Porta Dianteira e traseira Gol G5, G6, G7, G8, 09, 10, 11, 12, 13, 14, 15",
        price: 1509.00,
        image: "/assets/products-img/portas-gol-novo.png",
        manufacturer: "Volkswagen",
        description: "Portas Dianteiras | Traseiras do Gol G5, G6, G6, G7, G8, G9, G10, G11, G12, G13, G14 e G15"
    },
    {
        id: 3,
        name: "Capô Vw Gol G3, G4 (Usado)",
        price: 500.00,
        image: "/assets/products-img/capo-gol-g3.png",
        manufacturer: "Volkswagen",
        description: "Capô Volkswagen Gol G3, G4 (Usado)"
    },
    {
        id: 4,
        name: "Motor Parcial Vw Gol 1.0 16v 2001 (Usado)",
        price: 4500.00,
        image: "/assets/products-img/motor-gol1.0.png",
        manufacturer: "Volkswagen",
        description: "Motor Volkswagen Gol 1.0 16v ano 2001 (Usado)"
    },
    {
        id: 5,
        name: "Parachoque Dianteiro Voyage | Gol G5 (Usado)",
        price: 500.00,
        image: "/assets/products-img/parachoque-dianteiro-voyage-g5.jpg",
        manufacturer: "Volkswagen",
        description: "Parachoque Dianteiro do Voyage e Gol G5 (Usado)"
    },
    {
        id: 6,
        name: "Câmbio Manual | Caixa de Marcha Vw Gol 1.0 2011",
        price: 1780.00,
        image: "/assets/products-img/cambio-manual-gol-2011.jpg",
        manufacturer: "Volkswagen",
        description: "Câmbio Manual e Caixa de Marcha Volkswagen Gol 1.0 ano 2011"
    },
    {
        id: 7,
        name: "Motor de Partida | Arranque Vw Touareg 4.2 2014",
        price: 1315.99,
        image: "/assets/products-img/motor-partida-touareg-2014.jpg",
        manufacturer: "Volkswagen",
        description: "Motor de Partida e Arranque Volkswagen Touareg 4.2 ano 2014",
    },
    {
        id: 8,
        name: "Parachoque Traseiro Vw Touareg 4.2 2014",
        price: 888.99,
        image: "/assets/products-img/parachoque-traseiro-touareg-2014.jpg",
        manufacturer: "Volkswagen",
        description: "Parachoque Traseiro Volkswagen Touareg 4.2 ano 2014",
    },
    {
        id: 9,
        name: "Diferencial Dianteiro Vw Amarok 2.0 2012",
        price: 1332.99,
        image: "/assets/products-img/diferencial-dianteiro-amarok-2012.jpg",
        manufacturer: "Volkswagen",
        description: "Diferencial Dianteiro Volkswagen Amarok 2.0 ano 2012",
    },
    {
        id: 10,
        name: "Módulo de Injeção Vw Jetta 2.0 2016",
        price: 2498.00,
        image: "/assets/products-img/modulo-injecao-jetta-2016.jpg",
        manufacturer: "Volkswagen",
        description: "Módulo de Injeção Volkswagen Jetta 2.0 ano 2016",
    },

    // Chevrolet
    {
        id: 11,
        name: "Módulo de Injeção GM Tracker 1.8 2015",
        price: 570.00,
        image: "/assets/products-img/modulo-injecao-tracker-2015.jpg",
        manufacturer: "Chevrolet",
        description: "Módulo de Injeção Chevrolet Tracker 1.8 ano 2015",
    },
    {
        id: 12,
        name: "Kit Multimídia | Rádio GM ONIX 1.0 2020",
        price: 720.00,
        image: "/assets/products-img/multimidia-onix-2020.jpg",
        manufacturer: "Chevrolet",
        description: "Kit Multímidia e Rádio Chevrolet Onix 1.0 ano 2020",
    },
    {
        id: 13,
        name: "Painel de Instrumentos GM SPIN 1.8 2020",
        price: 556.70,
        image: "/assets/products-img/painel-instrumento-spin-2020.jpg",
        manufacturer: "Chevrolet",
        description: "Painel de Instrumentos Chevrolet Spin 1.8 ano 2020",
    },
    {
        id: 14,
        name: "Jogo de banco GM Onix",
        price: 750.00,
        image: "/assets/products-img/banco-completo-onix.jpg",
        manufacturer: "Chevrolet",
        description: "Jogo de banco completo Chevrolet Onix"
    },
    {
        id: 15,
        name: "Porta Traseira Esq GM Astra 2.0 2004",
        price: 400.00,
        image: "/assets/products-img/porta-traseira-astra.jpg",
        manufacturer: "Chevrolet",
        description: "Porta Traseira - Esquerda Chevrolet Astra 2.0 ano 2004"
    },
    {
        id: 16,
        name: "Módulo de Injeção GM Onix 1.0 2022",
        price: 550.00,
        image: "/assets/products-img/modulo-injecao-onix.jpg",
        manufacturer: "Chevrolet",
        description: "Módulo de Injeção Chevrolet Onix 1.0 ano 2022"
    },
    {
        id: 17,
        name: "Parachoque Traseiro GM Sonic 1.6 2012",
        price: 732.05,
        image: "/assets/products-img/parachoque-traseiro-sonic.jpg",
        manufacturer: "Chevrolet",
        description: "Parachoque Traseiro Chevrolet Sonic 1.6 ano 2012"
    },
    {
        id: 18,
        name: "Jogo de Roda Aro 17 GM Captiva 2.4 2010",
        price: 1385.00,
        image: "/assets/products-img/jogo-de-roda-captiva.jpg",
        manufacturer: "Chevrolet",
        description: "Jogo de Roda Aro 17 Chevrolet Captiva 2.4 ano 2010"
    },
    {
        id: 19,
        name: "Compressor Ar Condicionado GM Spin 1.8 2023",
        price: 849.05,
        image: "/assets/products-img/compresso-ar-spin.jpg",
        manufacturer: "Chevrolet",
        description: "Compressor de Ar Condicionado Chevrolet Spin 1.8 ano 2023"
    },
    {
        id: 20,
        name: "Módulo Eletronico GM S10 2.8 2022",
        price: 603.05,
        image: "/assets/products-img/modulo-eletronico-s10.jpg",
        manufacturer: "Chevrolet",
        description: "Módulo Eletronico Chevrolet S10 2.8 ano 2022"
    },

    // Fiat
    {
        id: 21,
        name: "Chave de Seta Fiat 500 1.4 2014",
        price: 528.05,
        image: "/assets/products-img/chave-de-seta-fiat500.jpg",
        manufacturer: "Fiat",
        description: "Chave de Seta Fiat 500 1.4 ano 2014"
    },
    {
        id: 22,
        name: "Módulo Tração Fiat Toro 2.0 2019",
        price: 943.05,
        image: "/assets/products-img/modulo-tracao-toro.jpg",
        manufacturer: "Fiat",
        description: "Módulo de Tração Fiat Toro 2.0 ano 2019"
    },
    {
        id: 23,
        name: "Porta Dianteira Dir Fiat Mobi 1.0 2017",
        price: 1044.05,
        image: "/assets/products-img/porta-dianteira-mobi.jpg",
        manufacturer: "Fiat",
        description: "Porta Dianteira Direita Fiat Mobi 1.0 ano 2017"
    },
    {
        id: 24,
        name: "Tampa Traseira Fiat Siena 1.0 2010",
        price: 420.00,
        image: "/assets/products-img/tampa-traseira-sienna.jpg",
        manufacturer: "Fiat",
        description: "Tampa Traseira Fiat Siena 1.0 ano 2010"
    },
    {
        id: 25,
        name: "Câmbio Manual | Caixa de Marcha Fiat Uno 1.0 2008",
        price: 1919.29,
        image: "/assets/products-img/cambio-manuel-uno.jpg",
        manufacturer: "Fiat",
        description: "Câmbio Manual e Caixa de Marcha Fiat Uno 1.0 ano 2008"
    },
    {
        id: 26,
        name: "Módulo de Injeção Fiat Uno 1.0 2016",
        price: 556.70,
        image: "/assets/products-img/modulo-injecao-uno.jpg",
        manufacturer: "Fiat",
        description: "Módulo de Injeção Fiat Uno 1.0 ano 2016"
    },
    {
        id: 27,
        name: "Motor de Partida | Arranque Fiat Fastback 1.3 2023",
        price: 850.00,
        image: "/assets/products-img/motor-de-partida-fastback.jpg",
        manufacturer: "Fiat",
        description: "Motor de Partida e Arranque Fiat Fastback 1.3 ano 2023"
    },
    {
        id: 28,
        name: "Motor Parcial Fiat Toro 1.8 2020",
        price: 9754.05,
        image: "/assets/products-img/motor-parcial-toro.jpg",
        manufacturer: "Fiat",
        description: "Motor Parcial Fiat Toro 1.8 ano 2020"
    },
    {
        id: 29,
        name: "Módulo Bluetooth Fiat Linea 1.9 2009",
        price: 652.05,
        image: "/assets/products-img/modulo-bluetooth-linea.jpg",
        manufacturer: "Fiat",
        description: "Módulo Bluetooth Fiat Linea 1.9 ano 2009"
    },
    {
        id: 30,
        name: "Jogo de Banco Couro Fiat Punto 1.6 2016",
        price: 1235.05,
        image: "/assets/products-img/banco-completo-punto.jpg",
        manufacturer: "Fiat",
        description: "Jogo de banco completo Fiat Punto 1.6 ano 2016"
    },



    // Ford
    {
        id: 31,
        name: "Tampa Traseira Ford Fiesta Hatch 1.6L 2009",
        price: 800.00,
        image: "/assets/products-img/tampa-traseira-fiesta.jpg",
        manufacturer: "Ford",
        description: "Tampa Traseira Ford Fiesta Hatcj 1.6 ano 2009"
    },
    {
        id: 32,
        name: "Módulo de Injeção Ford Ranger 2.3 2012",
        price: 972.05,
        image: "/assets/products-img/modulo-injecao-ranger.jpg",
        manufacturer: "Ford",
        description: "Módulo de Injeção Ford Ranger 2.3 ano 2012"
    },
    {
        id: 33,
        name: "CAPO FORD FIESTA 1.6 2011",
        price: 767.05,
        image: "/assets/products-img/capo-fiesta.jpg",
        manufacturer: "Ford",
        description: "Capô Ford Fiesta 1.6 ano 2011"
    },
    {
        id: 34,
        name: "Diferencial Traseiro Ford Edge 3.5 2013",
        price: 1413.05,
        image: "/assets/products-img/diferencial-traseiro-ford-edge.jpg",
        manufacturer: "Ford",
        description: "Diferencial Traseiro Ford Edge 3.5 ano 2013"
    },
    {
        id: 35,
        name: "Porta Dianteira Dir Ford ECOSPORT 1.6 2009",
        price: 782.05,
        image: "/assets/products-img/porta-dianteira-ecosport.jpg",
        manufacturer: "Ford",
        description: "Porta Dianteira Direita Ford EcoSport 1.6 ano 2009"
    },
    {
        id: 36,
        name: "Caixa de Transferência Ford Fusion 2.0 2015",
        price: 2834.05,
        image: "/assets/products-img/caixa-transferencia-fusion.jpg",
        manufacturer: "Ford",
        description: "Caixa de Transferência Ford Fusion 2.0 ano 2015"
    },
    {
        id: 37,
        name: "Câmbio Manual | Caixa de Marcha Ford Fiesta 1.0 2004",
        price: 1077.05,
        image: "/assets/products-img/cambio-manual-fiesta.jpg",
        manufacturer: "Ford",
        description: "Câmbio Manual e Caixa de Marcha Ford Fiesta 1.0 ano 2004"
    },
    {
        id: 38,
        name: "Jogo de Banco Tecido Ford Ka 1.0 2019",
        price: 1033.05,
        image: "/assets/products-img/banco-completo-fordka.jpg",
        manufacturer: "Ford",
        description: "Jogo de Banco Completo Tecido Ford Ka 1.0 ano 2019"
    },
    {
        id: 39,
        name: "Motor Completo Ford Ka 1.0 2000",
        price: 6789.05,
        image: "/assets/products-img/motor-fordka.jpg",
        manufacturer: "Ford",
        description: "Motor Completo Ford Ka 1.0 ano 2000"
    },
    {
        id: 40,
        name: "Jogo de Roda Aro 16 Ford Focus 2.0 2013",
        price: 1784.05,
        image: "/assets/products-img/jogo-roda-focus.jpg",
        manufacturer: "Ford",
        description: "Jogo de Roda Aro 16 Ford Focus 2.0 ano 2013"
    },



    // Toyota
    {
        id: 41,
        name: "Alternador Toyota Hilux 2.7 2018",
        price: 933.05,
        image: "/assets/products-img/alternador-hilux.jpg",
        manufacturer: "Toyota",
        description: "Alternador Toyota Hilux 2.7 ano 2018"
    },
    {
        id: 42,
        name: "Caixa de Transferência Toyota Hilux 3.0 2012",
        price: 2631.05,
        image: "/assets/products-img/caixa-transferencia-hilux.jpg",
        manufacturer: "Toyota",
        description: "Caixa de Transferência Toyota Hilux 3.0 ano 2012"
    },
    {
        id: 43,
        name: "Câmbio Manual | Caixa de Marcha Toyota Etios 1.3 2013",
        price: 2300.00,
        image: "/assets/products-img/cambio-manual-etios.jpg",
        manufacturer: "Toyota",
        description: "Câmbio Manual e Caixa de Marcha Toyota Etios 1.3 ano 2013"
    },
    {
        id: 44,
        name: "Motor Completo Toyota Etios 1.3 2013",
        price: 8590.00,
        image: "/assets/products-img/motor-etios.jpg",
        manufacturer: "Toyota",
        description: "Motor Completo Toyota Etios 1.3 ano 2013"
    },
    {
        id: 45,
        name: "Tampa Traseira Toyota Corolla 2.0 2015",
        price: 1260.00,
        image: "/assets/products-img/tampa-traseira-corolla.jpg",
        manufacturer: "Toyota",
        description: "Tampa Traseira Toyota Corolla 2.0 ano 2015"
    },
    {
        id: 46,
        name: "Porta Traseira Dir Toyota Hilux 2.7 2013",
        price: 916.05,
        image: "/assets/products-img/porta-traseira-hilux.jpg",
        manufacturer: "Toyota",
        description: "Porta Traseira Direita Toyota Hilux 2.7 ano 2013"
    },
    {
        id: 47,
        name: "Módulo de Injeção Toyota Corolla 1.8 2011",
        price: 1115.05,
        image: "/assets/products-img/modulo-injecao-corolla.jpg",
        manufacturer: "Toyota",
        description: "Módulo de Injeção Toyota Corolla 1.8 ano 2011"
    },
    {
        id: 48,
        name: "Jogo de Roda Aro 16 Toyota Hilux 2.7 2013",
        price: 2548.05,
        image: "/assets/products-img/jogo-de-roda-hilux.jpg",
        manufacturer: "Toyota",
        description: "Jogo de Roda Aro 16 Toyota Hilux 2.7 ano 2013"
    },
    {
        id: 49,
        name: "Chicote do Motor Elétrico Toyota Corolla 1.8 2022",
        price: 2267.05,
        image: "/assets/products-img/chicote-eletrico-corolla.jpg",
        manufacturer: "Toyota",
        description: "Chicote do Motor Elétrico Toyota Corolla 1.8 ano 2022"
    },
    {
        id: 50,
        name: "Lanterna Esq Toyota Corolla 1.8 2013",
        price: 519.00,
        image: "/assets/products-img/farol-corolla.jpg",
        manufacturer: "Toyota",
        description: "Lanterna Esquerda Toyota Corolla 1.8 ano 2013"
    },
    // Honda
    {
        id: 51,
        name: "Porta Dianteira Dir Honda City 1.5 2015",
        price: 758.05,
        image: "/assets/products-img/porta-dianteira-city.jpg",
        manufacturer: "Honda",
        description: "Porta Dianteira Direita Honda City 1.5 ano 2015"
    },
    {
        id: 52,
        name: "Capô Honda Civic 1.8 2007",
        price: 753.05,
        image: "/assets/products-img/capo-civic.jpg",
        manufacturer: "Honda",
        description: "Capô Honda Civic 1.8 ano 2007"
    },
    {
        id: 53,
        name: "Jogo de Banco Tecido Honda Civic 1.8 2010",
        price: 889.90,
        image: "/assets/products-img/banco-completo-civic.jpg",
        manufacturer: "Honda",
        description: "Jogo de Banco de Tecido Honda Civic 1.8 ano 2010"
    },
    {
        id: 54,
        name: "Bomba Combustível | Honda Hornet 600 2010",
        price: 1057.05,
        image: "/assets/products-img/bomba-combustivel-hornet.jpg",
        manufacturer: "Honda",
        description: "Bomba de Combustível Motocicleta Hornet 600 ano 2010"
    },
    {
        id: 55,
        name: "Diferencial Dianteiro Honda CR-V 2.0 2010",
        price: 2098.05,
        image: "/assets/products-img/diferencial-dianteiro-crv.jpg",
        manufacturer: "Honda",
        description: "Diferencial Dianteiro Honda CR-V 2.0 ano 2010"
    },
    {
        id: 56,
        name: "Kit Multimídia | Rádio Honda Fit 1.5 2018",
        price: 719.05,
        image: "/assets/products-img/multimidia-hondafit.jpg",
        manufacturer: "Honda",
        description: "Kit Multimídia e Rádio Honda Fit 1.5 ano 2018"
    },
    {
        id: 57,
        name: "Câmbio Automático | Caixa de Marcha Honda Fit 1.5 2011",
        price: 2523.05,
        image: "/assets/products-img/cambio-automatico-fit.jpg",
        manufacturer: "Honda",
        description: "Câmbio Automático e Caixa de Marcha Honda Fit 1.5 ano 2011"
    },
    {
        id: 58,
        name: "Motor Completo Honda Fit 1.5 2009",
        price: 6969.05,
        image: "/assets/products-img/motor-honda-fit.jpg",
        manufacturer: "Honda",
        description: "Motor Completo Honda Fit 1.5 ano 2009"
    },
    {
        id: 59,
        name: "Motor Completo | CG 2012",
        price: 2352.05,
        image: "/assets/products-img/motor-cg125.jpg",
        manufacturer: "Honda",
        description: "Motor Completo Motocicleta Honda CG 125 ano 2012"
    },
    {
        id: 60,
        name: "Módulo de Injeção Honda Civic 2.0 2014",
        price: 1121.05,
        image: "/assets/products-img/modulo-injecao-civic.jpg",
        manufacturer: "Honda",
        description: "Módulo de Injeção Honda Civic 2.0 ano 2014"
    },

    // Hyundai
    {
        id: 61,
        name: "Motor Completo Hyundai HB20 1.6 2015",
        price: 8500.00,
        image: "/assets/products-img/motor-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Motor Completo Hyundai HB20 1.6 ano 2015"
    },
    {
        id: 62,
        name: "Tampa Traseiro Hyundai Santa 3.5 2011",
        price: 800.05,
        image: "/assets/products-img/tampa-traseira-santafe.jpg",
        manufacturer: "Hyundai",
        description: "Tampa Traseira Hyundai Santa Fe 3.5 ano 2011"
    },
    {
        id: 63,
        name: "Porta Traseira Dir Hyundai HB20 1.6 2017",
        price: 600.05,
        image: "/assets/products-img/porta-traseira-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Porta Traseira Direita Hyundai 1.6 ano 2017"
    },
    {
        id: 64,
        name: "Jogo de Banco Tecido Hyundai HB20S 1.6 2014",
        price: 810.05,
        image: "/assets/products-img/banco-completo-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Jogo de Banco Completo Tecido Hyundai HB20S 1.6 ano 2014"
    },
    {
        id: 65,
        name: "Cabeçote Hyundai Santa 3.5 2011",
        price: 1118.05,
        image: "/assets/products-img/cacote-santafe.jpg",
        manufacturer: "Hyundai",
        description: "Cabeçote Hyundai Santa Fe 3.5 ano 2011"
    },
    {
        id: 66,
        name: "Alternador Hyundai HB20 1.6 2020",
        price: 748.05,
        image: "/assets/products-img/alternador-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Alternador Hyundai HB20 1.6 ano 2020"
    },
    {
        id: 67,
        name: "Módulo de Injeção Hyundai HB20 1.6 2015",
        price: 679.05,
        image: "/assets/products-img/modulo-injecao-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Módulo de Injeção Hyundai HB20 1.6 ano 2015"
    },
    {
        id: 68,
        name: "Capô Hyundai Veloster 1.6 2012",
        price: 2021.05,
        image: "/assets/products-img/capo-veloster.jpg",
        manufacturer: "Hyundai",
        description: "Capô Hyundai Veloster 1.6 ano 2012"
    },
    {
        id: 69,
        name: "Câmbio Automático | Caixa de Marcha Hyundai Creta 1.6L 2021",
        price: 3059.05,
        image: "/assets/products-img/cambio-automatico-creta.jpg",
        manufacturer: "Hyundai",
        description: "Câmbio Automático e Caixa de Marcha Hyundai Creta 1.6L ano 2021"
    },
    {
        id: 70,
        name: "Parachoque Dianteiro Hyundai HB20S 1.6 2015",
        price: 1010.05,
        image: "/assets/products-img/parachoque-dianteiro-hb20.jpg",
        manufacturer: "Hyundai",
        description: "Parachoque Dianteiro Hyundai HB20S 1.6 ano 2015"
    },
    // Renault
    {
        id: 71,
        name: "Parachoque Traseiro Renault Logan 1.0 2021",
        price: 671.05,
        image: "/assets/products-img/parachoque-traseiro-logan.jpg",
        manufacturer: "Renault",
        description: "Parachoque Traseiro Renault Logan 1.0 ano 2021"
    },
    {
        id: 72,
        name: "Jogo de Banco Tecido Renault Sandero 1.6 2012",
        price: 1099.05,
        image: "/assets/products-img/banco-completo-sandero.jpg",
        manufacturer: "Renault",
        description: "Jogo de Banco Completo Tecido Renault Sandero 1.6 ano 2022"
    },
    {
        id: 73,
        name: "Motor Completo Renault Duster 2.0 2012",
        price: 8389.05,
        image: "/assets/products-img/motor-duster.jpg",
        manufacturer: "Renault",
        description: "Motor Completo Renault Duster 2.0 ano 2012"
    },
    {
        id: 74,
        name: "Bomba de Direção Eletro Hidraulica Renault Logan 1.0 2011",
        price: 722.05,
        image: "/assets/products-img/bomba-direcao-hidraulica-logan.jpg",
        manufacturer: "Renault",
        description: "Bomba de Direção Eletro Hidraulica Renault Logan 1.0 ano 2011"
    },
    {
        id: 75,
        name: "Câmbio Manual | Caixa de Marcha Renault Sandero 1.6 2009",
        price: 2489.90,
        image: "/assets/products-img/cambio-manual-sandero.jpg",
        manufacturer: "Renault",
        description: "Câmbio Manual e Caixa de Marcha Renault Sandero 1.6 ano 2009"
    },
    {
        id: 76,
        name: "Câmbio Manual | Caixa de Marcha Renault Clio 1.0 2010",
        price: 2989.90,
        image: "/assets/products-img/cambio-manual-clio.jpg",
        manufacturer: "Renault",
        description: "Câmbio Manual e Caixa de Marcha Renault Clio 1.0 ano 2010"
    },
    {
        id: 77,
        name: "Porta Dianteira Esq Renault Sandero 1.6 2015",
        price: 850.00,
        image: "/assets/products-img/porta-dianteira-sandero.jpg",
        manufacturer: "Renault",
        description: "Porta Dianteira Esquerda Renault Sandero 1.6 ano 2015"
    },
    {
        id: 78,
        name: "Módulo de Injeção Renault Sandero 1.6 2012",
        price: 800.05,
        image: "/assets/products-img/modulo-injecao-sandero.jpg",
        manufacturer: "Renault",
        description: "Módulo de Injeção Renault Sandero 1.6 ano 2012"
    },
    {
        id: 79,
        name: "Parachoque Dianteiro Van Renault Master 2.3 2020",
        price: 1169.05,
        image: "/assets/products-img/parachoque-dianteiro-van.jpg",
        manufacturer: "Renault",
        description: "Parachoque Dianteiro Van Renault Master 2.3 ano 2020"
    },
    {
        id: 80,
        name: "Tampa Traseira Renault Sandero 1.6 2014",
        price: 700.00,
        image: "/assets/products-img/tampa-traseira-sandero.jpg",
        manufacturer: "Renault",
        description: "Tampa Traseira Renault Sandero 1.6 ano 2014"
    },
    

    // Nissan
    {
        id: 81,
        name: "Cardan Traseiro Nissan Frontier 2.5 2012",
        price: 1127.05,
        image: "/assets/products-img/cardan-traseiro-frontier.jpg",
        manufacturer: "Nissan",
        description: "Cardan Traseiro Nissan Frontier 2.5 ano 2012"
    },
    {
        id: 82,
        name: "Jogo de Banco Couro Nissan Livina 1.6 2012",
        price: 1134.05,
        image: "/assets/products-img/banco-completo-livina.jpg",
        manufacturer: "Nissan",
        description: "Jogo de Banco Completo de Couro Nissan Livina 1.6 ano 2012"
    },
    {
        id: 83,
        name: "Jogo de Roda Aro 16 Nissan Tiida 1.8 2012",
        price: 1784.05,
        image: "/assets/products-img/jogo-de-roda-tilda.jpg",
        manufacturer: "Nissan",
        description: "Jogo de Roda Aro 16 Nissan Tiida 1.8 ano 2012"
    },
    {
        id: 84,
        name: "Parachoque Traseiro Nissan Kicks 1.6 2022",
        price: 933.05,
        image: "/assets/products-img/parachoque-traseiro-kicks.jpg",
        manufacturer: "Nissan",
        description: "Parachoque Traseiro Nissan Kicks 1.6 ano 2022"
    },
    {
        id: 85,
        name: "Porta Traseira Dir Nissan Frontier 2.5 2012",
        price: 1131.05,
        image: "/assets/products-img/porta-traseira-frontier.jpg",
        manufacturer: "Nissan",
        description: "Porta Traseira Dianteira Nissan Frontier 2.5 ano 2012"
    },
    {
        id: 86,
        name: "Câmbio Manual | Caixa de Marcha Nissan March 1.0 2015",
        price: 3054.05,
        image: "/assets/products-img/cambio-manual-march.jpg",
        manufacturer: "Nissan",
        description: "Câmbio Manual e Caixa de Marcha Nissan March 1.0 ano 2015"
    },
    {
        id: 87,
        name: "Motor Completo Nissan Versa 1.6 2013",
        price: 6578.05,
        image: "/assets/products-img/motor-versa.jpg",
        manufacturer: "Nissan",
        description: "Motor Completo Nissan Versa 1.6 ano 2013"
    },
    {
        id: 88,
        name: "Módulo Derivação Nissan Frontier 2.5 2010",
        price: 621.05,
        image: "/assets/products-img/modulo-derivacao-frontier.jpg",
        manufacturer: "Nissan",
        description: "Módulo Derivação Nissan Frontier 2.5 ano 2010"
    },
    {
        id: 89,
        name: "Farol Esquerdo Nissan Frontier 2.5 2013",
        price: 645.05,
        image: "/assets/products-img/farol-frontier.jpg",
        manufacturer: "Nissan",
        description: "Farol Esquerdo Nissan Frontier 2.5 ano 2013"
    },
    {
        id: 90,
        name: "Módulo de Injeção Nissan March 1.0 2015",
        price: 449.90,
        image: "/assets/products-img/modulo-injecao-march.jpg",
        manufacturer: "Nissan",
        description: "Módulo de Injeção Nissan March 1.0 ano 2015"
    },


    // Peugeot
    {
        id: 91,
        name: "Câmbio Manual | Caixa de Marcha Peugeot 208 1.5 2014",
        price: 1373.05,
        image: "/assets/products-img/cambio-manual-208.jpg",
        manufacturer: "Peugeot",
        description: "Câmbio Manual e Caixa de Marcha Peugeot 208 1.5 ano 2014"
    },

    {
        id: 92,
        name: "Kit Multimídia | Rádio Peugeot 208 1.5 2014",
        price: 700.05,
        image: "/assets/products-img/multimidia-208.jpg",
        manufacturer: "Peugeot",
        description: "Kit Multimídia e Rádio Peugeot 208 1.5 ano 2014"
    },
    {
        id: 93,
        name: "Motor de Partida | Arranque Peugeot 308 1.6 2014",
        price: 817.99,
        image: "/assets/products-img/motor-partida-308.jpg",
        manufacturer: "Peugeot",
        description: "Motor de Partida e Arranque Peugeot 308 1.6 ano 2014"
    },
    {
        id: 94,
        name: "Jogo de Banco Tecido Peugeot 207 1.4 2009",
        price: 755.05,
        image: "/assets/products-img/banco-completo-207.jpg",
        manufacturer: "Peugeot",
        description: "Jogo de Banco Completo Tecido Peugeot 207 1.4 ano 2009"
    },
    {
        id: 95,
        name: "Tampa Traseira Peugeot 207 1.4 2011",
        price: 580.00,
        image: "/assets/products-img/tampa-traseira-207.jpg",
        manufacturer: "Peugeot",
        description: "Tampa Traseira Peugeot 207 1.4 ano 2011"
    },
    {
        id: 96,
        name: "Porta Traseira Esq Peugeot 2008 1.6 2022",
        price: 832.05,
        image: "/assets/products-img/porta-traseira-2008.jpg",
        manufacturer: "Peugeot",
        description: "Porta Traseira Esquerda Peugeot 2008 1.6 ano 2022"
    },
    {
        id: 97,
        name: "Motor Completo Peugeot 206 1.6 2008",
        price: 6366.05,
        image: "/assets/products-img/motor-206.jpg",
        manufacturer: "Peugeot",
        description: "Motor Completo Peugeot 206 1.6 ano 2008"
    },
    {
        id: 98,
        name: "Virabrequim Peugeot 206 1.4 2008",
        price: 749.05,
        image: "/assets/products-img/virabrequim-206.jpg",
        manufacturer: "Peugeot",
        description: "Virabrequim Peugeot 206 1.4 ano 2008"
    },
    {
        id: 99,
        name: "Parachoque Traseiro Peugeot 208 1.6 2014",
        price: 834.05,
        image: "/assets/products-img/parachoque-traseiro-208.jpg",
        manufacturer: "Peugeot",
        description: "Parachoque Traseiro Peugeot 208 1.6 ano 2014"
    },
    {
        id: 100,
        name: "Módulo de Injeção Peugeot 206 1.4 2008",
        price: 998.00,
        image: "/assets/products-img/modulo-injecao-206.jpg",
        manufacturer: "Peugeot",
        description: "Módulo de Injeção Peugeot 206 1.4 ano 2008"
    },

    // Citroen
    {
        id: 102,
        name: "Módulo Estacionamento Citroen C4 1.6 2014",
        price: 500.05,
        image: "/assets/products-img/modulo-estacionamento-c4.jpg",
        manufacturer: "Citroen",
        description: "Módulo Estacionamento Citroen C4 1.6 ano 2014"
    },
    {
        id: 102,
        name: "Porta Traseira Esq Citroen C3 1.5 2013",
        price: 600.90,
        image: "/assets/products-img/porta-traseira-c3.jpg",
        manufacturer: "Citroen",
        description: "Porta Traseira Esquerda Citroen C3 1.5 ano 2013"
    },
    {
        id: 103,
        name: "Parachoque Traseiro Citroen C4 1.6 2019",
        price: 800.90,
        image: "/assets/products-img/parachoque-traseiro-c4.jpg",
        manufacturer: "Citroen",
        description: "Parachoque Traseiro Citroen C4 1.6 ano 2019"
    },
    {
        id: 104,
        name: "Jogo de Banco Tecido Citroen C3 1.6 2012",
        price: 900.00,
        image: "/assets/products-img/banco-completo-c3.jpg",
        manufacturer: "Citroen",
        description: "Jogo de Banco Completo Tecido Citroen C3 1.6 ano 2012"
    },
    {
        id: 105,
        name: "Módulo de Injeção Citroen C3 1.6 2015",
        price: 730.05,
        image: "/assets/products-img/modulo-injecao-c3.jpg",
        manufacturer: "Citroen",
        description: "Módulo de Injeção Citroen C3 1.6 ano 2015"
    },
    {
        id: 106,
        name: "Câmbio Manual | Caixa de Marcha Citroen C3 1.5 2015",
        price: 1835.05,
        image: "/assets/products-img/cambio-manual-c3.jpg",
        manufacturer: "Citroen",
        description: "Câmbio Manual e Caixa de Marcha Citroen C3 1.5 ano 2015"
    },
    {
        id: 107,
        name: "Motor Completo Citroen XSARA 1.6 2008",
        price: 6200.90,
        image: "/assets/products-img/motor-xsara.jpg",
        manufacturer: "Citroen",
        description: "Motor Completo Citroen XSARA 1.6 ano 2008"
    },
    {
        id: 108,
        name: "Jogo de Roda Aro 16 Citroen C4 2.0 2013",
        price: 1302.05,
        image: "/assets/products-img/jogo-de-roda-c4.jpg",
        manufacturer: "Citroen",
        description: "Jogo de Roda Aro 16 Citroen C4 2.0 ano 2013"
    },
    {
        id: 109,
        name: "Capô Citroen C4 2.0 2016",
        price: 1200.90,
        image: "/assets/products-img/capo-c4.jpg",
        manufacturer: "Citroen",
        description: "Capô Citroen C4 2.0 ano 2016"
    },
    {
        id: 110,
        name: "Compressor Ar Condicionado Citroen C3 1.4 2011",
        price: 889.00,
        image: "/assets/products-img/compressor-ar-c3.jpg",
        manufacturer: "Citroen",
        description: "Compressor do Ar Condicionado Citroen C3 1.4 ano 2011"
    },


    // Audi
    {
        id: 111,
        name: "Módulo de Injeção Audi A1 1.4 2013",
        price: 1116.90,
        image: "/assets/products-img/modulo-injecao-a1.jpg",
        manufacturer: "Audi",
        description: "Módulo de Injeção Audi A1 1.4 ano 2013"
    },
    {
        id: 112,
        name: "Câmbio Automático | Caixa de Marcha Audi A1 1.4 2013",
        price: 7247.05,
        image: "/assets/products-img/cambio-automatico-q3.jpg",
        manufacturer: "Audi",
        description: "Câmbio Automático e Caixa de Marcha AUDI A1 1.4 ano 2013"
    },
    {
        id: 113,
        name: "Capô Audi Q7 3.0 2016",
        price: 2219.05,
        image: "/assets/products-img/capo-q7.jpg",
        manufacturer: "Audi",
        description: "Capô Audi Q7 3.0 ano 2016"
    },
    {
        id: 114,
        name: "Parachoque Traseiro Audi Q7 3.0 2014",
        price: 1200.05,
        image: "/assets/products-img/parachoque-traseiro-q7.jpg",
        manufacturer: "Audi",
        description: "Parachoque Traseiro Audi Q7 3.0 ano 2014"
    },
    {
        id: 115,
        name: "Motor Completo Audi A1 1.4 2013",
        price: 15015.90,
        image: "/assets/products-img/motor-completo-a1.jpg",
        manufacturer: "Audi",
        description: "Motor Completo Audi A1 1.4 ano 2013"
    },
    {
        id: 116,
        name: "Tampa Traseira Audi Q5 3.0 2016",
        price: 1539.90,
        image: "/assets/products-img/tampa-traseira-q5.jpg",
        manufacturer: "Audi",
        description: "Tampa Traseira Audi Q5 3.0 ano 2016"
    },
    {
        id: 117,
        name: "Porta Traseira Esq Audi A4 1.8 2015",
        price: 729.05,
        image: "/assets/products-img/porta-traseira-a1.jpg",
        manufacturer: "Audi",
        description: "Porta Traseira Esquerda Audi A4 1.8 ano 2015"
    },
    {
        id: 118,
        name: "Retrovisor Elétrico Esq Audi RS5 4.2 2015",
        price: 1490.90,
        image: "/assets/products-img/retrovisor-rs5.jpg",
        manufacturer: "Audi",
        description: "Retrovisor Elétrico Esquerdo Audi RS5 4.2 2015"
    },
    {
        id: 119,
        name: "Alternador Audi A1 1.4 2013",
        price: 931.05,
        image: "/assets/products-img/alternador-a1.jpg",
        manufacturer: "Audi",
        description: "Alternador Audi A1 1.4 ano 2013"
    },
    {
        id: 120,
        name: "Semi-Eixo Esq Audi A3 1.8 2014",
        price: 1014.05,
        image: "/assets/products-img/semi-eixo-a3.jpg",
        manufacturer: "Audi",
        description: "Semi-Eixo Esquerdo Audi A3 1.8 ano 2014"
    },


    // BMW
    {
        id: 121,
        name: "Câmbio Automático | Caixa de Marcha BMW X3 2.0 2017",
        price: 5951.00,
        image: "/assets/products-img/cambio-automatico-x3.jpg",
        manufacturer: "BMW",
        description: "Câmbio Automático e Caixa de Marcha X3 2.0 ano 2017"
    },
    {
        id: 122,
        name: "Capô BMW X3 2.0 2014",
        price: 1909.05,
        image: "/assets/products-img/capo-x3.jpg",
        manufacturer: "BMW",
        description: "Capô BMW X3 2.0 ano 2014"
    },
    {
        id: 123,
        name: "Caixa de Tranferência BMW X5 4.4 2002",
        price: 1013.05,
        image: "/assets/products-img/caixa-transferencia-x4.jpg",
        manufacturer: "BMW",
        description: "Caixa de Tranferência BMW X5 4.4 ano 2002"
    },
    {
        id: 124,
        name: "Módulo Estacionamento BMW 320 2.0 2023",
        price: 1042.05,
        image: "/assets/products-img/modulo-estacionamento-320.jpg",
        manufacturer: "BMW",
        description: "Módulo Estacionamento BMW 320 2.0 ano 2023"
    },
    {
        id: 125,
        name: "Parachoque Traseiro BMW X3 2.0 2015",
        price: 1508.05,
        image: "/assets/products-img/parachoque-traseiro-x3.jpg",
        manufacturer: "BMW",
        description: "Parachoque Traseiro BMW X3 2.0 ano 2015"
    },
    {
        id: 126,
        name: "Tampa Traseira BMW 328 2.0 2015",
        price: 818.05,
        image: "/assets/products-img/tampa-traseira-328.jpg",
        manufacturer: "BMW",
        description: "Tampa Traseira BMW 328 2.0 ano 2015"
    },
    {
        id: 127,
        name: "Porta Traseira Esq BMW X5 4.4 2014",
        price: 1240.05,
        image: "/assets/products-img/porta-traseira-x5.jpg",
        manufacturer: "BMW",
        description: "Porta Traseira Esquerda BMW X5 4.4 ano 2014"
    },
    {
        id: 128,
        name: "Motor Completo Motocicleta G650 2011",
        price: 7970.05,
        image: "/assets/products-img/motor-650.jpg",
        manufacturer: "BMW",
        description: "Motor Completo Motocicleta G650 ano 2011"
    },
    {
        id: 129,
        name: "Tanque Combustível Motocicleta BMW S1000 2011",
        price: 946.05,
        image: "/assets/products-img/tanque-combustivel-s1000.jpg",
        manufacturer: "BMW",
        description: "Tanque de Combustível Motocicleta BMW S1000 ano 2011"
    },
    {
        id: 130,
        name: "Módulo CDI Motocicleta BMW K1200 2008",
        price: 648.05,
        image: "/assets/products-img/modulo-cdi-k1600.jpg",
        manufacturer: "BMW",
        description: "Módulo CDI Motocicleta BMW K1200 ano 2008"
    },


    // Volvo
    {
        id: 131,
        name: "Caixa de Transferência Volvo XC 2.0 2019",
        price: 1343.05,
        image: "/assets/products-img/caixa-transferencia-xc.jpg",
        manufacturer: "Volvo",
        description: "Caixa de Transferência Volvo XC 2.0 ano 2019"
    },
    {
        id: 132,
        name: "Módulo de Injeção Volvo XC 2.0 2019",
        price: 2025.38,
        image: "/assets/products-img/modulo-injecao-xc.jpg",
        manufacturer: "Volvo",
        description: "Módulo de Injeção Volvo XC 2.0 ano 2019"
    },
    {
        id: 133,
        name: "Tampa Traseira Volvo S60 1.6 2011",
        price: 800.00,
        image: "/assets/products-img/tampa-traseira-s60.jpg",
        manufacturer: "Volvo",
        description: "Tampa Traseira Volvo S60 1.6 ano 2011"
    },
    {
        id: 134,
        name: "Porta Dianteira Esq Volvo S60 1.6 2011",
        price: 750.90,
        image: "/assets/products-img/porta-dianteira-s60.jpg",
        manufacturer: "Volvo",
        description: "Porta Dianteira Esquerda Volvo S60 1.6 ano 2011"
    },
    {
        id: 135,
        name: "Parachoque Traseiro Volvo S60 1.6 2011",
        price: 1000.05,
        image: "/assets/products-img/parachoque-traseiro-s60.jpg",
        manufacturer: "Volvo",
        description: "Tampa Traseira Volvo S60 1.6 ano 2011"
    },
    {
        id: 136,
        name: "Radiador Volvo XC 90 2.0 2019",
        price: 950.90,
        image: "/assets/products-img/radiador-xc.jpg",
        manufacturer: "Volvo",
        description: "Radiador Volvo XC 90 2.0 ano 2019"
    },
    {
        id: 137,
        name: "Bomba de Combustível Volvo XC 90 2.0 2019",
        price: 1028.05,
        image: "/assets/products-img/bomba-combustivel-xc.jpg",
        manufacturer: "Volvo",
        description: "Bomba de Combustível Volvo XC 90 2.0 ano 2019"
    },
    {
        id: 138,
        name: "Sensor Estacionamento Volvo XC 90 2.0 2019",
        price: 740.05,
        image: "/assets/products-img/sensor-estacionamento-xc.jpg",
        manufacturer: "Volvo",
        description: "Sensor Estacionamento Volvo XC 90 2.0 ano 2019"
    },
    {
        id: 139,
        name: "Kit Rádio | Multimídia Volvo XC 3.0 2011",
        price: 2904.90,
        image: "/assets/products-img/radio-xc.jpg",
        manufacturer: "Volvo",
        description: "Kit Rádio e Multimídia Volvo XC 3.0 ano 2011"
    },
    {
        id: 140,
        name: "Unidade de Comando Volvo XC 2.0 2019",
        price: 884.05,
        image: "/assets/products-img/unidade-comando-xc.jpg",
        manufacturer: "Volvo",
        description: "Tampa Traseira Volvo S60 1.6 ano 2011"
    },

    // Mitsubishi
    {
        id: 151,
        name: "Caixa de Fusíveis Mitsubishi ASX 2.0 2013",
        price: 613.90,
        image: "/assets/products-img/caixa-fusivel-asx.jpg",
        manufacturer: "Mitsubishi",
        description: "Caixa de Fusíveis Mitsubishi ASX 2.0 ano 2013"
    },
    {
        id: 152,
        name: "Virabrequim Mitsubishi Pajero 2.0 2012",
        price: 1018.05,
        image: "/assets/products-img/virabrequim-pajero.jpg",
        manufacturer: "Mitsubishi",
        description: "Virabrequim Mitsubishi Pajero 2.0 ano 2012"
    },
    {
        id: 153,
        name: "Cabeçote Mitsubishi Pajero 2.0 2012",
        price: 3228.90,
        image: "/assets/products-img/cabecote-pajero.jpg",
        manufacturer: "Mitsubishi",
        description: "Cabeçote Mitsubishi Pajero 2.0 ano 2012"
    },
    {
        id: 154,
        name: "Caixa de Transferência Mitsubishi L200 3.2 2009",
        price: 2690.00,
        image: "/assets/products-img/caixa-transferencia-l200.jpg",
        manufacturer: "Mitsubishi",
        description: "Caixa de Transferência Mitsubishi L200 3.2 ano 2009"
    },
    {
        id: 155,
        name: "Câmbio Automático | Caixa de Marcha Mitsubishi Outlander 2.2 2016",
        price: 3500.05,
        image: "/assets/products-img/cambio-automatico-outlander.jpg",
        manufacturer: "Mitsubishi",
        description: "Câmbio Automático e Caixa de Marcha Mitsubishi Outlander 2.2 ano 2016"
    },
    {
        id: 156,
        name: "Aerofólio Mitsubishi Eclipse 1.5 2020",
        price: 502.05,
        image: "/assets/products-img/aerofolio-eclipse.jpg",
        manufacturer: "Mitsubishi",
        description: "Aerofólio Mitsubishi Eclipse 1.5 ano 2020"
    },
    {
        id: 157,
        name: "Parachoque Traseiro Mitsubishi ASX 2.0 2016",
        price: 916.05,
        image: "/assets/products-img/parachoque-traseiro-asx.jpg",
        manufacturer: "Mitsubishi",
        description: "Parachoque Traseiro Mitsubishi ASX 2.0 ano 2016"
    },
    {
        id: 158,
        name: "Grade Radiador Mitsubishi L200 3.2 2013",
        price: 1780.00,
        image: "/assets/products-img/grade-l200.jpg",
        manufacturer: "Mitsubishi",
        description: "Grade Radiador Mitsubishi L200 3.2 ano 2013"
    },
    {
        id: 159,
        name: "Tampa Traseira Mitsubishi Pajero 2.0 2010",
        price: 2000.90,
        image: "/assets/products-img/tampa-traseira-pajero.jpg",
        manufacturer: "Mitsubishi",
        description: "Tampa Traseira Mitsubishi Pajero 2.0 ano 2010"
    },
    {
        id: 160,
        name: "Porta Dianteira Esq Mitsubishi Pajero 2.0 2014",
        price: 535.90,
        image: "/assets/products-img/porta-dianteira-pajero.jpg",
        manufacturer: "Mitsubishi",
        description: "Porta Dianteira Esquerda Mitsubishi Pajero 2.0 ano 2014"
    },
    
];

export const manufacturers = [
    "Volkswagen",
    "Chevrolet",
    "Fiat",
    "Ford",
    "Toyota",
    "Honda",
    "Hyundai",
    "Renault",
    "Nissan",
    "Peugeot",
    "Citroen",
    "Audi",
    "BMW",
    "Volvo",
    "Mitsubishi"
];
