import { Observable, fromEvent, of } from 'rxjs';
import { map, catchError, debounceTime, pluck, tap, mergeAll } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';
import { GithubUsersResponse } from '../interfaces/github-users-interface';
import { GithubUser } from '../interfaces/github-user-interface';


const url = 'https://api.github.com/search/users?q=';

// Referencias
const body = document.querySelector('body');
const input = document.createElement('input');
const list = document.createElement('ol');
body.append(input, list);

const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);

    list.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = `Ver ${usuario.login}`;
        anchor.target = '_blank';

        li.append(img, anchor)
        list.append(li)
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent >(input, 'keyup');

input$.pipe(
    debounceTime(500),
    map<KeyboardEvent, string>(event => event.target['value']),
    map<string, Observable<any>>(texto => ajax.getJSON(`${url}${texto}`)),
    mergeAll(),
    map<GithubUsersResponse, GithubUser[]>(resp => resp['items'])
).subscribe(mostrarUsuarios);

