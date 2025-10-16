<script setup>
const props = defineProps({
    tag: {
        type: String,
        default: 'skincare101'
    },
    title: {
        type: String,
        default: 'Lorem ipsum dolor sit amet'
    },
    date: {
        type: String,
        default: 'Month DD, YYYY'
    },
    link: {
        type: String,
        default: '/blog/example'
    }
})
</script>

<template>
    <NuxtLink to="/blog/example">
        <UContainer class="flex flex-col !m-0 !p-0 space-y-6">
            <UCard class="w-full h-[234px] grid place-items-center rounded-[8px]">
                <h3 class="text-center">*Blog*</h3>
            </UCard>
            
            <div class="flex items-center justify-between">
                <Tags :tag="tag" size="lg" />
                <span>{{ date }}</span>
            </div>
            
            <div class="h-[84px]">
                <h3 class="!text-black">
                    {{ title }}
                </h3>
            </div>
        </UContainer>
    </NuxtLink>
</template>

<style></style>