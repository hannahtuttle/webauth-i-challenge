const server = require('./server.js')

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => console.log(`....Listening on ${PORT}....`))