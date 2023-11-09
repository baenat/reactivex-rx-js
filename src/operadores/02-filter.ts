import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


// range(1,10).pipe(
//     filter(value => value % 2 === 1)
// ).subscribe( console.log );


range(1, 10).pipe(
    filter((value, indx) => {
        console.log('index:', indx);
        return value % 2 === 1;
    })
)//.subscribe( console.log );


interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    },
];


const obs$ = from(personajes).pipe(
    filter(objeto => objeto.tipo == 'Heroe')
);

// obs$.subscribe(console.log)


const keyip$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);

keyip$.subscribe(console.log)