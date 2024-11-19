const fortunes = require("./fortunes.json")
//10 total forunes in there


const theCookieBookie = () => {
    const lucky = Math.floor(Math.random() * 10) + 1;
    const yourFortune = fortunes[lucky];

return yourFortune;
}

module.exports = theCookieBookie;