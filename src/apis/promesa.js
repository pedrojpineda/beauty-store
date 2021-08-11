const listaProductos = [
    {
        id: 1,
        title: 'Crema Nutritiva Plus 50',
        description: 'Fórmula especialmente indicada para pieles maduras. Enriquecida con extractos de Flor de Durazno y Vitamina E, componentes que ayudan a regenerar y renovar la piel.',
        price: 45000,
        pictureUrl: 'crema-nutritiva-plus-50-1.jpg'
    },
    {
        id: 2,
        title: 'Agua de rosas',
        description: 'El Agua de rosas tiene múltiple beneficios como hidratar la piel cerrar poros abiertos y tonificar, ideal para utilizar en las mañanas y las noches, antes y después del maquillaje.',
        price: 5900,
        pictureUrl: 'agua-de-rosas.jpg'
    },
    {
        id: 3,
        title: 'Exfoliante facial',
        description: 'Diseñado especialmente para tener la piel suave, limpia de células muertas e impurezas gracias a las partículas exfoliantes que contiene. Efecto soft-peeling.',
        price: 5900,
        pictureUrl: 'exfoliante-facial.jpg'
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