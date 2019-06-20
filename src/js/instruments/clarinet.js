import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let clarinetBuffer = { type: "clarinet", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

clarinetBuffer.As[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/As2.mp3'))).data
clarinetBuffer.As[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/As3.mp3'))).data
clarinetBuffer.As[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/As4.mp3'))).data

clarinetBuffer.D[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/D2.mp3'))).data
clarinetBuffer.D[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/D3.mp3'))).data
clarinetBuffer.D[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/D4.mp3'))).data
clarinetBuffer.D[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/D5.mp3'))).data

clarinetBuffer.F[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/F2.mp3'))).data
clarinetBuffer.F[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/F3.mp3'))).data
clarinetBuffer.F[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/F4.mp3'))).data

clarinetBuffer.Fs[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/clarinet/Fs5.mp3'))).data

const clarinet = new Tone.Sampler().toMaster()

let keys = Object.keys(clarinetBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < clarinetBuffer[keys[i]].length; j++) {
        clarinet.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(clarinetBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { clarinetBuffer, clarinet }