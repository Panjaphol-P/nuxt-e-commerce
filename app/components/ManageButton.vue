<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";

const clickState = ref(false);
const step = ref(0);

const items = ref<StepperItem[]>([
  {
    title: "Departed",
    description: "DD / MM / YY",
  },
  {
    title: "In Transit",
    description: "DD / MM / YY",
  },
  {
    title: "Delivered",
    description: "DD / MM / YY",
  },
]);
</script>

<template>
  <div v-if="!clickState" class="grid place-items-center h-full">
    <UButton
      variant="ghost"
      icon="i-lucide-ellipsis-vertical"
      class="rounded-full"
      size="xl"
      :ui="{ leadingIcon: 'size-8 !text-black' }"
      @click="clickState = true"
    />
  </div>

  <div
    v-else
    class="p-2 grid place-items-center gap-2 rounded-[8px] ring ring-primary/25 h-full relative"
  >
    <UButton
      variant="ghost"
      icon="i-lucide-x"
      size="md"
      color="neutral"
      class="absolute right-2 top-2 rounded-full"
      @click="clickState = false"
    />
    <div class="relative flex flex-col gap-2 items-center justify-center">
      <UModal
        title="Order ID: 1234567890"
        close-icon="i-lucide-x"
        :ui="{ title: 'font-light text-[24px]' }"
        :close="{ class: 'rounded-full' }"
        fullscreen
      >
        <UButton color="primary" variant="ghost">Order Detail</UButton>

        <template #body>
          <div class="flex flex-col gap-4">
            <UStepper v-model="step" :items="items" disabled />

            <div class="flex gap-8">
              <div class="flex flex-col flex-1 gap-4">
                <div
                  class="p-6 ring ring-primary/25 rounded-[32px] flex flex-col gap-4"
                >
                  <ProductCardSum type="fixed" name="Product Name #1" />
                  <ProductCardSum type="fixed" name="Product Name #2" />
                  <ProductCardSum type="fixed" name="Product Name #3" />
                  <ProductCardSum type="fixed" name="Product Name #4" />
                </div>
                <div
                  class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px]"
                >
                  <h2 class="italic text-center">Shipping Method</h2>
                  <div
                    class="flex justify-between items-center ring ring-primary p-2 rounded-[8px]"
                  >
                    <div class="flex flex-col">
                      <span class="font-light">Example Express</span>
                      <div class="flex gap-2 items-center">
                        <UIcon
                          name="i-lucide-truck"
                          class="text-primary"
                          size="24px"
                        />
                        <span class="text-primary font-light"
                          >Estimated delivery
                          <span class="font-bold"
                            >3 Sep - 6 Sep 2025</span
                          ></span
                        >
                      </div>
                    </div>

                    <div>
                      <h3 class="!text-black">฿ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col gap-4">
                <div class="bg-primary flex flex-col gap-4 p-6 rounded-[32px]">
                  <h2 class="italic text-center !text-white">Order Summary</h2>

                  <div class="flex justify-between text-white">
                    <p class="font-light">Subtotal</p>
                    <p class="font-bold">฿ 9,999.00</p>
                  </div>
                  <div class="flex justify-between text-white">
                    <p class="font-light">Shipping Fee</p>
                    <p class="font-bold">฿ 99.00</p>
                  </div>
                  <div class="flex justify-between text-white">
                    <p class="font-light">VAT (7%)</p>
                    <p class="font-bold">฿ 99.00</p>
                  </div>
                  <div
                    class="flex justify-between text-white items-center rounded-[8px]"
                  >
                    <p class="font-light">Discount</p>
                    <p class="font-bold">- ฿ 99.00</p>
                  </div>

                  <USeparator orientation="horizontal" />

                  <div
                    class="flex justify-between p-2 items-center rounded-[8px]"
                  >
                    <h3 class="!text-white font-bold">Total</h3>
                    <h3 class="!text-white font-bold">฿ 9,999.00</h3>
                  </div>
                </div>

                <div
                  class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px]"
                >
                  <h2 class="italic text-center">Shipping Information</h2>

                  <div class="flex justify-between">
                    <div class="flex flex-col gap-4">
                      <div class="flex gap-2 items-center">
                        <UIcon
                          name="i-lucide-user-round"
                          class="text-primary"
                          size="24px"
                        />
                        <span>Name Surname</span>
                      </div>
                      <div class="flex gap-2 items-center">
                        <UIcon
                          name="i-lucide-mail"
                          class="text-primary"
                          size="24px"
                        />
                        <span>example@email.com</span>
                      </div>
                      <div class="flex gap-2 items-center">
                        <UIcon
                          name="i-lucide-phone"
                          class="text-primary"
                          size="24px"
                        />
                        <span>+00 12 345 6789</span>
                      </div>
                    </div>
                    <div class="flex gap-2 justify-start">
                      <UIcon
                        name="i-lucide-map-pin"
                        class="text-primary"
                        size="24px"
                      />
                      <div class="flex flex-col">
                        <span>123/456 Something Building</span>
                        <span>Subdistrict, District</span>
                        <span>City, Province, 12345</span>
                        <span>Country</span>
                      </div>
                    </div>
                  </div>
                </div>
                <HelpCard help="updateAndcancel" />
              </div>
            </div>
          </div>
        </template>
      </UModal>

      <UButton to="/account/refunds" color="error" variant="ghost"
        >Return Request</UButton
      >
      <UButton color="error" variant="ghost" @click="clickState = false"
        >Cancel Order</UButton
      >
    </div>
  </div>
</template>
