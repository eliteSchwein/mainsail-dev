<style>

</style>

<template>
    <v-card>
        <v-toolbar flat dense >
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-view-dashboard</v-icon>Dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-container px-0 py-0>
                <v-row>
                    <v-col class="py-2">
                        <v-switch v-model="boolShowWebcamOnDashboard" label="Webcam" hide-details class="mt-0"></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="py-2">
                        <v-switch v-model="boolShowTempchartOnDashboard" label="Tempchart" hide-details class="mt-0"></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="py-2">
                        <v-switch v-model="boolShowConsoleOnDashboard" label="Console" hide-details class="mt-0"></v-switch>
                    </v-col>
                </v-row>
                <v-row v-if="boolShowScaleSetting">
                    <v-col class="py-2">
                        <v-switch v-if="!remoteMode" v-model="boolShowScaleOnDashboard" label="Scale" hide-details class="mt-0"></v-switch>
                    </v-col>
                </v-row>
                <v-row class="mt-2">
                    <v-col col-6>
                        <v-text-field
                            label="Chart update interval"
                            v-model="intervalChartUpdate"
                            @blur="blurIntervalChartUpdate"
                            @click.native="showKeyboard"
                            data-layout="numeric"
                            type="number"
                            suffix="ms"
                            hide-details="auto"
                            :rules="[
                                    v => v >= 500 || 'Minimum is 500ms'
                                ]"
                        ></v-text-field>
                    </v-col>
                    <v-col col-6>
                        <v-text-field
                            label="Datapoint interval"
                            type="number"
                            v-model="intervalDatasetUpdate"
                            @blur="blurIntervalDatasetUpdate"
                            @click.native="showKeyboard"
                            data-layout="numeric"
                            suffix="ms"
                            hide-details="auto"
                            :rules="[
                                    v => v >= 500 || 'Minimum is 500ms'
                                ]"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import {bus} from "@/main";
    import { mapState} from 'vuex'
    export default {
        components: {

        },
        data: function() {
            return {

            }
        },
        computed: {
            ...mapState({
                remoteMode: state => state.socket.remoteMode,
            }),
            boolShowWebcamOnDashboard: {
                get() {
                    return this.$store.state.gui.dashboard.boolWebcam;
                },
                set(status) {
                    return this.$store.dispatch('gui/setSettings', { dashboard: { boolWebcam: status } });
                }
            },
            boolShowTempchartOnDashboard: {
                get() {
                    return this.$store.state.gui.dashboard.boolTempchart;
                },
                set(status) {
                    return this.$store.dispatch('gui/setSettings', { dashboard: { boolTempchart: status } })
                }
            },
            boolShowConsoleOnDashboard: {
                get() {
                    return this.$store.state.gui.dashboard.boolConsole;
                },
                set(status) {
                    return this.$store.dispatch('gui/setSettings', { dashboard: { boolConsole: status } })
                }
            },
            intervalChartUpdate: {
                get() {
                    return this.$store.state.gui.tempchart.intervalChartUpdate
                },
                set(newVal) {
                    if (newVal >= 500) return this.$store.dispatch('gui/setSettings', { gui: { tempchart: { intervalChartUpdate: newVal } } })
                }
            },
            intervalDatasetUpdate: {
                get() {
                    return this.$store.state.gui.tempchart.intervalDatasetUpdate
                },
                set(newVal) {
                    if (newVal >= 500) return this.$store.dispatch('gui/setSettings', { gui: { tempchart: { intervalDatasetUpdate: newVal } } })
                }
            },
            boolShowScaleOnDashboard: {
                get() {
                    return this.$store.state.gui.dashboard.boolScale;
                },
                set(status) {
                    return this.$store.dispatch('gui/setSettings', { dashboard: { boolScale: status } });
                }
            },
            boolShowScaleSetting: {
                get() {
                    return this.$store.state.gui.dashboard.boolScaleAvailable;
                }
            },
        },
        methods: {
            blurIntervalDatasetUpdate() {
                this.hideKeyboard()
                if (this.intervalDatasetUpdate < 500) this.intervalDatasetUpdate = 500
            },
            blurIntervalChartUpdate() {
                this.hideKeyboard()
                if (this.intervalChartUpdate < 500) this.intervalChartUpdate = 500
            },
            showKeyboard:function(e){
                bus.$emit("showkeyboard",e);
            },
            hideKeyboard:function(){
                bus.$emit("hidekeyboard");
            }
        }
    }
</script>