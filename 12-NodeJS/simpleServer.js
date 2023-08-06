const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    res.end('Hello, this is a simple request!');
    /*
    *Ending the response more than once is not recommended as it leads to ERR_STREAM_WRITE_AFTER_END errors
    and inconsistent behavior in the client application.
    Additionally, it may cause potential resource leaks and make the code harder to maintain and debug.
    Ensure the response is ended once, at the proper time in the code.
    */
    if (req.method === 'GET') {
        if (pathname === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, this is a simple GET request!');
        } else if (pathname === '/about') {
            // Handling simple GET request for /about
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the about page.');
        } else if (pathname === '/message') {
            // Custom GET request to display a message with a string parameter
            const message = query.message || 'No message provided!';
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Your message: ${message}`);
        } else {
            // Handling 404 Not Found for other routes
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    } else if (req.method === 'POST') {
        // Handling simple POST request with parameters
        if (pathname === '/submit') {
            let body = '';

            req.on('data', (chunk) => {
                // Accumulate the data from the request
                body += chunk;
            });

            req.on('end', () => {
                // Process the data after the request is complete
                const parsedData = JSON.parse(body);
                const { name, age } = parsedData;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: `Hello, ${name}! You are ${age} years old.` }));
            });
        } else if (pathname === '/postMessage') {
            // Custom POST request to display a message with an object containing name and age
            let body = '';

            req.on('data', (chunk) => {
                // Accumulate the data from the request
                body += chunk;
            });

            req.on('end', () => {
                // Process the data after the request is complete
                const parsedData = JSON.parse(body);
                const { name, age } = parsedData;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Your message: Hello, ${name}! You are ${age} years old.`);
            });
        } else {
            // Handling 404 Not Found for other routes
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    }
});


server.listen(3000, () => {
    console.log('Server started on port 3000');
});