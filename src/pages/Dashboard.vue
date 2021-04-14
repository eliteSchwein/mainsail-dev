<template>
  <v-row>
    <v-col class="col-sm-12 col-md-5">
      <min-settings-panel
        v-if="klippy_state === 'ready' && existsPrinterConfig"
      ></min-settings-panel>
      <moonraker-failed-components-panel
        v-if="moonrakerFailedComponents.length"
      ></moonraker-failed-components-panel>
      <klippy-state-panel
        v-if="socket_connected && klippy_state !== 'ready'"
      ></klippy-state-panel>
      <status-panel v-if="klippy_state === 'ready'"></status-panel>
      <webcam-panel class="mt-6" v-if="showDashboardWebcam"></webcam-panel>
      <z-offset-panel
        class="mt-6"
        v-if="klippy_state === 'ready'"
      ></z-offset-panel>
      <control-panel
        class="mt-6"
        v-if="klippy_state === 'ready'"
      ></control-panel>
      <miscellaneous-panel
        v-if="klippy_state === 'ready'"
      ></miscellaneous-panel>
      <neopixel-panel
        v-if="
          this.$store.state.gui.neopixel.stripname != '' &&
          klippy_state === 'ready'
        "
        class="mt-6"
      ></neopixel-panel>
    </v-col>
    <v-col class="col-sm-12 col-md-7" v-if="klippy_connected">
      <scale-panel v-if="showDashboardScale" class="mt-6"></scale-panel>
      <tools-panel v-if="displayToolsPanel"></tools-panel>
      <miniconsole-panel
        :class="displayToolsPanel ? 'mt-6' : ''"
        v-if="klippy_state === 'ready' && showDashboardConsole"
      ></miniconsole-panel>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import ZOffsetPanel from "../components/panels/ZOffsetPanel";

export default {
  components: { ZOffsetPanel },
  data: () => ({}),
  computed: {
    ...mapState({
      socket_connected: (state) => state.socket.isConnected,
      klippy_connected: (state) => state.server.klippy_connected,
      klippy_state: (state) => state.server.klippy_state,
      moonrakerFailedComponents: (state) => state.server.failed_components,

      showDashboardWebcam: (state) => state.gui.dashboard.boolWebcam,
      showDashboardScale: (state) => state.gui.dashboard.boolScale,
      showDashboardConsole: (state) => state.gui.dashboard.boolConsole,
      config: (state) => state.printer.configfile.config,
    }),
    existsPrinterConfig: {
      get() {
        return this.$store.getters["printer/existPrinterConfig"];
      },
    },
    displayToolsPanel: {
      get() {
        return (
          this.$store.state.socket.isConnected &&
          this.$store.state.server.klippy_connected &&
          "heaters" in this.$store.state.printer &&
          "available_heaters" in this.$store.state.printer.heaters &&
          this.$store.state.printer.heaters.available_heaters.length
        );
      },
    },
  },
};
</script>
