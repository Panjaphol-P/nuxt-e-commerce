<script setup>
const isLoggedIn = useState("isLoggedIn", () => false);
const skincare_items = ref(['Cleansers', 'Moisturizers', 'Treatments', 'Sun Protection', 'Body Care'])
const function_items = ref(['Moisurizing', 'Brightening', 'Anti-Aging', 'Acne Treatment', 'Oil Control', 'Pore Care', 'Sun Protection (SPF)'])
const skintype_items = ref(['Normal', 'Sensitive', 'Oily', 'Dry', 'Combination'])
const ingredpref_items = ref(['Hyaluronic Acid', 'Vitamin C', 'Retinol', 'Peptides', 'Ceramides', 'Salicylic Acid (BHA)', 'Aloe Vera'])
const slide_value = ref([
    2500, 7500
])
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
        <div
          class="flex gap-2 ring ring-primary rounded-[32px] text-primary font-semibold text-[16px] px-4 py-2"
        >
          <UIcon name="i-custom-skincare" size="24px" color="primary" />
          Products
        </div>
        <UButton
          to="/account/favorite/blogs"
          variant="outline"
          color="neutral"
          label="Blogs"
          size="xl"
          class="rounded-full"
          icon="i-lucide-newspaper"
        />
      </div>
      <NavigationMinimized />
    </div>
    <div class="grid grid-cols-[20%_80%] gap-8">
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

        <UButton icon="i-lucide-trash" color="error" variant="ghost"
          >Clear All</UButton
        >
        <UButton
          class="w-full rounded-full text-center font-bold text-[16px] justify-center py-2"
          color="primary"
          variant="solid"
          >Apply</UButton
        >
      </UContainer>

      <UContainer class="w-full flex flex-col space-y-6 !pl-0">
            <div class="grid grid-cols-3 gap-x-8 gap-y-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
      </UContainer>
    </div>
  </UContainer>
</template>
