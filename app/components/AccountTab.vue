<script></script>

<template>
  <div class="col-span-3 flex flex-col gap-6">
    <UButton
      to="/account"
      variant="outline"
      color="primary"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-user-round"
      :ui="{ leadingIcon: 'size-[35px] stroke-0.5' }"
      label="Profile"
    />
    <UButton
      to="/account/transactions"
      variant="outline"
      color="neutral"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-wallet"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Transactions"
    />
    <UButton
      to="/account/history"
      variant="outline"
      color="neutral"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-history"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="History"
    />
    <UButton
      to="/account/reviews"
      variant="outline"
      color="neutral"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-star"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Rate & Reviews"
    />
    <UButton
      to="/account/refunds"
      variant="outline"
      color="neutral"
      class="px-4 py-2 gap-2 text-2xl font-light rounded-full"
      icon="i-lucide-rotate-ccw"
      :ui="{ leadingIcon: 'size-[35px]' }"
      label="Refunds & Returns"
    />
  </div>
</template>
