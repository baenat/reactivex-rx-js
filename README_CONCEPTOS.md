# Curso de RXJS

# Extensiones Reactivas

## ¿Cuando usar Rx?

- Eventos interfaz de usuarios
- Cuando es necesario notificar sobre cambios de un objeto(s)
- Comunicaciones por Sockets
- Cuando trabajamos con flujos de información (streams)


## Piezas Fundamentales:

** Observables:

- Son la fuente de información
- Pueden emitir multiples valores, solo uno o ninguno
- Pueden emitir errores
- Pueden ser infinitos, finitos (completarse)
- Pueden ser sincronos o asincronos

** Subscribers

- Se subscriben a un observable, es decir, estar pendiente de lo que realizar el observable
- Consumen / Observan la data que viene del observable
- Pueden recibir los errores y eventos del observable
- Desconocen todo lo que se encuentra detras del observable
- Desconoce sin la información viene filtrada, trans formada, a ellos no les interesa

** Operators

- Usados para transformar observable (map, group, scan...)
- Usados para filtrar observables (filter, ditinct, skip, debounce...)
- Usados para combinar observables
- USados para crear nuevos observables


## Patrones

Observer Pattern

- Notificar cuando suceden cambios

Iterador Pattern

- Poder ejecutar operaciones secuenciales

Programación Funcional

- Tener funciones con tareas especificas que reciban argumentos y no muten la iunformación

