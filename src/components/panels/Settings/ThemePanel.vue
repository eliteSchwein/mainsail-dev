<style>
    .webcamImage {
        width: 100%;
    }
</style>

<template>
    <v-card>
        <v-toolbar flat dense >
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-cog</v-icon>Theme</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-container px-0 py-0>
                <v-row>
                    <v-col class="py-2">
                        <v-switch v-model="boolLightMode" label="Light Mode" hide-details class="mt-0"></v-switch>
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
            boolLightMode: {
                get() {
                    return localStorage.getItem("lightMode")=="enabled";
                },
                set(enable) {
                    if(enable)
                        localStorage.lightMode="enabled"
                    else
                        localStorage.lightMode="disabled"
                    this.$vuetify.theme.dark = localStorage.lightMode!="enabled";
                    return localStorage.lightMode=="enabled";
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