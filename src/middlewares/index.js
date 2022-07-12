// Lo que queremos hacer con este middleware 4es que cada vez que se dispare una accion, pueda obtener la informacion de esa accion y hacer un console.log de la misma.
//Tienen que tener una estructura especifica
//Recibe un parametro que se llama store y retorna otra funcion con un parametro que se llama "next" y retornar otra fucion que recibe el "action" que se va a disparar.

//Esta es un curly function, es decir, una funcion que retorna otra funcion.

/*
store: es el es store de la aplicacion.
next: es una funcion que llamaremos cuando nuestro middleware halla terminado su trabajo y esta funcion, manda el action al reducer.
action: es la informacion de lo que esta pasando.
*/

export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featured = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'eddie'}, ...actionInfo.action.payload];
    const updatedAction = {...actionInfo, action: {...actionInfo.action, payload: featured}}
    next(updatedAction)
}