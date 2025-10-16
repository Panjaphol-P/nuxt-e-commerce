<template>
    <!--Event Banner-->

    <NuxtLink to="/blog/event">
        <UContainer class="banner grid grid-cols-2 gap-6">
            <UContainer class="h-full flex flex-col justify-center items-center space-y-4 text-primary !px-0">
                <p>26 August 2025</p>
                <h1 class="!text-[48px]">Why Nature Always Better</h1>
                <h3 class="italic">"Organic gift — from our land"</h3>
                <p>Name Surname</p>
            </UContainer>

            <div class="relative">
                <NuxtImg src="/Blog_Demo.png" class="w-full h-full object-cover rounded-[16px]" alt="Blog Demo" />
                <Tags tag="skincare101" size="lg" class="absolute bottom-4 left-4" />
            </div>
        </UContainer>
    </NuxtLink>

    <!--Blog Category-->
    <UContainer class="flex justify-between !px-0">
        <NuxtLink to="blog" class="default-primary">All Blogs</NuxtLink>
        <NuxtLink to="blog/announcement" class="default-black">Announcements</NuxtLink>
        <NuxtLink to="blog/product-reviews" class="default-black">Product Reviews</NuxtLink>
        <NuxtLink to="blog/skincare-101" class="default-black">Skincare 101</NuxtLink>
        <NuxtLink to="blog/tips-tricks" class="default-black">Skincare Tips & Tricks</NuxtLink>
        <NuxtLink to="blog/seasonal-care" class="default-black">Seasonal Care</NuxtLink>
    </UContainer>

    <!--Sorting-->
    <UContainer class="flex my-8 space-x-6 !px-0 h-fit">
        <Filter topic="popularity" />
        <USeparator orientation="vertical" class="h-full" />
        <Filter topic="release_date" />
    </UContainer>


    <UContainer class="flex flex-col space-y-6 !px-0">

        <!--Trending Blogs-->
        <div class="flex justify-between items-center">
            <h1 class="italic">What's Blooming</h1>
            <NavigationMinimized />
        </div>

        <div class="grid grid-cols-3 gap-8">
            <BlogCard tag="tips" />
            <BlogCard tag="seasonal" />
            <BlogCard tag="review" />
        </div>

        <!--Latest Blogs-->
        <div class="flex justify-between items-center">
            <h1 class="italic">Latest Journal</h1>
            <NavigationMinimized />
        </div>

        <div class="grid grid-cols-3 gap-8">
            <BlogCard tag="announcements" />
            <BlogCard tag="skincare101" />
            <BlogCard tag="tips" />
        </div>

        <!--All Blogs-->
        <div class="flex justify-between items-center">
            <h1 class="italic">Our Garden of Ideas</h1>
            <NavigationMinimized />
        </div>

        <div class="grid grid-cols-3 gap-x-8 gap-y-6">
            <BlogCard tag="seasonal" />
            <BlogCard tag="review" />
            <BlogCard tag="announcements" />
            <BlogCard tag="skincare101" />
            <BlogCard tag="announcements" />
            <BlogCard tag="tips" />
        </div>

    </UContainer>

</template>

<style scoped></style>