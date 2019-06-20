import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let celloBuffer = { type: "cello", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

celloBuffer.A[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/A2.mp3'))).data
celloBuffer.A[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/A3.mp3'))).data
celloBuffer.A[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/A4.mp3'))).data

celloBuffer.As[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/As2.mp3'))).data
celloBuffer.As[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/As3.mp3'))).data
celloBuffer.As[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/As4.mp3'))).data

celloBuffer.B[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/B2.mp3'))).data
celloBuffer.B[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/B3.mp3'))).data
celloBuffer.B[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/B4.mp3'))).data

celloBuffer.C[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/C2.mp3'))).data
celloBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/C3.mp3'))).data
celloBuffer.C[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/C4.mp3'))).data
celloBuffer.C[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/C5.mp3'))).data

celloBuffer.Cs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Cs3.mp3'))).data
celloBuffer.Cs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Cs4.mp3'))).data

celloBuffer.D[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/D2.mp3'))).data
celloBuffer.D[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/D3.mp3'))).data
celloBuffer.D[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/D4.mp3'))).data

celloBuffer.Ds[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Ds2.mp3'))).data
celloBuffer.Ds[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Ds3.mp3'))).data
celloBuffer.Ds[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Ds4.mp3'))).data

celloBuffer.E[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/E2.mp3'))).data
celloBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/E3.mp3'))).data
celloBuffer.E[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/E4.mp3'))).data

celloBuffer.F[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/F2.mp3'))).data
celloBuffer.F[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/F3.mp3'))).data
celloBuffer.F[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/F4.mp3'))).data

celloBuffer.Fs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Fs3.mp3'))).data
celloBuffer.Fs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Fs4.mp3'))).data

celloBuffer.G[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/G2.mp3'))).data
celloBuffer.G[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/G3.mp3'))).data
celloBuffer.G[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/G4.mp3'))).data

celloBuffer.Gs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Gs2.mp3'))).data
celloBuffer.Gs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Gs3.mp3'))).data
celloBuffer.Gs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/cello/Gs4.mp3'))).data

const cello = new Tone.Sampler().toMaster()

let keys = Object.keys(celloBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < celloBuffer[keys[i]].length; j++) {
        cello.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(celloBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { celloBuffer, cello }