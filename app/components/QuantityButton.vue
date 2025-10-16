<script setup lang="ts">
    const quantity = ref(0)
    import { ref } from 'vue'

    const increase = () => {
        quantity.value++
    }

    const decrease = () => {
        if (quantity.value > 0) {
            quantity.value--
        }
    }
</script>

<template>
    <div class="min-w-[126px] h-fit flex items-center justify-between gap-4 px-4 py-2 rounded-full ring ring-neutral-400">
        <UButton variant="ghost" color="neutral" class="rounded-full !p-0" icon="i-lucide-minus" @click="decrease" />
        <span class="font-bold min-w-[12px]">{{ quantity }}</span>
        <UButton variant="ghost" color="neutral" class="rounded-full !p-0" icon="i-lucide-plus" @click="increase" />
    </div>
</template>