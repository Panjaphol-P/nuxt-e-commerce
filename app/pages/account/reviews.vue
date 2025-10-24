<script setup>
   const isAnonymous = ref(false)
</script>

<template>
    <BackButton />
    <UContainer class="flex flex-col gap-6 !px-0">

        <h1 class="italic">Rate & Reviews</h1>

        <div class="grid grid-cols-12 gap-8">
            <AccountTab />

            <div class="min-h-svh col-start-4 col-span-9 ring ring-primary/25 p-6 rounded-[32px] flex flex-col gap-6">
                <AccountReview />
                <AccountReview />
            </div>
        </div>
    </UContainer>
</template>