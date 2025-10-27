<script setup>
const isLoggedIn = useState("isLoggedIn", () => false);
const skincare_items = ref([
  "Cleansers",
  "Moisturizers",
  "Treatments",
  "Sun Protection",
  "Body Care",
]);
const function_items = ref([
  "Moisurizing",
  "Brightening",
  "Anti-Aging",
  "Acne Treatment",
  "Oil Control",
  "Pore Care",
  "Sun Protection (SPF)",
]);
const skintype_items = ref([
  "Normal",
  "Sensitive",
  "Oily",
  "Dry",
  "Combination",
]);
const ingredpref_items = ref([
  "Hyaluronic Acid",
  "Vitamin C",
  "Retinol",
  "Peptides",
  "Ceramides",
  "Salicylic Acid (BHA)",
  "Aloe Vera",
]);
const slide_value = ref([2500, 7500]);
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
        <UButton
          to="/account/favorite"
          variant="outline"
          color="neutral"
          label="Products"
          size="xl"
          class="rounded-full"
          icon="i-custom-skincare"
          :ui="{ leadingIcon: 'text-primary' }"
        />
        <div
          class="flex gap-2 ring ring-primary rounded-[32px] text-primary font-semibold text-[16px] px-4 py-2"
        >
          <UIcon name="i-lucide-newspaper" size="24px" color="primary" />
          Blogs
        </div>
      </div>
      <NavigationMinimized />
    </div>

    <UContainer class="flex justify-between !px-0">
      <NuxtLink to="blog" class="default-primary">All Blogs</NuxtLink>
      <NuxtLink to="blog/announcement" class="default-black"
        >Announcements</NuxtLink
      >
      <NuxtLink to="blog/product-reviews" class="default-black"
        >Product Reviews</NuxtLink
      >
      <NuxtLink to="blog/skincare-101" class="default-black"
        >Skincare 101</NuxtLink
      >
      <NuxtLink to="blog/tips-tricks" class="default-black"
        >Skincare Tips & Tricks</NuxtLink
      >
      <NuxtLink to="blog/seasonal-care" class="default-black"
        >Seasonal Care</NuxtLink
      >
    </UContainer>

    <UContainer class="flex space-x-6 !px-0 h-fit">
      <Filter topic="popularity" />
      <USeparator orientation="vertical" class="h-8" />
      <Filter topic="release_date" />
    </UContainer>

    <UContainer class="flex flex-col space-y-6 !px-0">
      <div class="grid grid-cols-3 gap-8">
        <BlogCard tag="tips" />
        <BlogCard tag="seasonal" />
        <BlogCard tag="review" />
        <BlogCard tag="skincare101" />
        <BlogCard tag="announcements" />
        <BlogCard tag="review" />
      </div>
    </UContainer>
  </UContainer>
</template>
