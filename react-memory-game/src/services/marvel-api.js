import underscore from 'underscore';
const md5 = require('md5');
const BASE_URL =  "http://gateway.marvel.com/";

const ts = new Date().getTime();
const pubby = "bf2c6e8a34dadf498e632240c2612e4d";
const privy = "ebb0bcda2b3f2aed63fd969f105d315053158d9d";
const hash = md5(ts + privy + pubby);
const charURI = "v1/public/characters";


let path = `${BASE_URL}${charURI}?ts=${ts}&apikey=${pubby}&hash=${hash}&limit=10`

// async function getSglChar(id) {
//     const charID = "1011334";
//     let charPath = `${path}/${charID}`
//     return fetch(charPath, {
//         mode: "cors"
//     }).then(response => response.json())
// }

async function getChars() {
    return fetch(path, {
        mode: "cors"
    }).then(response => response.json())
}


function getCharFormattedArray(arr) {
    const charArr = [];
            arr.map(charSgl => {
            let charObj = {
                id: charSgl.id,
                name: charSgl.name,
                thumbnail: `${charSgl.thumbnail.path}/standard_medium.${charSgl.thumbnail.extension}`
            }
            charArr.push(charObj);
            charArr.push(charObj);
        });
    return charArr;
}

function shuffle(arr) {
    return underscore.shuffle(arr);
}

export default {
    getCharFormattedArray,
    getChars,
    shuffle
};