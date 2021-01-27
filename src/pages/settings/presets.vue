<template>
    <div>
        <v-row>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-macros-panel></settings-macros-panel>
            </v-col>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-presets-panel></settings-presets-panel>
            </v-col>
            <v-col class="col-12 col-md-6 col-lg-4">
                <settings-remote-printers-panel></settings-remote-printers-panel>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState({
            }),
        },
        methods: {
            ...mapActions([

            ]),
        }
    }
</script>