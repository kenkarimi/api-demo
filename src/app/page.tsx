'use client'

import React from 'react';
import Cookies from 'js-cookie';

import { FetchOptions } from './_utils/GetInterfacesAndTypes';
import { AccountRequired } from './_utils/GetEnumerations';

const Home = () => {

  const options: FetchOptions = {
    method: 'GET',
    cache: 'no-store', //because its a sensitive api route, we don't want to cache it or have the resource returned as a result of this request cached.
    headers: {
      Accept: '*/*'
    }
  }
  fetch('/api/home', options)
  .then( (res: any) => res.json())
  .then( (data: any) => {
    if(data.success){
      console.log('MESSAGE 1a', data.message);
    } else {
      console.log('MESSAGE 1b', data.message);
    }
  });

  const options2: FetchOptions = {
    method: 'POST',
    cache: 'no-store', //because its a sensitive api route, we don't want to cache it or have the resource returned as a result of this request cached.
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 'azDexdFeXslMcy',
      name: 'John Doe',
      account: AccountRequired.Customer
    })
  }
  fetch('/api/post', options2)
  .then( (res: any) => res.json())
  .then( (data: any) => {
    if(data.success){
      console.log('MESSAGE 2a', data.message);
    } else {
      console.log('MESSAGE 2b', data.message);
    }
  });

  const options3: FetchOptions = {
    method: 'PUT',
    cache: 'no-store', //because its a sensitive api route, we don't want to cache it or have the resource returned as a result of this request cached.
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Jane Doe',
      account: AccountRequired.Admin
    })
  } //azDexdFeXslMcy
  fetch('/api/put/15', options3)
  .then( (res: any) => res.json())
  .then( (data: any) => {
    if(data.success){
      console.log('MESSAGE 3a', data.message);
      const cookie_value: string | undefined = Cookies.get('next_response_cookie');
      if(cookie_value != undefined){
        console.log('COOKIE', cookie_value);
      } else {
        console.log('Cookie unavailable...');
      }
      //NB: Working with next/headers to get headers has to be done in a react server component.
    } else {
      console.log('MESSAGE 3b', data.message);
    }
  });

  return (
    <div>
      <h1>Home Page...</h1>
    </div>
  )
}

export default Home;