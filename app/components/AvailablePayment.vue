<script setup lang="ts">
export interface AvailablePaymentProps {
    type?: 'promptpay' | 'mobilebanking' | 'cashondelivery' | 'card'
}

const props = withDefaults(defineProps<AvailablePaymentProps>(), {
    type: 'promptpay'
})

const clickState = ref(false)

const paymentConfig = computed(() => {
    const configs = {
        promptpay: {
            icon: '/graphic/promptpay.svg',
            label: `QR PromptPay`,
        },
        mobilebanking: {
            icon: 'i-lucide-smartphone',
            label: `Mobile Banking`,
        },
        cashondelivery: {
            icon: 'i-lucide-banknote',
            label: `Cash on Delivery`,
        },
        card: {
            icon: 'i-lucide-credit-card',
            label: `Pay with card`,
        }
    }
    return configs[props.type] || configs.promptpay
})
</script>

<template>
    <!-- PromptPay - Not Clicked -->
    <div v-if="!clickState && type === 'promptpay'" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2">
        <NuxtImg :src="paymentConfig.icon" width="32px" height="auto" :alt="`${type}-icon`" />
        <div class="flex flex-col">
            <span class="font-light">{{ paymentConfig.label }}</span>
        </div>
    </div>

    <!-- Mobile Banking - Not Clicked -->
    <div v-else-if="!clickState && type === 'mobilebanking'" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2">
        <UIcon :name="paymentConfig.icon" class="w-8 h-8" />
        <div class="flex items-center justify-between w-full gap-4">
            <span class="font-light flex-shrink-0">{{ paymentConfig.label }}</span>
            <div class="flex gap-2 flex-shrink-0">
                <NuxtImg src="/graphic/banks/kbank.svg" width="32" height="32" alt="kbank-logo" />
                <NuxtImg src="/graphic/banks/krungsri.svg" width="32" height="32" alt="krungsri-logo" />
                <NuxtImg src="/graphic/banks/bkkbank.svg" width="32" height="32" alt="bkkbank-logo" />
                <NuxtImg src="/graphic/banks/scb.svg" width="32" height="32" alt="scb-logo" />
                <NuxtImg src="/graphic/banks/ktb.svg" width="32" height="32" alt="ktb-logo" />
            </div>
        </div>
    </div>

    <!-- PromptPay - Clicked -->
    <div v-else-if="clickState && type === 'promptpay'" @click="clickState = false"
        class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2 bg-primary/10">
        <div
            class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
        </div>

        <NuxtImg :src="paymentConfig.icon" width="32px" height="auto" :alt="`${type}-icon`" />
        <div class="flex flex-col">
            <span class="font-light">{{ paymentConfig.label }}</span>
        </div>
    </div>

    <!-- Mobile Banking - Clicked -->
    <div v-else-if="clickState && type === 'mobilebanking'" @click="clickState = false"
        class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2 bg-primary/10">
        <div
            class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
        </div>

        <UIcon :name="paymentConfig.icon" class="w-8 h-8" />
        <div class="flex items-center justify-between w-full gap-4">
            <span class="font-light flex-shrink-0">{{ paymentConfig.label }}</span>
            <div class="flex gap-2 flex-shrink-0">
                <NuxtImg src="/graphic/banks/kbank.svg" width="32" height="32" alt="kbank-logo" />
                <NuxtImg src="/graphic/banks/krungsri.svg" width="32" height="32" alt="krungsri-logo" />
                <NuxtImg src="/graphic/banks/bkkbank.svg" width="32" height="32" alt="bkkbank-logo" />
                <NuxtImg src="/graphic/banks/scb.svg" width="32" height="32" alt="scb-logo" />
                <NuxtImg src="/graphic/banks/ktb.svg" width="32" height="32" alt="ktb-logo" />
            </div>
        </div>
    </div>

    <!-- Others - Not Clicked -->
    <div v-else-if="!clickState && (type === 'card' || type === 'cashondelivery')" @click="clickState = true"
        class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2">
        <UIcon :name="paymentConfig.icon" class="w-6 h-6" />
        <span class="font-light">{{ paymentConfig.label }}</span>
    </div>

    <!-- Others - Clicked -->
    <div v-else-if="clickState && (type === 'card' || type === 'cashondelivery')" @click="clickState = false"
        class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2 bg-primary/10">
        <div
            class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
            <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
        </div>
        <UIcon :name="paymentConfig.icon" class="w-6 h-6" />
        <span class="font-light">{{ paymentConfig.label }}</span>
    </div>
</template>