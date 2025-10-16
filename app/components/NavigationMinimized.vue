<script setup>
    const page = ref(1)
    const max = ref(10)

    const increase = () => {
        if (page.value < max.value){
            page.value++
        }
    }

    const decrease = () => {
        if (page.value > 1 && page.value <= max.value) {
            page.value--
        }
    }
</script>

<template>
    <div class="h-fit flex gap-4">
        <div class="rounded-full ring-2 ring-primary px-4 py-2 gap-2 justify-between flex">
            <div class="min-w-[19px] text-center">
                <span class="font-bold text-primary">{{ page }}</span>
            </div>
            <div>
                /
            </div>
            <div>
                {{ max }}
            </div>
        </div>

        <div class="flex gap-2 items-center">
            <UButton variant="ghost" color="primary" class="rounded-full" icon="i-lucide-chevron-left" @click="decrease" />
            <UButton variant="ghost" color="primary" class="rounded-full" icon="i-lucide-chevron-right" @click="increase" />
        </div>
    </div>
</template>