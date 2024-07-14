import { ref, onMounted, onUpdated } from 'vue'
import type { Ref } from 'vue'

type Theme = 'light' | 'dark' | 'cupcake' | 'coffee'
export const useTheme = (theme: Theme = 'light'): Ref<Theme> => {
    const currentTheme = ref<Theme>(theme)

    const setTheme = () => {
        document.documentElement.dataset.theme = currentTheme.value
    }

    onMounted(() => setTheme())
    onUpdated(() => setTheme())

    return currentTheme
}
