<script setup>
const isLoggedIn = useState('isLoggedIn', () => false)
const language = ref(['TH', 'EN'])
</script>

<template>
    <nav>
        <div class="flex justify-between relative">
            <div style="width:fit-content;">
                <NuxtLink class="brand" to="/home">Puréa</NuxtLink>
            </div>
            <div class="flex w-[580px] absolute left-1/2 -translate-x-1/2 justify-between times-font items-center h-full">
                <NuxtLink to="/catalog">Catalog</NuxtLink>
                <USeparator orientation="vertical" color="neutral" class="h-full" />
                <NuxtLink to="/blog">Blog</NuxtLink>
                <USeparator orientation="vertical" color="neutral" class="h-full" />
                <NuxtLink to="/contact">Contact</NuxtLink>
                <USeparator orientation="vertical" color="neutral" class="h-full" />
                <NuxtLink to="/about">About Us</NuxtLink>
            </div>
            <div v-if="!isLoggedIn" class="flex items-center">
                <NuxtLink class="outline-primary" to="/sign-in">SIGN IN</NuxtLink>
            </div>
            <div v-else class="flex items-center gap-6">
                <USelect icon="i-lucide-globe" variant="ghost" default-value="TH" color="neutral" :items="language" class="!text-black" />
                <UButton to="/account" color="neutral" icon="i-lucide-user-round" variant="ghost" class="rounded-full" />
                <UButton to="/account/favorite" color="neutral" icon="i-lucide-heart" variant="ghost" class="rounded-full" />
                <ShoppingCart />
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .centernav{
        justify-content: space-between;
    }
    ul{
        align-content: space-between;
        padding: 0;
    }

    .times-font {
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
        color: black;
        padding: 8px 16px;
    }
</style>