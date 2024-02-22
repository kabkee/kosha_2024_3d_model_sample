<script setup>
import { ref, reactive, watch, watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { TresCanvas } from '@tresjs/core'
import { GLTFModel, OrbitControls } from '@tresjs/cientos'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { useProgress } from '@tresjs/cientos'

const instancePrgoress = reactive({progress: 0, hasFinishLoading: false});
async function getProgress(){
    const {hasFinishLoading, progress} = await useProgress();
    instancePrgoress.hasFinishLoading = hasFinishLoading
    instancePrgoress.progress = progress
}
getProgress();

const modelPath = ref(null);
const route = useRoute();

const gl = {
    //   clearColor: '#F78B3D',
    shadows: true,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: true,
}
if (route.query.modelPath) {
    modelPath.value = route.query.modelPath;
}
onMounted(() => {
})

</script>

<template>
    <Transition name="fade-overlay" enter-active-class="opacity-1 transition-opacity duration-200"
        leave-active-class="opacity-0 transition-opacity duration-200">
        <div v-show="!instancePrgoress.hasFinishLoading"
            class="absolute bg-grey-600 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-black font-mono">
            <div class="w-200px">
                Loading... {{ instancePrgoress.progress }} %
                <i class="i-ic-twotone-catching-pokemon animate-rotate-in"></i>
            </div>
        </div>
    </Transition>
    <TresCanvas v-show="modelPath" v-bind="gl">
        <TresPerspectiveCamera :position="[4, 4, 4]" :look-at="[0, 0, 0]" />
        <Suspense>
            <GLTFModel :path="modelPath" :castShadow="true" />
        </Suspense>
        <TresAmbientLight :intensity="2" />
        <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />
        <TresDirectionalLight :intensity="1" :position="[-3, -3, -3]" />
        <OrbitControls :minDistance="4" :max-distance="10" :autoRotate="true" :enableDamping="true" />
    </TresCanvas>
    <div v-if="!modelPath">
        <h2 class="flex items-center text-5xl font-extrabold dark:text-white">
            로딩할 모델이 없습니다.
        </h2>
    </div>
</template>
  