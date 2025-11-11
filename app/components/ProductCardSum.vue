<script setup lang="ts">
import QuantityButton from './QuantityButton.vue'

  export interface ProductProps {
    type?: 'unfixed' | 'fixed'
    name?: string
    size?: number
    price?: number
    total?: number
    quantity?: number
  }

  const props = withDefaults(defineProps<ProductProps>(), {
    type: 'unfixed',
    name: 'Product Name #1',
    size: 100,
    price: 999,
    total: 999,
    quantity: 1
  })
</script>

<template>
  <div v-if="type === 'unfixed'" class="grid grid-cols-7 gap-6 text-center">
    <div class="col-span-3 flex items-center gap-6">
      <div
        class="min-h-[64px] min-w-[32px] grid place-items-center"
      >
        <NuxtImg src="/products/cosmetics-packages-set5.png" class="h-16" />
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="font-bold">{{ props.name }}</h3>
        <div class="flex gap-2">
          <p>Size: <span class="opacity-50">{{ props.size }} ml.</span></p>
          <USeparator orientation="vertical" class="h-6" />
          <p>Price: <span class="opacity-50">฿ {{ props.price }}</span></p>
        </div>
      </div>
    </div>
    <div class="col-span-2 flex items-center justify-center">
      <QuantityButton />
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <p>฿ {{ props.total }}</p>
    </div>
    <div class="col-span-1 flex justify-center items-center">
      <UButton variant="ghost" color="error" icon="i-lucide-trash" class="rounded-full" />
    </div>
  </div>
  <div v-else class="flex justify-between">
    <div class="flex items-center gap-6">
      <div
        class="min-h-[64px] min-w-[32px] grid place-items-center"
      >
        <NuxtImg src="/products/cosmetics-packages-set5.png" class="h-16" />
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="font-bold">{{ props.name }}</h3>
        <div class="flex gap-2">
          <p>Size: <span class="opacity-50">{{ props.size }} ml.</span></p>
          <USeparator orientation="vertical" class="h-6" />
          <p>Price: <span class="opacity-50">฿ {{ props.price }}</span></p>
          <USeparator orientation="vertical" class="h-6" />
          <p>QTY: <span class="opacity-50">{{ props.quantity }}</span></p>
        </div>
      </div>
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <h3 class="!text-black">฿ {{ props.total }}</h3>
    </div>
  </div>
</template>
