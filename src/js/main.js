import "@babel/polyfill"

import * as Tone from "tone"

import * as Piano from "./instruments/piano"
import * as BassElectric from "./instruments/bass-electric"
import * as Bassoon from "./instruments/bassoon"
import * as Cello from "./instruments/cello"
import * as Clarinet from "./instruments/clarinet"
import * as Contrabass from "./instruments/contrabass"
import * as Flute from "./instruments/flute"
import * as FrenchHorn from "./instruments/french-horn"
import * as GuitarAcoustic from "./instruments/guitar-acoustic"


Tone.Buffer.on('load', () => {
    Tone.Transport.schedule(function (time) {
        Piano.piano.triggerAttack("A4")
        console.log(Piano.pianoBuffer)
    }, 0)

    Tone.Transport.schedule(function (time) {
        BassElectric.bassElectric.triggerAttack("A#4")
        console.log(BassElectric.bassElectricBuffer)
    }, 4)

    Tone.Transport.schedule(function (time) {
        Bassoon.bassoon.triggerAttack("C4")
        console.log(Bassoon.bassoonBuffer)
    }, 8)

    Tone.Transport.schedule(function (time) {
        Cello.cello.triggerAttack("D3")
        console.log(Cello.celloBuffer)
    }, 12)

    Tone.Transport.schedule(function (time) {
        Clarinet.clarinet.triggerAttack("F4")
        console.log(Clarinet.clarinetBuffer)
    }, 16)

    Tone.Transport.schedule(function (time) {
        Contrabass.contrabass.triggerAttack("F#1")
        console.log(Contrabass.contrabassBuffer)
    }, 20)

    Tone.Transport.schedule(function (time) {
        Flute.flute.triggerAttack("E4")
        console.log(Flute.fluteBuffer)
    }, 24)

    Tone.Transport.schedule(function (time) {
        FrenchHorn.frenchHorn.triggerAttack("F4")
        console.log(FrenchHorn.frenchHornBuffer)
    }, 28)

    Tone.Transport.schedule(function (time) {
        GuitarAcoustic.guitarAcoustic.triggerAttack("F3")
        console.log(GuitarAcoustic.guitarAcousticBuffer)
    }, 32)

    Tone.Transport.start()
})