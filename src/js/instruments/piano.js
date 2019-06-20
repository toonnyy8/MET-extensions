import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let pianoBuffer = { type: "piano", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

pianoBuffer.A[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A0.mp3'))).data
pianoBuffer.A[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A1.mp3'))).data
pianoBuffer.A[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A2.mp3'))).data
pianoBuffer.A[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A3.mp3'))).data
pianoBuffer.A[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A4.mp3'))).data
pianoBuffer.A[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A5.mp3'))).data
pianoBuffer.A[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/A6.mp3'))).data

pianoBuffer.As[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As0.mp3'))).data
pianoBuffer.As[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As1.mp3'))).data
pianoBuffer.As[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As2.mp3'))).data
pianoBuffer.As[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As3.mp3'))).data
pianoBuffer.As[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As4.mp3'))).data
pianoBuffer.As[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As5.mp3'))).data
pianoBuffer.As[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/As6.mp3'))).data

pianoBuffer.B[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B0.mp3'))).data
pianoBuffer.B[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B1.mp3'))).data
pianoBuffer.B[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B2.mp3'))).data
pianoBuffer.B[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B3.mp3'))).data
pianoBuffer.B[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B4.mp3'))).data
pianoBuffer.B[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B5.mp3'))).data
pianoBuffer.B[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/B6.mp3'))).data

pianoBuffer.C[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C0.mp3'))).data
pianoBuffer.C[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C1.mp3'))).data
pianoBuffer.C[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C2.mp3'))).data
pianoBuffer.C[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C3.mp3'))).data
pianoBuffer.C[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C4.mp3'))).data
pianoBuffer.C[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C5.mp3'))).data
pianoBuffer.C[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/C6.mp3'))).data

pianoBuffer.Cs[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs0.mp3'))).data
pianoBuffer.Cs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs1.mp3'))).data
pianoBuffer.Cs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs2.mp3'))).data
pianoBuffer.Cs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs3.mp3'))).data
pianoBuffer.Cs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs4.mp3'))).data
pianoBuffer.Cs[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs5.mp3'))).data
pianoBuffer.Cs[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Cs6.mp3'))).data

pianoBuffer.D[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D0.mp3'))).data
pianoBuffer.D[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D1.mp3'))).data
pianoBuffer.D[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D2.mp3'))).data
pianoBuffer.D[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D3.mp3'))).data
pianoBuffer.D[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D4.mp3'))).data
pianoBuffer.D[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D5.mp3'))).data
pianoBuffer.D[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/D6.mp3'))).data

pianoBuffer.Ds[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds0.mp3'))).data
pianoBuffer.Ds[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds1.mp3'))).data
pianoBuffer.Ds[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds2.mp3'))).data
pianoBuffer.Ds[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds3.mp3'))).data
pianoBuffer.Ds[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds4.mp3'))).data
pianoBuffer.Ds[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds5.mp3'))).data
pianoBuffer.Ds[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Ds6.mp3'))).data

pianoBuffer.E[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E0.mp3'))).data
pianoBuffer.E[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E1.mp3'))).data
pianoBuffer.E[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E2.mp3'))).data
pianoBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E3.mp3'))).data
pianoBuffer.E[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E4.mp3'))).data
pianoBuffer.E[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E5.mp3'))).data
pianoBuffer.E[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/E6.mp3'))).data

pianoBuffer.F[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F0.mp3'))).data
pianoBuffer.F[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F1.mp3'))).data
pianoBuffer.F[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F2.mp3'))).data
pianoBuffer.F[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F3.mp3'))).data
pianoBuffer.F[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F4.mp3'))).data
pianoBuffer.F[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F5.mp3'))).data
pianoBuffer.F[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/F6.mp3'))).data

pianoBuffer.Fs[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs0.mp3'))).data
pianoBuffer.Fs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs1.mp3'))).data
pianoBuffer.Fs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs2.mp3'))).data
pianoBuffer.Fs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs3.mp3'))).data
pianoBuffer.Fs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs4.mp3'))).data
pianoBuffer.Fs[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs5.mp3'))).data
pianoBuffer.Fs[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Fs6.mp3'))).data

pianoBuffer.G[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G0.mp3'))).data
pianoBuffer.G[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G1.mp3'))).data
pianoBuffer.G[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G2.mp3'))).data
pianoBuffer.G[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G3.mp3'))).data
pianoBuffer.G[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G4.mp3'))).data
pianoBuffer.G[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G5.mp3'))).data
pianoBuffer.G[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/G6.mp3'))).data

pianoBuffer.Gs[0] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs0.mp3'))).data
pianoBuffer.Gs[1] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs1.mp3'))).data
pianoBuffer.Gs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs2.mp3'))).data
pianoBuffer.Gs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs3.mp3'))).data
pianoBuffer.Gs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs4.mp3'))).data
pianoBuffer.Gs[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs5.mp3'))).data
pianoBuffer.Gs[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/piano/Gs6.mp3'))).data

const piano = new Tone.Sampler().toMaster()

let keys = Object.keys(pianoBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < pianoBuffer[keys[i]].length; j++) {
        piano.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(pianoBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { pianoBuffer, piano }