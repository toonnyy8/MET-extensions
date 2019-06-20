import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let contrabassBuffer = { type: "contrabass", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

contrabassBuffer.A[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/A1.mp3'))).data

contrabassBuffer.As[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/As0.mp3'))).data

contrabassBuffer.B[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/B2.mp3'))).data

contrabassBuffer.C[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/C1.mp3'))).data

contrabassBuffer.Cs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/Cs2.mp3'))).data

contrabassBuffer.D[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/D1.mp3'))).data

contrabassBuffer.E[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/E1.mp3'))).data
contrabassBuffer.E[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/E2.mp3'))).data

contrabassBuffer.Fs[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/Fs0.mp3'))).data
contrabassBuffer.Fs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/Fs1.mp3'))).data

contrabassBuffer.G[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/G0.mp3'))).data

contrabassBuffer.Gs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/Gs1.mp3'))).data
contrabassBuffer.Gs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/contrabass/Gs2.mp3'))).data

const contrabass = new Tone.Sampler().toMaster()

let keys = Object.keys(contrabassBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < contrabassBuffer[keys[i]].length; j++) {
        contrabass.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(contrabassBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { contrabassBuffer, contrabass }