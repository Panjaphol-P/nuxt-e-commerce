<script setup lang="ts">
    export interface AvailableDeliveryProps {
        type?: 'standard' | 'express' | 'international'
    }

    const props = withDefaults(defineProps<AvailableDeliveryProps>(), {
        type: 'standard'
    })

    const clickState = ref(false)

    const deliveryConfig = computed(() => {
        const configs = {
            standard: {
                icon: 'i-lucide-truck',
                label: `Example Express`,
                delivery: '1 - 3 Days',
                price: 50
            },
            express: {
                icon: 'i-lucide-rocket',
                label: `Thunder Express`,
                delivery: 'Today!',
                price: 100
            },
            international: {
                icon: 'i-lucide-globe',
                label: `Antifragile Express`,
                delivery: '7 - 14 Days',
                price: 150
            }
        }
        return configs[props.type] || configs.standard
    })
</script>

<template>
    <div v-if="!clickState" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex justify-between items-center gap-2 w-full">
        <div class="flex flex-col">
            <span class="font-light">{{ deliveryConfig.label }}</span>
            <div class="flex gap-2">
                <UIcon :name="deliveryConfig.icon" class="w-6 h-6 text-primary" />
                <span class="text-primary">Estimated delivery <span class="font-bold">{{ deliveryConfig.delivery }}</span></span>
            </div>
        </div>
        
        <div>
            <p>฿ {{ deliveryConfig.price }}</p>
        </div>
    </div>

    <div v-else @click="clickState = false"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex justify-between items-center gap-2 w-full relative bg-primary/10">
        <div
            class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
        </div>
        <div class="flex flex-col">
            <span class="font-light">{{ deliveryConfig.label }}</span>
            <div class="flex gap-2">
                <UIcon :name="deliveryConfig.icon" class="w-6 h-6 text-primary" />
                <span class="text-primary">Estimated delivery <span class="font-bold">{{ deliveryConfig.delivery }}</span></span>
            </div>
        </div>

        <div>
            <p>฿ {{ deliveryConfig.price }}</p>
        </div>
    </div>
</template>