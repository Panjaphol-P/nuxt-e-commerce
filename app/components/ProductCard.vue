<script setup>

</script>

<template>
    <NuxtLink to="/catalog/product" class="block">
        <div class="flex flex-col justify-start cursor-pointer">
            <UCard class="min-h-[233px] max-w[233px] grid place-items-center ring rounded-[8px]">
                *Product*
            </UCard>
            
            <div class="w-full min-h-[89px] flex flex-col justify-evenly">
                <div class="text-center">
                    <p class="text-primary"><b>Product Name</b></p>
                    <p>฿ 9,999 THB</p>
                    <ReviewSum />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
