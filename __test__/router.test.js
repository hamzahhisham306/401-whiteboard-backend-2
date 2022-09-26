"use strict";

const server=require('../server');
const supertest=require('supertest');

const req=supertest(server.app);

describe('Get post ', () => {
    // it('get all posts from DB', async()=> {
    //     const res = await req.get('/post',{},{
    //         headers:{
    //             Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbXphaCIsImlhdCI6MTY2Mzc3MzYyMH0.I5gtfVmwqnb7yBOZwzxD0kU-v04gsebUi9QPTOx6VDw'
    //         }
    //     });
    //     expect(res.status).toEqual(200);
    // });
    // it('Select one Post', async ()=> {
    //     const res = await req.get('/post/4');
    //     expect(res.status).toEqual(200);
    //     expect(res.text).toEqual('{"id":4,"name":"Mohmad","age":"22","createdAt":"2022-09-11T21:43:43.277Z","updatedAt":"2022-09-11T21:43:43.277Z"}'
            
    //         );
    //        });

     it('Get comment',async()=>{
        const res=await req.get('/comment');
        expect(res.status).toEqual(200);
     });   
     it('Get post and commment', async()=>{
        const res=await req.get('/postWitheComment');
        expect(res.status).toEqual(200)
     });

});

describe('create a new post', () => {
// it('new post', async () => {
//     const res =  await req.post('/post').send({
//         name: 'hamzah',
//         age: 22
//     })
//     expect(res.status).toEqual(201);
// });
it('new comment', async () => {
    const res =  await req.post('/comment').send({
        descrption: 'I am 80 years old',
        Nationality: "Plastain",
        postID:3
    })
    expect(res.status).toEqual(201);
});



});

describe('delete post', () => {
    // it('delete post from DB', async () => {
    //     const res = await req.delete('/post/1');
    //     expect(res.status).toEqual(204);
    //     expect(res.text).toEqual('');
    // });
    it('delete Comment', async () => {
        const res = await req.delete('/comment/9');
        expect(res.status).toEqual(204);
        expect(res.text).toEqual('');
    });
});

describe('Update route', () => {
    // it('update any post', async () => {
    //     const res =  await req.put('/post/3').send({
    //         name: 'Waleed',
    //         age: 28
    //     });
    //     expect(res.status).toEqual(200);
    //     });
        it( 'Not found 404', async()=> {
            const res = await req.get('/hamzah');
            expect(res.status).toEqual(404);
        });
        it('update any comment', async () => {
            const res =  await req.put('/comment/10').send({
                descrption: 'I am 65 years old',
                Nationality: "Plastain",
                postID:20
            });
            expect(res.status).toEqual(202);
    
      })
});

describe( 'signup', () => {
    it( 'singup with uncorrect email', async () => {
        const res = await req.post( '/signup' ).send( {
            username: 'hamzah hisham ail',
            email: 'hamzah.net',
            password: 'hamzah'
        } );
        expect( res.status ).toEqual( 409 );
    } );

    it( 'when username exist', async () => {
        const res = await req.post('/signup').send( {
            username: 'hamzah hisham',
            email: 'hamzahhisham3016@gmail.com',
            password: 'hamzah123456'
        } );
        expect( res.status ).toEqual( 409 );
    } );

    it( 'when email exist', async () => {
        const res = await req.post( '/signup' ).send( {
            username: 'hamzah ail',
            email: 'hamzahhishan306@gmail.com',
            password: 'hamzah123456'
        } );
        expect( res.status ).toEqual( 409 );
    } );
} );




