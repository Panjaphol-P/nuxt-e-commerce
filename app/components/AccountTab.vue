<script setup>
const activeClasses = '!ring-primary !text-primary'
const inactiveClasses = '!ring-black !text-black'
</script>

<template>
  <div class="col-span-3 flex flex-col gap-6">
    <UButton
      to="/account"
      variant="outline"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-user-round"
      :ui="{ leadingIcon: 'size-[35px] stroke-0.5' }"
      label="Profile"
      :active-class="activeClasses"
      :inactive-class="inactiveClasses"
    />
    <UButton
      to="/account/transactions"
      variant="outline"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-wallet"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Transactions"
      :active-class="activeClasses"
      :inactive-class="inactiveClasses"
    />
    <UButton
      to="/account/history"
      variant="outline"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-history"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Purchase History"
      :active-class="activeClasses"
      :inactive-class="inactiveClasses"
    />
    <UButton
      to="/account/reviews"
      variant="outline"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-star"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Rate & Reviews"
      :active-class="activeClasses"
      :inactive-class="inactiveClasses"
    />
    <UButton
      to="/account/refunds"
      variant="outline"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-rotate-ccw"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Refunds & Returns"
      :active-class="activeClasses"
      :inactive-class="inactiveClasses"
    />
  </div>
</template>