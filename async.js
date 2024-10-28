function doAsyncTask(cb) {
    setTimeout(cb,0)
}
doAsyncTask(() => console.log(message));

// "() =>" es el callback en si

let message = 'Callback Called';

/*
    Callbacks son funciones que se envian como paramatro para ser llamdas luego
    "call back" ( llamar de vuelta )
    No son async de por siP
*/

