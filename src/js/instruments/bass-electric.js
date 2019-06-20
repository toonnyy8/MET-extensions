import "@babel/polyfill"

import fs from 'fs'
import * as Tone from "tone"

let bassElectricBuffer = { type: "bass-electric", A: [], As: [], B: [], C: [], Cs: [], D: [], Ds: [], E: [], F: [], Fs: [], G: [], Gs: [] }

bassElectricBuffer.As[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/As2.mp3'))).data
bassElectricBuffer.As[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/As3.mp3'))).data
bassElectricBuffer.As[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/As4.mp3'))).data
bassElectricBuffer.As[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/As5.mp3'))).data

bassElectricBuffer.Cs[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/Cs2.mp3'))).data
bassElectricBuffer.Cs[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/Cs3.mp3'))).data
bassElectricBuffer.Cs[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/Cs4.mp3'))).data
bassElectricBuffer.Cs[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/Cs5.mp3'))).data
bassElectricBuffer.Cs[6] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/Cs6.mp3'))).data

bassElectricBuffer.E[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/E2.mp3'))).data
bassElectricBuffer.E[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/E3.mp3'))).data
bassElectricBuffer.E[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/E4.mp3'))).data
bassElectricBuffer.E[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/E5.mp3'))).data

bassElectricBuffer.G[2] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/G2.mp3'))).data
bassElectricBuffer.G[3] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/G3.mp3'))).data
bassElectricBuffer.G[4] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/G4.mp3'))).data
bassElectricBuffer.G[5] = JSON.parse(JSON.stringify(fs.readFileSync(__dirname + '../../../../samples/bass-electric/G5.mp3'))).data

const bassElectric = new Tone.Sampler().toMaster()

let keys = Object.keys(bassElectricBuffer)
for (let i = 1; i < keys.length; i++) {
    for (let j = 0; j < bassElectricBuffer[keys[i]].length; j++) {
        bassElectric.add(`${keys[i][0]}${keys[i][1] == "s" ? "#" : ""}${j}`, URL.createObjectURL(new Blob([new Uint8Array(bassElectricBuffer[keys[i]][j])], { type: 'audio/mp3' })))
    }
}

export { bassElectricBuffer, bassElectric }