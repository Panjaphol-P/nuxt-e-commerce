<script>
</script>

<template>
    <UContainer class="min-h-[147px] flex gap-8 !px-0">
        <!-- Image -->
        <div class="min-w-[147px] min-h-[147px] bg-gray-400 rounded-[8px] grid place-items-center">
            <h3 class="!text-white">*img*</h3>
        </div>

        <!-- Right content -->
        <div class="flex flex-col gap-6">
            <div class="flex h-fit gap-4 items-center justify-start">
                <div class="flex gap-2 items-center">
                    <div class="size-8 bg-gray-400 rounded-full"></div>
                    <span>example01_account</span>
                </div>
                <div class="flex gap-2 h-full items-center">
                    <ReviewSum />
                    <USeparator orientation="vertical" />
                    <span class="text-gray-400">0 Months Ago</span>
                </div>
            </div>
            <div class="h-full items-start">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quibusdam possimus officia
                    dolorum, minima aut illum saepe dicta perspiciatis error fuga! Eligendi maiores at vitae
                    doloribus recusandae reprehenderit sit.</span>
            </div>
        </div>
    </UContainer>
</template>