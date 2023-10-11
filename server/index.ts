import Fastify from "fastify";
import nextjs from '@fastify/nextjs'

const isDev = process.env.NODE_ENV !== 'production';
const fastify = Fastify({ pluginTimeout: isDev ? 600_000 : undefined });

fastify
    .register(nextjs, {dev: true})
    .register(instance=>{
        instance.next("/*")
    })
    // .after(()=>{
    //     fastify.next("/*")
    // })

fastify.listen({
    port: 3000
}, err => {
    if (err) throw err
    console.log('Server listening on http://localhost:3000')
})
