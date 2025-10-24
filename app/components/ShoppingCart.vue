<script></script>

<template>
  <USlideover
    :close="{ color: 'neutral', variant: 'ghost', class: 'rounded-full' }"
    title="Order Summary"
    :ui="{
      title: '!font-light italic !text-[32px]',
    }"
  >
    <UButton
      variant="solid"
      color="primary"
      class="rounded-full"
      icon="i-lucide-shopping-bag"
    >
      <div
        class="ring ring-white px-2 text-white rounded-full min-w-[33px] items-center"
      >
        <p class="!font-bold">00</p>
      </div>
    </UButton>

    <template #body>
      <div class="flex flex-col gap-6">

        <div class="grid grid-cols-7 gap-6 text-center">
          <div class="col-span-3 items-center">
            <p class="text-primary">Product</p>
          </div>
          <div class="col-span-2 items-center">
            <p class="text-primary">Quantity</p>
          </div>
          <div class="col-span-1 items-center">
            <p class="text-primary">Total</p>
          </div>
          <div class="col-span-1 items-center">
            
          </div>
        </div>

        <ProductCardSum type="unfixed" />

        <USeparator orientation="horizontal" />

        <ProductCardSum name="Product Name #2" />

        <USeparator orientation="horizontal" />
        
        <ProductCardSum name="Product Name #3" />

        <USeparator orientation="horizontal" />

        <ProductCardSum name="Product Name #4" />
      </div>
    </template>

    <template #footer>
      <div class="!p-6 flex flex-col gap-4 bg-primary rounded-[8px] w-full">
        <div class="flex justify-between">
          <h3 class="!text-white">Subtotal</h3>
          <h3 class="!text-white">฿ 9,999.00</h3>
        </div>
        <div class="flex justify-between">
          <h3 class="!text-white">VAT (7%)</h3>
          <h3 class="!text-white">฿ 999.00</h3>
        </div>
        <div
          class="flex justify-between items-center bg-white rounded-[8px] p-2"
        >
          <div class="flex flex-col">
            <h3 class="font-bold">Total</h3>
            <h3>(Incl. VAT)</h3>
          </div>
          <h2>฿ 9,999.00</h2>
        </div>
        <UButton
          to="/checkout"
          variant="solid"
          class="rounded-full w-full !bg-white justify-center !text-primary !text-2xl"
          size="xl"
          label="CHECKOUT"
        />
      </div>
    </template>
  </USlideover>
</template>
