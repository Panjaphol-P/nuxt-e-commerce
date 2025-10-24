<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";

const props = defineProps<{
  orderStatus: 'departed' | 'in-transit' | 'delivered'
}>()

const statusToStep = {
  'departed': 0,
  'in-transit': 1,
  'delivered': 2
}

const currentStep = ref(statusToStep[props.orderStatus])


const items = ref<StepperItem[]>([
  {
    title: "Departed",
    description: "DD / MM / YYYY",
  },
  {
    title: "In Transit",
    description: "DD / MM / YYYY",
  },
  {
    title: "Delivered",
    description: "DD / MM / YYYY",
  },
]);
</script>

<template>
  <div class="grid grid-cols-7 gap-8">
    <div class="col-span-1">
      <UStepper
        v-model="currentStep"
        orientation="vertical"
        disabled
        :items="items"
        class="w-full"
        :ui="{ title: '!text-primary' }"
      />
    </div>
    <div class="col-span-1 flex justify-center">
      <span>00:00</span>
    </div>
    <div class="col-span-1 flex justify-center">
      <span>DD Month YYYY</span>
    </div>
    <div class="col-span-2 flex justify-between">
      <ul class="w-fit">
        <li>Product 01</li>
        <li>Product 02</li>
        <li>Product 03</li>
        <li>Product 04</li>
      </ul>
      <div class="w-fit flex flex-col">
        <span>x1</span>
        <span>x1</span>
        <span>x1</span>
        <span>x1</span>
      </div>
    </div>

    <div class="col-span-1 flex justify-center">
      <span>฿ 9,999</span>
    </div>

    <div class="col-span-1">
      <ManageButton />
    </div>
  </div>
</template>
