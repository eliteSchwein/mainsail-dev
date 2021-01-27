<style>
    .webcamImage {
        width: 100%;
    }
</style>

<template>
    <v-card>
        <v-toolbar flat dense >
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-led-off</v-icon>Neopixel</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small color="primary" @click="turnOff()">
                <v-icon>mdi-power</v-icon>Off
            </v-btn>
        </v-toolbar>
        <v-card-text class="px-0 py-0">
            <v-container class="px-0">
                <v-row align="center" class="text-center">
                    <v-col class="py-2 px-5 pr-0" style="margin-left: 5px">
                        <v-color-picker
                            dot-size="25"
                            hide-mode-switch
                            hide-inputs
                            v-model="color"
                        ></v-color-picker>
                    </v-col>
                    <v-col class="pl-2 py-3 pr-5">
                        <v-row align="center" class="text-center">
                            <v-col class="px-2 py-2 pb-3 neopixel-swatchesonly">
                                <v-color-picker
                                    dot-size="1"
                                    hide-canvas
                                    hide-inputs
                                    hide-mode-switch
                                    show-swatches
                                    swatches-max-height="180"
                                    v-model="color"
                                    :swatches="swatches"
                                ></v-color-picker>
                            </v-col>
                        </v-row>
                        <v-row align="center" class="text-center">
                            <v-col class="px-2 py-2">
                                <v-btn fab x-small color="info" @click="addSwatch()" :disabled="checkSwatch">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col class="px-2 py-2">
                                <v-btn fab x-small color="info" @click="removeSwatch()" :disabled="!checkSwatch">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import {bus} from "../../main";
    
    export default {
        components: {

        },
        data: () => ({
            pixelscolor: "#00000000"

        }),
        computed: {
            checkSwatch:{
                get(){
                    return this.swatches.toString().includes(this.pixelscolor)
                }
            },
            color: {
                get() {
                    return this.pixelscolor;
                },
                set(color) {
                    var ledcolor = this.hexAToRGBA(color);
                    this.executeNeopixel(ledcolor);
                    return this.pixelscolor=color;
                }
            },
            swatches: {
                get() {
                    return this.$store.state.gui.neopixel.swatches;
                }
            },

        },
        methods: {
            turnOff(){
                this.color="#00000000"
            },
            removeSwatch(){
                const splitNumb = 3
                var currentSwatches = this.swatches.toString()
                var firstSplit = currentSwatches.split(",")
                var index = firstSplit.indexOf(this.pixelscolor)
                firstSplit.splice(index,1)
                var entriesNumb = (firstSplit.length/3+0.2).toFixed(0)
                var newSwatches = []
                for (let i = 0; i < entriesNumb; i++) {
                    var colorArray = []
                    for (let ic = (i * splitNumb); ic < splitNumb + (splitNumb * i); ic++) {
                        if(typeof(firstSplit[ic])!="undefined"){
                            colorArray.push(firstSplit[ic])
                        }
                    }
                    newSwatches.push(colorArray)
                }
                var swatches = newSwatches
                this.$store.dispatch('gui/setSettings', { neopixel: { swatches } });

            },
            addSwatch(){
                const splitNumb = 3
                var currentSwatches = this.swatches.toString()
                currentSwatches=currentSwatches.concat(","+this.pixelscolor)
                var firstSplit = currentSwatches.split(",")
                var entriesNumb = (firstSplit.length/3+0.2).toFixed(0)
                var newSwatches = []
                for (let i = 0; i < entriesNumb; i++) {
                    var colorArray = []
                    for (let ic = (i * splitNumb); ic < splitNumb + (splitNumb * i); ic++) {
                        if(typeof(firstSplit[ic])!="undefined"){
                            colorArray.push(firstSplit[ic])
                        }
                    }
                    newSwatches.push(colorArray)
                }
                var swatches = newSwatches
                this.$store.dispatch('gui/setSettings', { neopixel: { swatches } });
            },
            executeNeopixel:function(color){
                this.$socket.sendObj('printer.gcode.script', { script: 'SET_LED LED='+this.$store.state.gui.neopixel.stripname+' RED='+color[0]+' GREEN='+color[1]+' BLUE='+color[2] });
            },
            hexAToRGBA:function(h) {

                let r = 0, g = 0, b = 0, a = 1;

                if (h.length == 5) {
                    r = "0x" + h[1] + h[1];
                    g = "0x" + h[2] + h[2];
                    b = "0x" + h[3] + h[3];
                    a = "0x" + h[4] + h[4];

                } else if (h.length == 9) {
                    r = "0x" + h[1] + h[2];
                    g = "0x" + h[3] + h[4];
                    b = "0x" + h[5] + h[6];
                    a = "0x" + h[7] + h[8];
                }


                a = 1/255*(1*a)
                
                r = +(r / 255)
                r = r*a;
                r = r.toFixed(2);

                g = +(g / 255)
                g = g*a;
                g = g.toFixed(2);

                b = +(b / 255)
                b = b*a;
                b = b.toFixed(2);

                var ledcolor = [+r,+g,+b]

                return ledcolor;
            },
            show:function(e){
                bus.$emit("showkeyboard",e);
            },
            hide:function(){
                bus.$emit("hidekeyboard");
            }
        }
    }
</script>