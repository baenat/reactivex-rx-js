import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    // Emite los eventos cuyos valores no se hayan emitido antes
    distinct() // ===
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman'},
    { nombre: 'X'},
    { nombre: 'Zero'},
    { nombre: 'Dr. Wlly'},
    { nombre: 'X'},
    { nombre: 'Zero'},
];

from(personajes).pipe(
    distinct(p=> p.nombre)
).subscribe(console.log);