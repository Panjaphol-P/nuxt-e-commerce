<template>
    <footer class="h-[405px] bg-primary text-white p-10 rounded-t-[48px] mt-8">
        <UContainer class="h-full flex space-x-6">
            <div class="min-w-[372px] h-full flex flex-col justify-between items-center">
                <NuxtLink to="/home"><h1 class="!text-[128px] !text-white !font-bold">Puréa</h1></NuxtLink>
                <div class="flex flex-col items-center space-y-8">
                    <div class="flex space-x-4">
                        <UIcon name="i-custom-facebook" size="40px" />
                        <UIcon name="i-custom-instagram" size="40px" />
                        <UIcon name="i-custom-tiktok" size="40px" />
                        <UIcon name="i-custom-x" size="40px" />
                    </div>
                    <p class="text-2xl">&copy; {{ new Date().getFullYear() }} Puréa. All rights reserved.</p>
                </div>
            </div>

            <div class="w-full h-full flex flex-col justify-between text-white subtext text-2xl">
                <!-- Spacer -->
                <div></div>
                
                <!-- Centered catalog section -->
                <div class="grid grid-cols-4">
                    <div class="flex flex-col space-y-4">
                        <div class="font-bold">CATALOG</div>
                        <NuxtLink to="/catalog">Essentials</NuxtLink>
                        <NuxtLink to="/catalog">Latest Creations</NuxtLink>
                        <NuxtLink to="/catalog">Seasonal Picks</NuxtLink>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <div class="font-bold">BLOG</div>
                        <NuxtLink to="/blog">Events</NuxtLink>
                        <NuxtLink to="/blog">Trending</NuxtLink>
                        <NuxtLink to="/blog">Announcements</NuxtLink>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <div class="font-bold">CONTACT</div>
                        <NuxtLink to="/about">About Us</NuxtLink>
                        <NuxtLink to="/contact">FAQs</NuxtLink>
                        <NuxtLink to="/contact">Contacts</NuxtLink>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <div class="font-bold">HELP</div>
                        <NuxtLink to="/account">My Account</NuxtLink>
                        <NuxtLink to="/account/history">Tracking Order</NuxtLink>
                        <NuxtLink to="/help">Help Center</NuxtLink>
                    </div>
                </div>

                <!-- Bottom aligned -->
                <div class="w-full flex justify-end space-x-8">
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                </div>
            </div>
        </UContainer>
    </footer>
</template>