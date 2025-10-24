<script setup lang="ts">

    export interface SavedAddressProps {
        type?: 'current' | 'others'
        name?: string
        phone?: string
        streetAddress?: string
        subDistrict?: string
        district?: string
        city?: string
        province?: string
        postalCode?: string
        country?: string
    }

    const props = withDefaults(defineProps<SavedAddressProps>(), {
        type: 'current',
        name: 'Name Surname',
        phone: '+00 12 345 6789',
        streetAddress: '123/456 Something Building (00fl.)',
        subDistrict: 'Subdistrict',
        district: 'District',
        city: 'City',
        province: 'Bangkok',
        postalCode: '12345',
        country: 'Thailand',
    })

    const clickState = ref(false)

    const addressConfig = computed(() => {
        const configs = {
            current: {
                icon: 'i-lucide-map-pin',
            },
            others: {
                icon: 'i-lucide-map-pin-pen',
            }
        }
        return configs[props.type] || configs.current
    })

</script>

<template>
    <div v-if="!clickState && type === 'current'" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex gap-2 w-full">
        <UIcon :name="addressConfig.icon" class="w-6 h-6 text-primary" />
        <div class="flex flex-col">
            <span class="font-light">{{ props.name }} ({{ props.phone }})</span>
            <span class="font-light">{{ props.streetAddress }}, {{ props.subDistrict }}, </span>
            <span class="font-light">{{ props.district }}, {{ props.city }}, {{ props.province }} {{ props.postalCode }}</span>
            <span class="font-light">{{ props.country }}</span>
        </div>
    </div>

    <div v-else-if="clickState && type === 'current'" @click="clickState = false"
        class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex gap-2 w-full bg-primary/10">
        <!-- Checkmark Icon - Top Right -->
        <div class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
        </div>
        <UIcon :name="addressConfig.icon" class="w-6 h-6 text-primary" />
        <div class="flex flex-col">
            <span class="font-light">{{ props.name }} ({{ props.phone }})</span>
            <span class="font-light">{{ props.streetAddress }}, {{ props.subDistrict }}, </span>
            <span class="font-light">{{ props.district }}, {{ props.city }}, {{ props.province }} {{ props.postalCode }}</span>
            <span class="font-light">{{ props.country }}</span>
        </div>
    </div>

    <div v-else-if="!clickState && type === 'others'" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex gap-2 w-full">
        <UIcon :name="addressConfig.icon" class="w-6 h-6 text-primary" />
        <div class="flex flex-col">
            <span class="font-light">Other address</span>
        </div>
    </div>

    <div v-else-if="clickState && type === 'others'" @click="clickState = false"
        class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex gap-2 w-full bg-primary/10">
        <!-- Checkmark Icon - Top Right -->
        <div class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white  w-[19px] h-[19px]" />
        </div>
        <UIcon :name="addressConfig.icon" class="w-6 h-6 text-primary" />
        <div class="flex flex-col">
            <span class="font-light">Other address</span>
        </div>
    </div>
</template>