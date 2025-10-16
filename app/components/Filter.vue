<script setup>
const props = defineProps({
    topic: {
        type: String,
        default: 'popularity',
        validator: (value) => ['popularity', 'release_date'].includes(value)
    },
})

const isActive = ref(false)
const iconState = ref(0) // 0: up-down, 1: down, 2: up

const currentIcon = computed(() => {
    if (!isActive.value) return 'i-lucide-chevrons-up-down'
    
    const icons = [
        'i-lucide-chevrons-up-down',
        'i-lucide-chevron-down',
        'i-lucide-chevron-up'
    ]
    return icons[iconState.value]
})

const topicConfig = computed(() => {
    const topics = {
        popularity: {
            label: 'Popularity',
        },
        release_date: {
            label: 'Release Date',
        }
    }
    return topics[props.topic] || topics.popularity
})

const toggleFilter = () => {
    if (isActive.value) {
        // Cycle through icons: 0 -> 1 -> 2 -> 0
        iconState.value = (iconState.value + 1) % 3
    }
}

// Watch for changes to reset icon state when deactivated
watch(isActive, (newValue) => {
    if (!newValue) {
        iconState.value = 0
    }
})
</script>

<template>
    <div class="flex items-center gap-2">
        <UCheckbox v-model="isActive" />
        
        <span>{{ topicConfig.label }}</span>
        
        <button 
            @click="toggleFilter" 
            :disabled="!isActive"
            class="filter-button flex items-center"
            :class="{ 'opacity-50 cursor-not-allowed': !isActive }"
        >
            <UIcon :name="currentIcon" class="w-5 h-5" />
        </button>
    </div>
</template>

<style scoped>
.filter-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.2s;
}

.filter-button:disabled {
    cursor: not-allowed;
}
</style>