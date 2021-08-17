const app = require('express')();


app.get('/api/random/:max', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        number: Math.floor(Math.random() * req.params.max)
    }));
})

app.get('/api/random', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ number: Math.floor(Math.random() * 1023 }));
})

app.post('/api/word/:arg', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const word = req.params.arg;
    const count = word.toLowerCase().match(/[aeiou]/gi).length
    res.end(JSON.stringify({ vowel_count: count }));
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
