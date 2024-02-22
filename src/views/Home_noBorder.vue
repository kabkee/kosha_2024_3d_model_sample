<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useMainStore();
const { krpano, iframePos, iframeVisible } = storeToRefs(store);

const route = useRoute();
import Nav from '../components/Nav.vue';


useScriptTag(
    '1.kosha_2023_roadview_pc/tour.js',
    // on script tag loaded.
    (el) => {
        embedpano({
            id: 'vr',
            xml: '1.kosha_2023_roadview_pc/tour.xml',
            target: "pano",
            html5: "only",
            mobilescale: 1.0,
            consolelog: true,
            onready: onKrpanoReady,
            passQueryParameters: "startscene,startlookat,editor"
        }
        )
    },
)
const onKrpanoReady = (_krpano) => {
    krpano.value = _krpano;
}
const iframeSize = reactive({
    width: 500,
    height: 300,
})
const windowPosition = computed(() => {
    return {
        x: iframePos.value.left - (iframeSize.width/2),
        y: iframePos.value.top - iframeSize.height - 50,
    }
})

</script>

<template>
    <Nav />
    <div id="pano" class="w-full h-full" />
    <iframe v-if="iframeVisible" class='absolute' src="#/modelViewer?modelPath=models/005_scene.gltf"
        :style="{ top: `${windowPosition.y}px`, left: `${windowPosition.x}px`, width: `${iframeSize.width}px`, height: `${iframeSize.height}px`, }" />
</template>