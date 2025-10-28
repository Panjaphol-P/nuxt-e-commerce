<script setup lang="ts">
const paymentData = useState("paymentData", () => ({
  altEmail: "",
  payType: "",
  cardName: "",
  cardNum: "",
  expDate: "",
  cvc: "",
}));

export interface cardProps {
  type?: 'credit' | 'debit'
  name?: string
}

const props = withDefaults(defineProps<cardProps>(), {
  type: 'credit',
  name: 'Mastercard Credit'
})

const cardConfig = computed(() => {
  const configs = {
    credit: {
      icon: '/graphic/credit-card.svg',
      name: 'Mastercard Credit'
    },
    debit: {
      icon: '/graphic/debit-card.svg',
      name: 'Visa Debit'
    }
  }
  return configs[props.type]
})
</script>

<template>
  <div
    class="ring ring-primary rounded-[16px] flex w-full justify-between items-center p-4"
  >
    <div class="flex gap-2 items-center">
      <NuxtImg :src="cardConfig.icon" alt="card icon" class="h-full" />
      <div class="flex flex-col">
        <span class="font-light text-black">{{ cardConfig.name }}</span>
        <span class="font-light text-black">Ends in 1234</span>
        <span class="font-light text-black">Expiration Date (MM/YY)</span>
      </div>
    </div>
    <UButton
      variant="ghost"
      color="error"
      icon="i-lucide-trash"
      size="lg"
      class="rounded-full"
    />
  </div>
</template>
