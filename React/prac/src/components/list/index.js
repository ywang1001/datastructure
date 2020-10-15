import React, {Component} from 'react';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

class NetWork{
    static itPath = 'https://api.github.com/users';
    static teamPath = `${NetWork.itPath}`;
    static userPath = `${Netword.itPath}`;

    static async fetch(url, init){
       const reqestConfig = {
           url,
           headers: {
               "X-Requested-Width" : "XMLHttpRequest",
           },
           method: "GET",
           ...init
       }

       try{
         const response = await axios(reqestConfig);
         if(response.status === 200) {
             
         }
       }catch{

       }
    }
}