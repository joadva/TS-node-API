export const options = {
    definition : {
        openapi: "3.0.0",
        info: {
            title: 'Tasks API',
            version: '1.0.0',
            description : " una api Simple en TS"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}