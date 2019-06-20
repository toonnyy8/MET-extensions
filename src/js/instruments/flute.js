import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let fluteBuffer = { type: "flute", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

fluteBuffer.A[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/A3.mp3'))).data
fluteBuffer.A[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/A4.mp3'))).data
fluteBuffer.A[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/A5.mp3'))).data

fluteBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/C3.mp3'))).data
fluteBuffer.C[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/C4.mp3'))).data
fluteBuffer.C[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/C5.mp3'))).data
fluteBuffer.C[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/C6.mp3'))).data

fluteBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/E3.mp3'))).data
fluteBuffer.E[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/E4.mp3'))).data
fluteBuffer.E[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/flute/E5.mp3'))).data

const flute = new Tone.Sampler().toMaster()

let keys = Object.keys(fluteBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < fluteBuffer[keys[i]].length; j++) {
        flute.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(fluteBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { fluteBuffer, flute }