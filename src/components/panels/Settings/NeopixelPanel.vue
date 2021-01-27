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
        </v-toolbar>
        <v-card-text>
            <v-row>
                <v-col class="py-0 pb-3">
                    <v-text-field
                        v-model="stripname"
                        hide-details
                        label="Config Name"
                        @click.native="show"
                        @blur="hide"
                        data-layout="normal" 
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0 py-3">
                    <v-btn color="red darken-1" @click="resetSwatches()">
                        <v-icon class="mr-3">mdi-reload</v-icon>Reset Swatches
                    </v-btn>
                </v-col>
            </v-row>              
        </v-card-text>
    </v-card>
</template>

<script>
    import {bus} from "../../../main";
    
    export default {
        components: {

        },
        data: () => ({

        }),
        computed: {
            stripname: {
                get() {
                    return this.$store.state.gui.neopixel.stripname;
                },
                set(stripname) {
                    return this.$store.dispatch('gui/setSettings', { neopixel: { stripname } });
                }
            },
        },
        methods: {
            resetSwatches(){
                var swatches = [['#FF0000FF','#AA0000FF','#550000FF'],['#FFFF00FF','#AAAA00FF','#555500FF'],['#00FF00FF','#00AA00FF','#005500FF'],['#00FFFFFF','#00AAAAFF','#005555FF'],['#0000FFFF','#0000AAFF','#000055FF'],['#8A00FFFF','#5D01ABFF','#2B014FFF'],['#F600FFFF','#9F01A4FF','#460048FF'],['#FFCB5FFF','#FFFFFFFF','#A5FFFFFF'],]
                this.$store.dispatch('gui/setSettings', { neopixel: { swatches } });
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