<script setup lang="ts">

definePageMeta({
    layout: 'default',
})

const productItems = [
    '/products/cosmetics-packages-set1(showcase).png',
    '/products/cosmetics-packages-set4.png',
    '/products/cosmetics-packages-set2.png',
    '/products/cosmetics-packages-set3.png',
]

</script>

<template>

    <!--INTRODUCTION-->
    <div class="w-full h-svh grid grid-cols-2 gap-6 items-center my-6">
        <!--LEFT-->
        <div class="w-full h-fit grid content-center gap-6 px-16">
            <h1 class="font-bold text-[40px]">Puréa</h1>
            <div class="space-y-[5px]">
                <p class="italic text-2xl text-black">" L'art du soin, inspiré par la nature "</p>
                <p class="text-black">— The art of care, inspired by nature.</p>
            </div>
            <NuxtLink to="/catalog" class="filled-primary">SHOP NOW</NuxtLink>
        </div>

        <!--RIGHT 
        *WIP* :
        1. position middle
        2. image resize
        -->
        <div class="w-full h-9/12 flex items-center justify-center relative">
            <!-- Static Product Frame -->
            <NuxtImg src="/icons/ProductFrame.svg" class="absolute w-4/6 h-full object-contain pointer-events-none z-10"
                alt="Product Frame" />

            <!-- Carousel for Products Only -->
            <UCarousel v-slot="{ item }" :items="productItems"
                :ui="{ item: 'w-full h-full flex items-center justify-center' }" indicators :autoplay="true"
                :interval="5000" class="w-fit h-full relative z-20">
                <NuxtImg :src="item" class="h-full object-contain grid place-items-center" alt="Product Image" />
            </UCarousel>
        </div>
    </div>

    <!--CATALOG SECTION-->

    <div class="w-full h-svh grid grid-cols-2 gap-6 items-center mb-6">

        <!--LATEST PRODUCT-->
        <UContainer class="space-y-6 !px-0">
            <h1 class="italic">Chosen With Care</h1>
            <UCard class="grid ring-2 w-full min-h-[675px] p-6">
                <UCard class="grid w-full h-[389px] text-center place-items-center rounded-[8px]">
                    <h1>*Latest Product*</h1>
                </UCard>

                <UContainer class="w-full h-[150px] flex flex-col justify-evenly text-center my-6">
                    <h3 class="italic">Always worth waiting for.</h3>
                    <h2 class="font-bold">Product Name</h2>
                    <h3 class="text-black">฿ 9,999 THB</h3>
                </UContainer>

                <UContainer class="w-full text-center">
                    <p>*Reviews*</p>
                </UContainer>
            </UCard>
        </UContainer>

        <!--CATALOG-->
        <UContainer class="!p-0 w-full space-y-6">
            <h1 class="italic">Our Iconic Formula</h1>
            <div class="grid grid-rows-2 grid-cols-2 gap-6 min-h-[675px]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </UContainer>
    </div>

    <!--BLOG SECTION-->
    <div class="w-full flex flex-col space-y-6 mb-6">
        <h1 class="italic">Where Knowledge & Beauty Meet</h1>
        <UContainer class="w-full grid grid-cols-3 gap-8 !mx-0 !p-0">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </UContainer>
    </div>

    <!--SHORT STORY-->
    <div class="w-full h-svh mb-6 flex items-center">
        <UContainer class="w-full grid grid-cols-2 gap-x-8 gap-y-6 !m-0 !p-0">

            <!--PORTRAIT-->
            <div class="h-full flex items-center justify-end">
                <UCard class="w-2/3 h-full grid place-items-center">
                    <h2>*Portrait*</h2>
                </UCard>
            </div>

            <!--STORIES-->
            <div class="w-5/6 flex flex-col space-y-6">

                <h1 class="italic">Built on care, driven by trust.</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Tellus amet ac sagittis eu velit euismod ipsum. Amet amet pharetra velit eget amet etiam.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates sint maxime voluptatibus
                    nesciunt asperiores inventore maiores ipsam optio rem, accusamus odit cupiditate fugiat accusantium
                    quisquam temporibus tenetur eum in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                    doloremque voluptas! Eum totam vero, ea sint et, culpa ad odio laudantium modi optio velit in
                    debitis
                </p>

                <div class="flex space-x-2 items-center">
                    <div class="w-[8px] h-[64px] bg-primary"></div>
                    <h3 class="italic !text-black">"Lorem ipsum dolor sit amet consectetur."</h3>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nunc mauris tellus et eget est eu viverra.
                    Eleifend et vitae non in dignissim. Mollis etiam vel mauris et. Cum morbi a mauris libero aliquet
                    odio ut accumsan. Purus eget sed ipsum aliquam nec. Ipsum a blandit in id sagittis cras auctor. Nec
                    risus sem neque morbi sollicitudin. A mattis varius vehicula turpis. Dictumst mollis duis diam
                    donec.
                </p>
            </div>
        </UContainer>
    </div>

</template>

<style></style>