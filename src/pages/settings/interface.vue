<template>
    <div>
        <v-row>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-general-panel></settings-general-panel>
                <settings-console-panel class="mt-6"></settings-console-panel>
                <settings-theme-panel class="mt-6"></settings-theme-panel>
            </v-col>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-dashboard-panel></settings-dashboard-panel>
                <settings-webcam-panel class="mt-6"></settings-webcam-panel>
                <settings-accessibility-panel class="mt-6"></settings-accessibility-panel>
            </v-col>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-neopixel></settings-neopixel>
                <settings-scale-panel class="mt-6" v-if="!remoteMode"></settings-scale-panel>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState({
                remoteMode: state => state.socket.remoteMode,
            }),
        },
        methods: {
            ...mapActions([

            ]),
        }
    }
</script>