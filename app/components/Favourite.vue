<script setup>
const props = defineProps({
    size: {
        type: String,
        default: 'lg',
        validator: (value) => ['sm', 'lg'].includes(value)
    }
})

const isFavorite = ref(false)
const isHovered = ref(false)

const currentIcon = computed(() => {
    if (isFavorite.value) return '/icons/heart-active.svg'
    if (isHovered.value) return '/icons/heart-hover.svg'
    return '/icons/heart.svg'
})

const sizeClasses = computed(() => {
    const sizes = {
        sm: 'w-6 h-6', // 24px
        lg: 'w-[50px] h-[50px]' // 50px
    }
    return sizes[props.size]
})

const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
}
</script>

<template>
    <button @click="toggleFavorite" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
        class="favorite-button">
        <NuxtImg :src="currentIcon" alt="favorite" :class="sizeClasses" />
    </button>
</template>

<style scoped>
.favorite-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}
</style>