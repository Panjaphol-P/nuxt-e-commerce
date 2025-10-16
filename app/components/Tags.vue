<script setup>
const props = defineProps({
    tag: {
        type: String,
        default: 'bestseller',
        validator: (value) => ['bestseller', 'new', 'tips', 'seasonal', 'review', 'announcements', 'skincare101'].includes(value)
    },
    size: {
        type: String,
        default: 'sm',
        validator: (value) => ['sm', 'lg'].includes(value)
    }
})

const tagConfig = computed(() => {
    const tags = {
        bestseller: {
            label: 'BESTSELLER',
            ringClass: 'ring-yellow-300',
            textClass: 'text-yellow-300'
        },
        new: {
            label: 'NEW',
            ringClass: 'ring-primary',
            textClass: 'text-primary'
        },
        tips: {
            label: 'TIPS & TRICKS',
            ringClass: 'ring-yellow-300',
            textClass: 'text-yellow-300'
        },
        seasonal: {
            label: 'SEASONAL CARE',
            ringClass: 'ring-pink-300',
            textClass: 'text-pink-300'
        },
        review: {
            label: 'REVIEWS',
            ringClass: 'ring-blue-300',
            textClass: 'text-blue-300'
        },
        announcements: {
            label: 'ANNOUNCEMENTS',
            ringClass: 'ring-indigo-400',
            textClass: 'text-indigo-400'
        },
        skincare101: {
            label: 'SKINCARE 101',
            ringClass: 'ring-primary-200',
            textClass: 'text-primary-200'
        }
    }
    return tags[props.tag] || tags.bestseller
})

const sizeClasses = computed(() => {
    return props.size === 'lg' ? 'text-[16px] font-bold px-3 py-1' : 'text-[10px] font-bold px-2 py-1'
})
</script>

<template>
    <UBadge 
        variant="outline" 
        :class="[
            'ring-2',
            tagConfig.ringClass,
            tagConfig.textClass,
            'rounded-full bg-white',
            sizeClasses
        ]"
    >
        {{ tagConfig.label }}
    </UBadge>
</template>