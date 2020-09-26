const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));