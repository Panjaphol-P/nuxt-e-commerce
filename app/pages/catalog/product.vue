<script setup lang="ts">
definePageMeta({
    layout: 'custom',
})
</script>

<template>

    <div class="px-32"><BackButton /></div>

    <section class="w-screen">
        <UContainer class="!max-w-none !w-full h-fit grid grid-cols-2 gap-8 mb-6 !px-0">
            <div class="grid place-items-center relative">
                <NuxtImg src="/icons/Product_vector.svg" class="h-fit w-full" />
                <NuxtImg src="/products/Product_Showcase/product1.png"
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit min-h-[500px] w-fit" />
            </div>

            <div class="grid place-items-center pr-32">
                <div class="h-fit flex flex-col gap-y-6">
                    <UContainer class="h-fit flex flex-col space-y-4 !px-0 relative">
                        <h3 class="!text-gray-400">Type</h3>
                        <h1 class="font-bold">Product Name</h1>
                        <div class="flex justify-between">
                            <h2 class="!text-black">฿ 9,999</h2>
                            <ReviewFull />
                        </div>
                        <Favourite size="lg" class="absolute top-0 right-0" />
                    </UContainer>
                    <div class="min-h-[148px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque velit augue in et pretium velit porttitor
                        hendrerit placerat. Aliquam cursus nibh aliquam nisl tempor. Purus sed tempus elementum ultrices
                        pellentesque pellentesque. Amet eget lectus augue tincidunt tortor amet potenti. Purus interdum
                        consectetur sodales nibh. Aliquet amet leo duis quam facilisis ullamcorper.
                    </div>

                    <UContainer class="grid grid-cols-3 gap-8 !px-0">
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-bold">For :</h3>
                            <div class="h-fit flex justify-center">
                                <UBadge variant="outline" class="rounded-full px-4 py-2 w-fit !text-black text-[16px]"
                                    color="neutral">
                                    All Skin Type
                                </UBadge>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-bold">Contains :</h3>
                            <ul>
                                <li>Substance 1</li>
                                <li>Substance 2</li>
                                <li>Substance 3</li>
                                <li>Substance 4</li>
                            </ul>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-bold">Suitable for :</h3>
                            <ul>
                                <li>Case 1</li>
                                <li>Case 2</li>
                                <li>Case 3</li>
                                <li>Case 4</li>
                            </ul>
                        </div>
                    </UContainer>
                    <div class="flex justify-end gap-8">
                        <QuantityButton />
                        <UButton icon="i-lucide-shopping-bag" class="rounded-full gap-2 px-4 py-2" color="primary"
                            label="Add to Cart" />
                    </div>
                </div>
            </div>
        </UContainer>
    </section>

    <section class="px-32">
        <UContainer class="flex flex-col gap-6 !px-0 mb-6">
            <h1 class="italic">You may also like</h1>
            <div class="w-full grid grid-cols-4 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </UContainer>

        <UContainer class="flex flex-col mb-6 !px-0">
            <h1 class="italic">Description</h1>

            <UContainer class="overflow-x-auto !px-0">
                <table class="min-w-full table-auto border-separate border-spacing-y-4">
                    <tbody>
                        <!-- Product ID -->
                        <tr class="align-top">
                            <th class="text-left font-bold px-4 py-2 min-w-[200px] align-middle">Product ID</th>
                            <td class="text-left px-4 py-2 align-top">0000</td>
                        </tr>
                        <!-- Size -->
                        <tr class="align-top">
                            <th class="text-left font-bold px-4 py-2 min-w-[200px] align-middle">Size</th>
                            <td class="text-left px-4 py-2 align-top">000 ml</td>
                        </tr>
                        <!-- Skin Type -->
                        <tr class="align-top">
                            <th class="text-left font-bold px-4 py-2 min-w-[200px] align-middle">Skin Type</th>
                            <td class="text-left px-4 py-2 align-top">Normal / All</td>
                        </tr>
                        <!-- Main Ingredients -->
                        <tr class="align-top">
                            <th class="text-left font-bold px-4 py-2 min-w-[200px] align-top">Main Ingredients</th>
                            <td class="text-left px-4 py-2 align-top">
                                <ul class="flex flex-wrap gap-x-6 gap-y-2 items-start">
                                    <li class="text-left">Substance 1</li>
                                    <li class="text-left">Substance 2</li>
                                    <li class="text-left">Substance 3</li>
                                    <li class="text-left">Substance 4</li>
                                    <li class="text-left">Substance 5</li>
                                </ul>
                            </td>
                        </tr>
                        <!-- All Ingredients -->
                        <tr class="align-top">
                            <th class="text-left font-bold px-4 py-2 min-w-[200px] align-top">All Ingredients</th>
                            <td class="text-left px-4 py-2 align-top">
                                <ul class="flex flex-wrap gap-x-6 gap-y-2 items-start">
                                    <li class="text-left">Substance 1</li>
                                    <li class="text-left">Substance 2</li>
                                    <li class="text-left">Substance 3</li>
                                    <li class="text-left">Substance 4</li>
                                    <li class="text-left">Substance 5</li>
                                    <li class="text-left">Substance 6</li>
                                    <li class="text-left">Substance 7</li>
                                    <li class="text-left">Substance 8</li>
                                    <li class="text-left">Substance 9</li>
                                    <li class="text-left">Substance 10</li>
                                    <li class="text-left">Substance 11</li>
                                    <li class="text-left">Substance 12</li>
                                    <li class="text-left">Substance 13</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </UContainer>
        </UContainer>

        <UContainer class="flex flex-col space-y-6 !px-0">
            <h1 class="italic">Details</h1>
            <span>
                *Product Name* Lorem ipsum dolor sit amet consectetur. Imperdiet ut tortor vivamus scelerisque fermentum
                dis.
                Commodo turpis tortor sit adipiscing est. Egestas egestas varius id quis tincidunt sit ullamcorper
                morbi.
                Tincidunt eget porttitor montes purus. A non felis blandit est. Nisl commodo cras tortor in mauris
                euismod
                nibh volutpat. Viverra nisl id quam amet neque urna id pulvinar. Mus scelerisque viverra habitasse massa
                mauris. Enim cursus euismod pretium amet libero suspendisse tristique amet egestas. Sed fermentum lectus
                euismod tempor purus enim ullamcorper enim convallis. Mi et tortor nunc non ac feugiat a risus eu. Vitae
                integer odio amet eu. Pellentesque risus eget tincidunt at libero tristique. Interdum ut a pretium
                pretium.
                Nisl odio tortor arcu varius. Vitae nisi cras facilisis enim ullamcorper. Tristique et tellus lacus non.
                Vel amet sed auctor sed sed urna. In in enim nascetur nunc vel. Cras.
            </span>
            <UContainer class="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-6 mb-6 !px-0">
                <div class="col-span-1 row-span-2">
                    <NuxtImg src="/Product-Preview.png" class="w-full h-full object-cover rounded-[8px]"
                        alt="Product Preview" />
                </div>
                <div class="col-span-3">
                    <span>
                        Lorem ipsum dolor sit amet consectetur. Mauris aenean arcu ullamcorper consectetur ac lorem
                        purus
                        risus
                        purus. Lectus faucibus curabitur commodo quis amet nam vitae. Integer mauris luctus nunc
                        faucibus
                        sed
                        quam sed condimentum. Consectetur mauris neque vitae pharetra massa justo donec pulvinar. Sit
                        sit
                        venenatis maecenas velit est. In non euismod sagittis eget pulvinar praesent sollicitudin.
                        Vestibulum
                        ante sed neque in gravida aliquam at commodo fusce. Sit varius adipiscing mollis bibendum donec
                        risus
                        eu sit. Turpis justo dui consectetur fringilla turpis morbi ullamcorper in. Odio ultricies augue
                        nisl
                        viverra mauris nulla. Non consequat sed interdum mauris semper amet sagittis dui eu. Amet
                        auctor.
                    </span>
                </div>
                <div class="col-span-3 flex items-center">
                    <ul>
                        <li class="text-2xl">Lorem ipsom dolor sit amet consectetur.</li>
                        <li class="text-2xl">Egestas cursus enim ac turpis amet sit.</li>
                        <li class="text-2xl">Ultrices proin dui in suspendisse curabitur lacus.</li>
                        <li class="text-2xl">Adipiscing volutpat morbi eu aliquam vulputate egestas.</li>
                    </ul>
                </div>
            </UContainer>
        </UContainer>

        <UContainer class="flex flex-col gap-6 mb-6 !px-0">
            <h1 class="italic">Usage</h1>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde possimus fugiat, hic nemo pariatur
                incidunt
                iusto
                vero facere inventore, dolor assumenda aut sunt numquam nesciunt alias molestias magni rem quisquam!
            </span>
        </UContainer>

        <UContainer class="flex flex-col space-y-6 !px-0">
            <div class="flex gap-8">
                <h1 class="italic">Client Speaks All</h1>
                <ReviewXL />
            </div>

            <UContainer class="min-h-[62px] flex items-center gap-8 !px-0">
                <NuxtLink to="/catalog/product" class="text-primary border-b">Total Reviews (9,999)</NuxtLink>
                <div class="flex justify-between gap-8">
                    <UButton variant="ghost" label="5 Stars (999)" color="neutral" />
                    <UButton variant="ghost" label="4 Stars (999)" color="neutral" />
                    <UButton variant="ghost" label="3 Stars (999)" color="neutral" />
                    <UButton variant="ghost" label="2 Stars (999)" color="neutral" />
                    <UButton variant="ghost" label="1 Stars (999)" color="neutral" />
                </div>
            </UContainer>

            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

            <UContainer class="min-h-[62px] grid place-items-center">
                <div class="px-4 py-2 ring ring-primary rounded-full">
                    <span class="text-primary">*pagination*</span>
                </div>
            </UContainer>

        </UContainer>
    </section>

</template>

<style scoped>
ul {
    list-style: disc;
    padding-left: 2rem;
}
</style>