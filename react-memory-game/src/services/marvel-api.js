const md5 = require('md5');
const BASE_URL =  "http://gateway.marvel.com/";

function getChars() {
    const ts = new Date().getTime();
    const pubby = "bf2c6e8a34dadf498e632240c2612e4d";
    const privy = "ebb0bcda2b3f2aed63fd969f105d315053158d9d";
    const hash = md5(ts + privy + pubby);
    const charURI = "v1/public/characters";

    let path = `${BASE_URL}${charURI}?ts=${ts}&apikey=${pubby}&hash=${hash}`
    console.log(hash);
    console.log(path);
    return fetch(path, {
        mode: "cors"
    }).then(response => response.json());
}

export {getChars};