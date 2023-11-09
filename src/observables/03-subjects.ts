import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: (valor) => console.log("next:", valor),
    error: (error) => console.warn("error:", error),
    complete: () => console.info("completado"),
};

const intervalo$ = new Observable((subscribe) => {

    const interval = setInterval(() => subscribe.next(Math.random()), 1000);

    return () => {
        clearInterval(interval);
        console.log("destruido el intervalo");
    };
});

/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, Error, Complete
 */

/**
 * Subject:
 * 1. Muchas suscripciones van a estar sujetas a este mismo subject u observable y va a servir para distribuir la misma informacion
 *    a todos los lugares donde esten suscritos o los lugares que les interese ese valor.
 * 2. Es un observer que se puede enviar como argumento en el subscribe.
 * 3. Se puede manejar como un observer next(), error(), comple().
 */

/* Se crea el subject */
const subject$ = new Subject();

const subscripcion$ = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("subs1: ", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs2: ", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscripcion$.unsubscribe();
}, 5000);
