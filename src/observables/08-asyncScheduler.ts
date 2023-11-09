import { asyncScheduler } from 'rxjs';


// setInterval(()=> {}, 3000);
// setTimeout(() => {}, 3000);


const saludar = () => console.log('Hola mundo!!');
const saludar2 = nombre => console.log(`Hola ${nombre}`);
const saludar3 = object => console.log(`Hola ${object.nom} ${object.ape}`);

// Similar aun setTimeOut
// asyncScheduler.schedule(saludar3, 2000, {nom: 'Julian', ape: 'Baena'});

// Similar aun setInterval
const subs$ = asyncScheduler.schedule(function(state) {
    console.log('state:', state);
    this.schedule(state+1, 1000);
}, 3000, 0);


// setTimeout(() => {
//     subs$.unsubscribe()
// }, 6000);


// Despues de 6seg se realiza unsubscribe a la subscripcion
asyncScheduler.schedule(()=> subs$.unsubscribe(), 6000)