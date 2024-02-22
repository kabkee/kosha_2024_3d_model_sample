<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useMainStore();
const { krpano, iframePos, iframeVisible } = storeToRefs(store);

const onViewChange = ()=>{

    const hsH = krpano.value.get('hotspot[listbtn_1].ath');
    const hsV = krpano.value.get('hotspot[listbtn_1].atv');
    const { x: screenX, y: screenY } = krpano.value.spheretoscreen(hsH, hsV);

    iframePos.value.top = screenY;
    iframePos.value.left = screenX;
}
const toggleIframe = ()=>{
    iframeVisible.value = !iframeVisible.value
}

defineExpose({
    onViewChange,
    toggleIframe,
})

</script>

<template>
    <div style="height: calc(100vh - 56px)">
        <RouterView />
    </div>
</template>

<style scoped>
</style>
