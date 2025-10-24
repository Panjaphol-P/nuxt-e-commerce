<script setup lang="ts">
</script>

<template>
  <BackButton />

  <UContainer class="!px-0 flex flex-col gap-6">
    <div class="flex justify-between items-center">
      <h1 class="italic">Purchase History</h1>
      <NavigationMinimized />
    </div>

    <div
      class="ring ring-primary/25 w-full flex flex-col p-6 gap-6 rounded-[24px]"
    >
      <div class="grid grid-cols-7 gap-8 text-center">
        <div class="col-span-1">
          <h3>Status</h3>
        </div>
        <div class="col-span-1">
          <h3>Time</h3>
        </div>
        <div class="col-span-1">
          <h3>Date</h3>
        </div>
        <div class="col-span-2">
          <h3>List of Items</h3>
        </div>
        <div class="col-span-1">
          <h3>Order Total</h3>
        </div>
        <div class="col-span-1">
          <!-- Empty for action -->
        </div>
      </div>

      <USeparator orientation="horizontal" />

      <HistoryCard :currentStep="0" orderStatus="departed" />
      <USeparator orientation="horizontal" />
      <HistoryCard :currentStep="1" orderStatus="in-transit" />
      <USeparator orientation="horizontal" />
      <HistoryCard :currentStep="2" orderStatus="delivered" />
    </div>
  </UContainer>
</template>

<style scoped>
ul {
  list-style: disc;
  padding-left: 2rem;
}
</style>
