<script setup lang="ts">
const props = defineProps({
    favorite: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'Lorem ipsum dolor sit amet'
    },
    link: {
        type: String,
        default: '/blog/example'
    }
})

const isHovered = ref(false)
const isFavorited = ref(props.favorite)

const handleFavoriteClick = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    isFavorited.value = !isFavorited.value
}

const showFavorite = computed(() => isHovered.value || isFavorited.value)
const showBackground = computed(() => isHovered.value || isFavorited.value)
</script>

<template>
    <NuxtLink :to="link" class="block">
        <div 
            class="flex flex-col justify-start cursor-pointer gap-6"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <div 
                :class="[
                    'min-h-[233px] w-full grid place-items-center rounded-[8px] relative overflow-hidden',
                    showBackground ? 'bg-cover bg-center bg-no-repeat' : 'bg-primary/10'
                ]"
                :style="showBackground ? { backgroundImage: 'url(/frames/blog-bg.svg)' } : {}"
            >
                
                <div 
                    :class="[
                        'absolute top-2 right-2',
                        showFavorite ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    ]"
                    @click="handleFavoriteClick"
                >
                    <Favourite size="sm" :active="isFavorited" />
                </div>

                <UIcon name="i-lucide-image" size="64px" class="text-black/50" />
            </div>
            
            <div class="flex flex-col gap-4">
                <div class="w-full flex justify-between items-center">
                    <Tags v-if="tag" size="lg" :tag="tag" />
                    <div class="font-light">
                        Month DD, YYYY
                    </div>
                </div>
                <div class="min-h-[101px] flex justify-start">
                    <h3 class="!text-black">
                        {{ name }}
                    </h3>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>