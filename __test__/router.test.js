"use strict";

const server=require('../server');
const supertest=require('supertest');

const req=supertest(server.app);

describe('Get All post ', () => {
    it('get all posts from DB', async()=> {
        const res = await req.get('/post');
        expect(res.status).toEqual(200);
    });
    it('Select any  Post', async ()=> {
        const res = await req.get('/post/4');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"id":4,"name":"Mohmad","age":"22","createdAt":"2022-09-11T21:43:43.277Z","updatedAt":"2022-09-11T21:43:43.277Z"}'
            
            );
           });
});

describe('create a new post', () => {
it('new post', async () => {
    const res =  await req.post('/post').send({
        name: 'hamzah',
        age: 22
    })
    expect(res.status).toEqual(201);
});
});

describe('delete any post you want', () => {
    it('delete post from DB', async () => {
        const res = await req.delete('/post/1');
        expect(res.status).toEqual(204);
        expect(res.text).toEqual('');
    });
});

describe('Update route', () => {
    it('update any post', async () => {
        const res =  await req.put('/post/3').send({
            name: 'Waleed',
            age: 28
        });
        expect(res.status).toEqual(200);
        });
        it( 'Not found 404', async()=> {
            const res = await req.get('/hamzah');
            expect(res.status).toEqual(404);
        } );
});