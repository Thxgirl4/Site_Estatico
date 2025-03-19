const express = require("express");
const app = express();
const port = 4000;

app.get("/pagina", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In finibus magna eros, ut hendrerit tortor aliquam eu. 
                Morbi libero augue, ornare ac mauris vel, lobortis malesuada justo. Sed blandit est id tincidunt sollicitudin. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit interdum nunc, in pharetra augue sodales sed. Sed tellus lectus, consequat vel venenatis et, euismod at orci. 
                Aliquam faucibus ligula sed justo gravida imperdiet. 
            </div>
        </body>
    </html>`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
