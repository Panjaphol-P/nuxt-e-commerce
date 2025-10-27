<script setup lang="ts">
    export interface ProductCardProps {
        hover?: boolean
        favorite?: boolean
        tag?: string | boolean
        name?: string
        price?: string
    }

    const props = withDefaults(defineProps<ProductCardProps>(), {
        hover: false,
        favorite: false,
        tag: false,
        name: 'Product Name',
        price: '9,999'
    })

    const isHovered = ref(false)
    const isFavorited = ref(props.favorite)

    const handleFavoriteClick = (event: MouseEvent) => {
        // Prevent navigation to product page
        event.preventDefault()
        event.stopPropagation()
        
        // Toggle favorite state
        isFavorited.value = !isFavorited.value
    }

    // Computed property to determine if favorite button should be visible
    const showFavorite = computed(() => isHovered.value || isFavorited.value)
    
    // Computed property to determine if background should show
    const showBackground = computed(() => isHovered.value || isFavorited.value)
</script>

<template>
    <NuxtLink to="/catalog/product" class="block group">
        <div 
            class="flex flex-col justify-start cursor-pointer"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <div 
                :class="[
                    'min-h-[233px] min-w-[400px] grid place-items-center rounded-[8px] relative overflow-hidden',
                    showBackground ? 'bg-cover bg-center bg-no-repeat' : 'bg-primary/10'
                ]"
                :style="showBackground ? { backgroundImage: 'url(/frames/product-bg.svg)' } : {}"
            >
                <!-- Tag slot with fallback -->
                <div v-if="$slots.tag || tag" class="absolute top-2 left-2">
                    <slot name="tag">
                        <Tags v-if="typeof tag === 'string'" :tag="tag" />
                        <Tags v-else-if="tag === true" tag="bestseller" />
                    </slot>
                </div>
                
                <NuxtImg src="/products/Product.png" class="min-h-[143px]" />
                
                <!-- Favorite button with animation -->
                <div 
                    :class="[
                        'absolute top-2 right-2',
                        showFavorite ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    ]"
                    @click="handleFavoriteClick"
                >
                    <Favourite size="sm" :active="isFavorited" />
                </div>
            </div>
            
            <div class="w-full min-h-[89px] flex flex-col justify-evenly">
                <div class="text-center">
                    <p class="text-primary"><b>{{ props.name }}</b></p>
                    <p>฿ {{ props.price }} THB</p>
                    <ReviewSum />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>