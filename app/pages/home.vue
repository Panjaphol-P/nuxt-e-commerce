<script setup lang="ts">
import type Tags from "~/components/Tags.vue";

definePageMeta({
  layout: "custom",
});

const testimonials = [
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
  {
    user: {
      name: "Name S.",
    },
    quote: "Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.",
  },
];

const productItems = [
  "/products/showcase/product1.png",
  "/products/showcase/product2.png",
  "/products/showcase/product3.png",
  "/products/showcase/product4.png",
];
</script>

<template>
  <NuxtImg src="/flower.png" class="absolute top-4 -right-50 size-[400px] rotate-45 " />
  <NuxtImg src="/flower.png" class="absolute -bottom-70 -left-50 size-[400px] rotate-64 " />
  <NuxtImg src="/flower.png" class="absolute -right-45 -bottom-[1250px] size-[400px] -rotate-131 " />
  <NuxtImg src="/flower.png" class="absolute -left-50 -bottom-[2500px] size-[400px] rotate-65 " />
  <NuxtImg src="/flower.png" class="absolute -right-50 -bottom-[3000px] size-[400px] rotate-43 " />
  <!--INTRODUCTION-->
  <div class="w-full h-svh grid grid-cols-2 gap-6 items-center my-6 px-32">
    <!--LEFT-->
    <div class="w-full h-fit grid content-center gap-6 px-16">
      <h1 class="font-bold text-[40px]">Puréa</h1>
      <div class="space-y-[5px]">
        <p class="italic text-2xl text-black">
          " L'art du soin, inspiré par la nature "
        </p>
        <p class="text-black">— The art of care, inspired by nature.</p>
      </div>
      <NuxtLink to="/catalog" class="filled-primary">SHOP NOW</NuxtLink>
    </div>

    <div class="relative h-4/5 w-full grid place-items-center">
      <!-- Background frame -->
      <NuxtImg
        src="/frames/ProductFrame.svg"
        class="absolute w-4/6 h-full object-contain z-10"
        alt="Product Frame"
      />

      <!-- Centered carousel container -->
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <UCarousel
          v-slot="{ item }"
          :items="productItems"
          :ui="{
            item: 'grid place-items-center',
            container: 'transition-[height]',
            dot: 'w-6 h-1',
          }"
          fade
          :autoplay="true"
          :interval="5000"
          class="grid place-items-center"
        >
          <NuxtImg
            :src="item"
            class="w-[70%] h-[500px] object-contain"
            alt="Product Image"
          />
        </UCarousel>
      </div>
    </div>
  </div>

  <!--CATALOG SECTION-->

  <div class="w-full h-svh grid grid-cols-2 gap-6 items-center mb-6 px-32">
    <!--LATEST PRODUCT-->
    <UContainer class="space-y-6 !px-0">
      <h1 class="italic">Chosen With Care</h1>
      <UCard class="grid ring-2 w-full min-h-[675px] p-6">
        <div
          class="grid w-full h-[389px] bg-primary/10 text-center place-items-center rounded-[8px] relative"
        >
          <Tags tag="new" size="lg" class="absolute left-4 top-4" />
          <NuxtImg src="/products/latest-product.png" class="h-[389px]" />
        </div>

        <UContainer
          class="w-full h-[150px] flex flex-col justify-evenly text-center my-6"
        >
          <h3 class="italic">Always worth waiting for.</h3>
          <h2 class="font-bold">Product Name</h2>
          <h3 class="!text-black/50">฿ 9,999 THB</h3>
        </UContainer>

        <div class="flex justify-center">
          <ReviewFull />
        </div>
      </UCard>
    </UContainer>

    <!--CATALOG-->
    <UContainer class="!p-0 w-full space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="italic">Our Iconic Formula</h1>
        <NavigationMinimized />
      </div>
      <div class="grid grid-rows-2 grid-cols-2 gap-x-6 gap-y-6 min-h-[675px]">
        <ProductCard tag="bestseller" />
        <ProductCard tag="bestseller" />
        <ProductCard tag="bestseller" />
        <ProductCard tag="bestseller" />
      </div>
    </UContainer>
  </div>

  <!--BLOG SECTION-->
  <div class="w-full flex flex-col space-y-6 mb-6 px-32">
    <h1 class="italic">Where Knowledge & Beauty Meet</h1>
    <UContainer class="w-full grid grid-cols-3 gap-8 !mx-0 !p-0">
      <BlogCard tag="tips" />
      <BlogCard tag="seasonal" />
      <BlogCard tag="review" />
      <BlogCard tag="announcements" />
      <BlogCard tag="skincare101" />
      <BlogCard tag="skincare101" />
    </UContainer>
  </div>

  <!--SHORT STORY-->
  <div class="w-full h-svh mb-6 flex items-center px-32">
    <UContainer
      class="w-full h-[80%] grid grid-cols-2 gap-x-8 gap-y-6 !m-0 !p-0"
    >
      <!--PORTRAIT-->
      <div class="h-full flex justify-end">
        <NuxtImg src="/ceo.png" format="webp" />
      </div>

      <!--STORIES-->
      <div class="w-5/6 flex flex-col gap-6 items-start justify-center">
        <h1 class="italic">Built on care, driven by trust.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Tellus amet ac sagittis eu
          velit euismod ipsum. Amet amet pharetra velit eget amet etiam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptates sint maxime voluptatibus nesciunt asperiores inventore
          maiores ipsam optio rem, accusamus odit cupiditate fugiat accusantium
          quisquam temporibus tenetur eum in. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel, doloremque voluptas! Eum totam
          vero, ea sint et, culpa ad odio laudantium modi optio velit in debitis
        </p>

        <div class="flex space-x-2 items-center">
          <div class="w-[8px] h-[64px] bg-primary"></div>
          <h3 class="italic !text-black">
            "Lorem ipsum dolor sit amet consectetur."
          </h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur. Vestibulum nunc mauris tellus
          et eget est eu viverra. Eleifend et vitae non in dignissim. Mollis
          etiam vel mauris et. Cum morbi a mauris libero aliquet odio ut
          accumsan. Purus eget sed ipsum aliquam nec. Ipsum a blandit in id
          sagittis cras auctor. Nec risus sem neque morbi sollicitudin. A mattis
          varius vehicula turpis. Dictumst mollis duis diam donec.
        </p>
      </div>
    </UContainer>
  </div>

  <div class="w-full h-fit flex flex-col justify-center gap-6">
    <h1 class="italic px-32">Voices That Trust Us</h1>

    <UMarquee
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="outline"
        :description="testimonial.quote"
        highlight
        highlight-color="primary"
        :ui="{
            description: 'text-center text-black text-[16px]'
        }"
        class="w-[272px] h-[412px] shrink-0"
      >
        <template #footer>
          <UUser
            v-bind="testimonial.user"
            size="xl"
            class="!italic !w-full"
          />
        </template>
      </UPageCard>
    </UMarquee>
  </div>
</template>

<style></style>
