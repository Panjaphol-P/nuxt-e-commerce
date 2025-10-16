<script setup>
definePageMeta({
    layout: 'sign-in'
})

const submitClicked = ref(false)

</script>

<template>
    <UContainer class="h-screen !px-32 grid grid-cols-6 grid-rows-6 gap-6 bg-cover bg-[url('/bg-2.svg')]">
        <div class="flex items-end">
            <UButton to="/sign-in" icon="i-lucide-arrow-left"
                class="h-fit font-light bg-primary/90 backdrop-blur-md rounded-full px-4 py-2 gap-2 text-white">Back
            </UButton>
        </div>

        <div v-if="!submitClicked" class="col-start-2 col-span-4 row-span-full grid place-items-center">
            <div class="bg-white/70 backdrop-blur-md rounded-[48px] flex flex-col items-center p-12 gap-6 h-fit">
                <div class="flex flex-col gap-2 text-center">
                    <h2 class="font-bold">Trouble signing in?</h2>
                    <span class="text-2xl opacity-50">Let's take care of it together — resetting is simple.</span>
                </div>

                <UFormField>
                    <UInput icon="i-lucide-mail" placeholder="example@email.com" color="primary" highlight
                        class="min-w-[510px]" />
                </UFormField>
                <UButton @click="submitClicked = true" label="Send Instructions" variant="solid" color="primary"
                    class="min-w-[510px] text-2xl rounded-full px-4 py-2 font-bold justify-center" />
            </div>

        </div>

        <div v-else class="col-start-2 col-span-4 row-span-full grid place-items-center">
            <div class="bg-white/70 backdrop-blur-md rounded-[48px] flex flex-col items-center p-12 gap-6 h-fit min-w-[776px]">

                <NuxtImg src="/graphic/email-send.svg" />

                <div class="flex flex-col gap-2 text-center">
                    <h2 class="font-bold">We've sent you an email</h2>
                    <span class="text-2xl opacity-50">It may take a moment to arrive</span>
                </div>

                <UButton to="/sign-in/reset-password" label="Open email app" variant="solid" color="primary"
                    class="min-w-[329px] rounded-full px-4 py-2 font-bold justify-center text-2xl" />

                <span class="text-[16px] text-black/50">Don't forget to check your <span
                        class="text-primary font-bold">spam</span> or <span class="text-primary font-bold">junk
                        folder</span>.</span>

                <div class="text-black/50 text-[16px]">
                    <pre class="text-center">Doesn't appear?
<span class="font-bold text-primary">Resend email</span> or <span @click="submitClicked = false" class="font-bold text-primary cursor-pointer">Try another email address.</span></pre>
                </div>

            </div>
        </div>
    </UContainer>
</template>