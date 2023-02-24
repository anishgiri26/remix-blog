const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function seed() {
    await Promise.all(
        getPosts().map(post => {
            return db.post.create({ data : post })
        })
    )
}

seed()

function getPosts () {
    return [
        {
            title: 'Prisma makes databases easy',
            body: 'Prisma is a modern database toolkit for Node.js and TypeScript. It makes working with databases easy by exposing a powerful query builder for JavaScript/TypeScript & GraphQL.',
        },
        {
            title: 'Prisma is next-gen ORM',
            body: 'ORMs are tools that help you work with databases. Prisma is an ORM for Node.js and TypeScript. It makes working with databases easy by exposing a powerful query builder for JavaScript/TypeScript & GraphQL.',
        },
        {
            title: 'Prisma is open-source',
            body: 'Open source is a development method where everyone can inspect, modify, and enhance the software. Prisma is open-source and licensed under the Apache 2.0 License.',
        }
    ]
}