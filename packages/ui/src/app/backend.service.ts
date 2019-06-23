/** @module @worldsibu/convector-adapter-browser */

import { HttpClient } from '@angular/common/http';
import { ControllerAdapter } from '@worldsibu/convector-core';
import { Injectable } from '@angular/core';

const routes = [
  {
      "function": "init",
      "verb": "post",
      "controller": "fabcar"
  },
  {
      "function":"get",
      "verb":"get",
      "controller": "fabcar"
  },
  {
      "function":"getAll",
      "verb":"get",
      "controller": "fabcar"
  },
  {
      "function":"create",
      "verb":"post",
      "controller": "fabcar",
      "params": ["car"]
  },
  {
      "function":"changeOwner",
      "verb":"post",
      "controller": "fabcar",
      "params": ["id","owner"]
  }
];

@Injectable({
  providedIn: 'root'
})
export class BrowserControllerAdapterService implements ControllerAdapter {
  public url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  public async invoke(
    controller: string,
    name: string,
    config: any = {},
    ...args: any[]
  ) {
    const route = routes.find(r => r.function === name && r.controller === controller);

    if (!route) {
      throw new Error('No route found');
    }

    let options: any = {};

    if (args.length && route.params) {
      const objectParams = route.params.reduce((obj, key, index) => ({
        ...obj,
        [key]: args[index]
      }), {});

      if (route.verb === 'get') {
        options.params = objectParams;
      } else if (route.verb === 'post') {
        options = objectParams;
      }
    }

    return this.http[route.verb](`${this.url}/${route.controller}/${route.function}`, options).toPromise();
  }
}
