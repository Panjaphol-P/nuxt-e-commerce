<script setup lang="ts">

const skincare_items = ref(['Cleansers', 'Moisturizers', 'Treatments', 'Sun Protection', 'Body Care'])
const function_items = ref(['Moisurizing', 'Brightening', 'Anti-Aging', 'Acne Treatment', 'Oil Control', 'Pore Care', 'Sun Protection (SPF)'])
const skintype_items = ref(['Normal', 'Sensitive', 'Oily', 'Dry', 'Combination'])
const ingredpref_items = ref(['Hyaluronic Acid', 'Vitamin C', 'Retinol', 'Peptides', 'Ceramides', 'Salicylic Acid (BHA)', 'Aloe Vera'])
const slide_value = ref([
    2500, 7500
])

</script>

<template>
    <!--EVENT BANNER-->
    <UContainer class="banner min-w-full mx-0 grid grid-cols-2 gap-6">
        <div class="flex flex-col justify-center items-center space-y-4 text-primary text-center py-4">
            <h1 class="text-4xl lg:text-5xl">LA GRANDE AFFAIRE</h1>
            <div class="flex flex-col space-y-4">
                <p class="quote">"A new chapter — and offers made only for you."</p>
            </div>
            <p>@Siam Paragon, 9th September 2025</p>
        </div>
        <NuxtImg src="/Event_Demo.png" class="w-full h-full object-cover rounded-[16px]" alt="Event Demo" />
    </UContainer>

    <UContainer class="w-full grid grid-cols-[20%_80%] gap-6 mx-0 !p-0">
        <!--FILTER-->
        <UContainer class="flex flex-col w-full h-fit space-y-4 !p-2">

            <!---Skincare Checkbox-->
            <div class="space-y-4">
                <p class="font-bold text-primary">Skincare</p>
                <UCheckboxGroup class="ml-6" :items="skincare_items" />
            </div>

            <div class="h-px w-full bg-gray-300"></div>

            <!--Price Slider-->
            <div class="space-y-4">
                <p class="font-bold text-primary">Price</p>
                <USlider :min="0" :max="9999" v-model="slide_value" tooltip />
            </div>

            <div class="h-px w-full bg-gray-300"></div>

            <div class="space-y-4">
                <p class="font-bold text-primary">Functions</p>
                <UCheckboxGroup class="ml-6" :items="function_items" />
            </div>

            <div class="h-px w-full bg-gray-300"></div>

            <div class="space-y-4">
                <p class="font-bold text-primary">Skin Type</p>
                <UCheckboxGroup class="ml-6" :items="skintype_items" />
            </div>

            <div class="h-px w-full bg-gray-300"></div>

            <div class="space-y-4">
                <p class="font-bold text-primary">Ingredient Preferences</p>
                <UCheckboxGroup class="ml-6" :items="ingredpref_items" />
            </div>

            <div class="h-px w-full bg-gray-300"></div>

            <UButton icon="i-lucide-trash" color="error" variant="ghost">Clear All</UButton>
            <UButton class="w-full rounded-full text-center font-bold text-[16px] justify-center py-2" color="primary"
                variant="solid">Apply</UButton>

        </UContainer>

        <UContainer class="w-full flex flex-col space-y-6 !pl-0">
            <!--BEST SELLER-->
            <UContainer class="flex justify-between items-center !p-0">
                <h1 class="italic">Absolute Essentials</h1>
                <NavigationMinimized />
            </UContainer>

            <div class="grid grid-cols-3 gap-x-8 gap-y-6">
                <ProductCard tag="bestseller" />
                <ProductCard tag="bestseller" />
                <ProductCard tag="bestseller" />
                <ProductCard tag="bestseller" />
                <ProductCard tag="bestseller" />
                <ProductCard tag="bestseller" />
            </div>

            <!--NEW RELEASES-->
            <UContainer class="flex justify-between items-center !p-0">
                <h1 class="italic">Latest Creations</h1>
                <NavigationMinimized />
            </UContainer>

            <div class="grid grid-cols-3 gap-x-8 gap-y-6">
                <ProductCard tag="new" />
                <ProductCard tag="new" />
                <ProductCard tag="new" />
                <ProductCard tag="new" />
                <ProductCard tag="new" />
                <ProductCard tag="new" />
            </div>

            <!--SEASONAL PRODUCT-->
            <UContainer class="flex justify-between items-center !p-0">
                <h1 class="italic">Seasonal Picks</h1>
                <NavigationMinimized />
            </UContainer>

            <div class="grid grid-cols-3 gap-x-8 gap-y-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <!--WHOLE CATALOG-->
            <UContainer class="flex justify-between items-center !p-0">
                <h1 class="italic">The Collection</h1>
                <NavigationMinimized />
            </UContainer>

            <div class="grid grid-cols-3 gap-x-8 gap-y-6 mb-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </UContainer>
    </UContainer>
</template>

<style scoped>
b {
    color: var(--primary-color)
}

.sort-box {
    margin-bottom: 16px;
}
</style>