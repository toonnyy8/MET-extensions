import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let guitarAcousticBuffer = { type: "guitar-acoustic", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }


guitarAcousticBuffer.A[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/A1.mp3'))).data
guitarAcousticBuffer.A[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/A2.mp3'))).data
guitarAcousticBuffer.A[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/A3.mp3'))).data

guitarAcousticBuffer.As[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/As1.mp3'))).data
guitarAcousticBuffer.As[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/As2.mp3'))).data
guitarAcousticBuffer.As[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/As3.mp3'))).data

guitarAcousticBuffer.B[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/B1.mp3'))).data
guitarAcousticBuffer.B[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/B2.mp3'))).data
guitarAcousticBuffer.B[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/B3.mp3'))).data

guitarAcousticBuffer.C[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/C2.mp3'))).data
guitarAcousticBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/C3.mp3'))).data
guitarAcousticBuffer.C[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/C4.mp3'))).data

guitarAcousticBuffer.Cs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Cs2.mp3'))).data
guitarAcousticBuffer.Cs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Cs3.mp3'))).data
guitarAcousticBuffer.Cs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Cs4.mp3'))).data

guitarAcousticBuffer.D[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/D1.mp3'))).data
guitarAcousticBuffer.D[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/D2.mp3'))).data
guitarAcousticBuffer.D[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/D3.mp3'))).data
guitarAcousticBuffer.D[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/D4.mp3'))).data

guitarAcousticBuffer.Ds[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Ds1.mp3'))).data
guitarAcousticBuffer.Ds[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Ds2.mp3'))).data
guitarAcousticBuffer.Ds[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Ds3.mp3'))).data

guitarAcousticBuffer.E[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/E1.mp3'))).data
guitarAcousticBuffer.E[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/E2.mp3'))).data
guitarAcousticBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/E3.mp3'))).data

guitarAcousticBuffer.F[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/F1.mp3'))).data
guitarAcousticBuffer.F[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/F2.mp3'))).data
guitarAcousticBuffer.F[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/F3.mp3'))).data

guitarAcousticBuffer.Fs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Fs1.mp3'))).data
guitarAcousticBuffer.Fs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Fs2.mp3'))).data
guitarAcousticBuffer.Fs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Fs3.mp3'))).data

guitarAcousticBuffer.G[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/G1.mp3'))).data
guitarAcousticBuffer.G[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/G2.mp3'))).data
guitarAcousticBuffer.G[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/G3.mp3'))).data

guitarAcousticBuffer.Gs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Gs1.mp3'))).data
guitarAcousticBuffer.Gs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Gs2.mp3'))).data
guitarAcousticBuffer.Gs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/guitar-acoustic/Gs3.mp3'))).data

const guitarAcoustic = new Tone.Sampler().toMaster()

let keys = Object.keys(guitarAcousticBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < guitarAcousticBuffer[keys[i]].length; j++) {
        guitarAcoustic.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(guitarAcousticBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { guitarAcousticBuffer, guitarAcoustic }