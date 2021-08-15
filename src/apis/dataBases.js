export const categories = [
    {
        id: "belleza-cuidado-piel",
        categoryName: "Belleza y Cuidado de la Piel"
    },
    {
        id: "nutricion",
        categoryName: "Nutrición"
    },
    {
        id: "medicamentos",
        categoryName: "Medicamentos"
    }
];

const listaProductos = [
    {
        id: 1,
        title: "Crema Nutritiva Plus 50",
        category: "belleza-cuidado-piel",
        pictureUrl: "crema-nutritiva-plus-50-1.jpg",
        description: "Fórmula especialmente indicada para pieles maduras. Enriquecida con extractos de Flor de Durazno y Vitamina E, componentes que ayudan a regenerar y renovar la piel.",
        price: 45000
    },
    {
        id: 2,
        title: "Agua de rosas",
        category: "belleza-cuidado-piel",
        pictureUrl: "agua-de-rosas.jpg",
        description: "El Agua de rosas tiene múltiple beneficios como hidratar la piel cerrar poros abiertos y tonificar, ideal para utilizar en las mañanas y las noches, antes y después del maquillaje.",
        price: 5900
    },
    {
        id: 3,
        title: "Exfoliante facial",
        category: "belleza-cuidado-piel",
        pictureUrl: "exfoliante-facial.jpg",
        description: "Diseñado especialmente para tener la piel suave, limpia de células muertas e impurezas gracias a las partículas exfoliantes que contiene. Efecto soft-peeling.",
        price: 25900
    },
    {
        id: 4,
        title: "Carnichofa",
        category: "nutricion",
        pictureUrl: "carnichofa.jpg",
        description: "Fórmula líquida con extracto de alcachofa, L-carnitina, picolinato de cromo y Vitaminas B1, B2 y B6. Estimula la diuresis, y por su aporte de cinarina estimula la producción de bilis facilitando el metabolismo de las grasas.",
        price: 66000
    },
    {
        id: 5,
        title: "Leiko Flax",
        category: "nutricion",
        pictureUrl: "leiko-flax.jpg",
        description: "Fibra dietaria, proveniente de diferentes fuentes: Linaza dorada, alpiste para consumo humano, salvado de avena y de trigo; también frutas: Naranja, ciruela, manzana, papaya, pitahaya con insulina y probióticos.",
        price: 47000
    },
    {
        id: 6,
        title: "Organic Protein",
        category: "nutricion",
        pictureUrl: "organic-protein.jpg",
        description: "Elaborada con ingredientes puros, cada porción de esta deliciosa proteína está certificada como orgánica por USDA y no es transgénica. Es una excelente manera de agregar nutrición adicional a su día activo y alimentar su vida.",
        price: 126000
    },
    {
        id: 7,
        title: "Complejo-B",
        category: "medicamentos",
        pictureUrl: "complejo-b.jpg",
        description: "Complejo-B Multiples Componentes Cápsula Caja X 30 Sin Azucar.",
        price: 23200
    },
    {
        id: 8,
        title: "Alendronato",
        category: "medicamentos",
        pictureUrl: "alendronato.jpg",
        description: "Alendronato 70Mg Tabletas Caja X 4 Mintlab.",
        price: 32000
    },
    {
        id: 9,
        title: "Betaglucano de Levadura",
        category: "medicamentos",
        pictureUrl: "betaglucano-de-levadura.jpg",
        description: "Betaglucano de Levadura 250Mg Caja X 30 Cápsulas.",
        price: 71700
    }
];

function getItems() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductos);
        }, 2000);
    });

    return promesa.then(res => {
        return res;
    }, err => {
        console.log(err)
    });
}

export default getItems;