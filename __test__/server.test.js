"use strict";


const server=require('../server');
const supertest=require('supertest');

const req=supertest(server.app);

describe( 'server live test', () => {
    it( 'home post', async () => {
        const res=await req.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual("{\"message\":\"Home Post\",\"code\":200}")
    } );
    it( 'Not found 404', async()=> {
        const res = await req.get('/hamzah');
        expect(res.status).toEqual(404);
    } );
    it('Not found 500', async()=>{
        const res =await req.get('/post/0');
        expect(res.status).toEqual(500);
    })
    it("not found page", async () => {
        const response = await req.get("/scs");
        expect(response.status).toBe(404);
      });
      it( '404', async () => {
        const res = await req.get( '/posts' );
        expect(res.status).toEqual(404);
    } );
    });
