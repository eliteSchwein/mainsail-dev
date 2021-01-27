<style>
    .webcamImage {
        width: 100%;
    }
</style>

<template>
    <v-card>
        <v-toolbar flat dense >
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-keyboard-variant</v-icon>Accessibility</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-container px-0 py-0>
                <v-row>
                    <v-col class="py-2">
                        <v-switch v-model="toggleVirtualKeyboard" label="Virtual Keyboard" hide-details class="mt-0"></v-switch>
                    </v-col>
                </v-row>
            </v-container>
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
            toggleVirtualKeyboard: {
                get() {
                    return localStorage.virtualKeyboard=="enabled";
                },
                set(enable) {
                    if(enable)
                        localStorage.virtualKeyboard = "enabled"
                    else
                        localStorage.virtualKeyboard = "disabled"
                    bus.$emit("updatekeyboardstatus");
                    return localStorage.virtualKeyboard=="enabled";
                }
            },
        },
        methods: {
            showKeyboard:function(e){
                bus.$emit("showkeyboard",e);
            },
            hideKeyboard:function(){
                bus.$emit("hidekeyboard");
            }

        }
    }
</script>