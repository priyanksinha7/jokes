// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log("Response", res)
//         return res.json();
//     })
//     .then(data => {
//         console.log("hey");
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OHH P", e)
// //     })
// const featch = async() => {
//     try {
//         const dat = await fetch('https://api.cryonator.com/api/full/btc-usd');
//         const data = await dat.json();

//         console.log(data.ticker.price);
//     } catch (e) {
//         console.log("something went wrong", e);
//     }
// }
// featch;
// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("xghz", err);
//     })
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const addnewjoke = async() => {
    const joketext = await gdj();
    const newLI = document.createElement('LI');
    newLI.append(joketext);
    jokes.append(newLI);
}
const gdj = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "sorry no jokes"
    }
}
button.addEventListener('click', addnewjoke);