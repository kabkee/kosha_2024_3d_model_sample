import { defineStore } from 'pinia'
import { ref, reactive, watch } from 'vue'

export const useMainStore = defineStore('main', () => {
    const krpano = ref(null);
    const iframeVisible = ref(false);
    const iframePos = reactive({
        top: 0,
        left: 0,
    })
    
    return { krpano, iframePos, iframeVisible }
  })
  