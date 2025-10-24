<script setup lang="ts">
export interface SavedPaymentProps {
  /**
   * Payment method type
   * @default 'credit'
   */
  type?: 'credit' | 'debit'
  
  /**
   * Card brand (for credit/debit cards)
   */
  brand?: string
  
  /**
   * Last 4 digits of card or account
   */
  lastFour?: string
  
  /**
   * Expiry date (MM/YY format)
   */
  expiry?: string
}

const props = withDefaults(defineProps<SavedPaymentProps>(), {
  type: 'credit',
  brand: 'Visa',
  lastFour: '1234',
  expiry: '12/25'
})

const clickState = ref(false)

// Payment type configuration
const paymentConfig = computed(() => {
  const configs = {
    credit: {
      icon: '/graphic/credit-card.svg',
      label: `${props.brand} Credit ends in ${props.lastFour}`,
      subLabel: `(Exp. ${props.expiry})`
    },
    debit: {
      icon: '/graphic/debit-card.svg',
      label: `${props.brand} Debit ends in ${props.lastFour}`,
      subLabel: `(Exp. ${props.expiry})`
    }
  }
  return configs[props.type] || configs.credit
})
</script>

<template>
  <div 
    v-if="!clickState" 
    @click="clickState = true" 
    class="ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2"
  >
    <NuxtImg 
      :src="paymentConfig.icon" 
      width="64px" 
      height="auto" 
      :alt="`${type}-icon`" 
    />
    <div class="flex flex-col">
      <span class="font-light">{{ paymentConfig.label }}</span>
      <span class="font-light">{{ paymentConfig.subLabel }}</span>
    </div>
  </div>

  <div
    v-else
    @click="clickState = false"
    class="relative ring ring-primary p-2 rounded-[8px] cursor-pointer flex items-center gap-2 bg-primary/10"
  >
    <!-- Checkmark Icon - Top Right -->
    <div class="absolute -top-2 -right-2 rounded-full bg-primary w-[24px] h-[24px] grid place-items-center ring-2 ring-white">
      <UIcon name="i-lucide-check" class="text-white w-[19px] h-[19px]" />
    </div>

    <NuxtImg
      :src="paymentConfig.icon"
      width="64px"
      height="auto"
      :alt="`${type}-icon`"
    />
    <div class="flex flex-col">
      <span class="font-light">{{ paymentConfig.label }}</span>
      <span class="font-light">{{ paymentConfig.subLabel }}</span>
    </div>
  </div>
</template>