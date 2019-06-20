import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let frenchHornBuffer = { type: "french-horn", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

frenchHornBuffer.A[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/A0.mp3'))).data
frenchHornBuffer.A[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/A2.mp3'))).data

frenchHornBuffer.C[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/C1.mp3'))).data
frenchHornBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/C3.mp3'))).data

frenchHornBuffer.D[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/D2.mp3'))).data
frenchHornBuffer.D[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/D4.mp3'))).data

frenchHornBuffer.Ds[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/Ds1.mp3'))).data

frenchHornBuffer.F[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/F2.mp3'))).data
frenchHornBuffer.F[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/F4.mp3'))).data

frenchHornBuffer.G[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/french-horn/G1.mp3'))).data

const frenchHorn = new Tone.Sampler().toMaster()

let keys = Object.keys(frenchHornBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < frenchHornBuffer[keys[i]].length; j++) {
        frenchHorn.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(frenchHornBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { frenchHornBuffer, frenchHorn }