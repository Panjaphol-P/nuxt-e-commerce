<script setup>

const isLoggedIn = useState('isLoggedIn', () => false)
</script>

<template>
  <BackButton />
  <UContainer class="!px-0 flex flex-col gap-6">
      <div class="flex flex-col">
        <h2 class="italic">Marked & Meaningful</h2>
        <p>Curated by your eyes.</p>
      </div>

    <div class="w-full flex justify-between items-center">
      <div class="flex gap-6">
        <div class="flex gap-2 ring ring-primary rounded-[32px] text-primary font-semibold text-[16px] px-4 py-2">
          <UIcon name="i-custom-skincare" size="24px" class="text-primary" />
          Products
        </div>
        <UButton to="/account/favorite" variant="outline" color="neutral" label="Blogs" size="xl" class="rounded-full" icon="i-lucide-newspaper" />
      </div>

      <NavigationMinimized />
    </div>
  </UContainer>
</template>