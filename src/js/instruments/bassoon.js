import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let bassoonBuffer = { type: "bassoon", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

bassoonBuffer.A[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/A1.mp3'))).data
bassoonBuffer.A[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/A2.mp3'))).data
bassoonBuffer.A[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/A3.mp3'))).data

bassoonBuffer.C[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/C2.mp3'))).data
bassoonBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/C3.mp3'))).data
bassoonBuffer.C[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/C4.mp3'))).data

bassoonBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/E3.mp3'))).data

bassoonBuffer.G[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/G1.mp3'))).data
bassoonBuffer.G[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/G2.mp3'))).data
bassoonBuffer.G[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bassoon/G3.mp3'))).data

const bassoon = new Tone.Sampler().toMaster()

let keys = Object.keys(bassoonBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < bassoonBuffer[keys[i]].length; j++) {
        bassoon.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(bassoonBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { bassoonBuffer, bassoon }