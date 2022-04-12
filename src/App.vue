<template>
  <div id="app">
    <vue-soonspace
      :options="{
        background: {
          alpha: true,
        },
        controls: {
          zoomMinDistance:-1
        }
      }"
      @sceneReady="sceneReady"
      @modelClick="modelClick"
    />
  </div>
</template>

<script>
import SoonmanagerSyncPlugin from "@soonspacejs/plugin-soonmanager-sync";
import { sspInit, sspLoaded } from "./utils";

export default {
  name: "App",
  methods: {
    modelClick(model) {
      console.log("modelClick", model);
    },
    sceneReady(ssp) {
      window.ssp = ssp;

      // 场景初始化时
      sspInit(ssp);

      ssp.setModelDracoDecoderPath("draco/");

      const soonmanagerSync = ssp.registerPlugin(
        SoonmanagerSyncPlugin,
        "soonmanagerSync"
      );

      soonmanagerSync.setBaseUrl("models/tsp-0412/");

      soonmanagerSync.loadScene({
        isIdleRest: true,
        loadSceneAllSuccess: () => {
          console.log("loaded");

          // 场景加载完成时
          sspLoaded(ssp);
        },
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background: aquamarine;
}
#app {
  height: 100vh;
}
</style>
