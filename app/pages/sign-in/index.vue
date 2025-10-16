<script setup>
definePageMeta({
    layout: 'signIn',
})

const show = ref(false)
const password = ref('')

const isLoggedIn = useState('isLoggedIn')

</script>

<template>
    <UContainer class="min-h-svh flex gap-8 !px-32 py-14">
        <div class="flex flex-col gap-8 justify-center w-full h-svh">
            <h2 class="font-bold text-center">Puréa</h2>
            <div class="flex flex-col p-8 gap-6 items-center w-full h-full ring ring-primary rounded-4xl">
                <h1 class="font-bold">Sign in</h1>
                <div class="min-w-[371px]">
                    <UFormField label="Email or Username" class="mb-6">
                        <UInput placeholder="Enter your email or username" color="primary" class="w-full" />
                    </UFormField>

                    <UFormField label="Password" class="mb-6">
                        <UInput
                            v-model="password"
                            placeholder="Enter your password"
                            :type="show ? 'text' : 'password'"
                            :ui="{ trailing: 'pe-1' }"
                            class="w-full"
                            >
                            <template #trailing>
                                <UButton
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    :icon="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                                    :aria-label="show ? 'Hide password' : 'Show password'"
                                    :aria-pressed="show"
                                    aria-control="password"
                                    @click="show = !show" />
                            </template>
                        </UInput>
                    </UFormField>

                    <div class="flex justify-between items-center text-primary my-6">
                        <UCheckbox label="Remember me" class="!label-primary" />
                        <NuxtLink to="/sign-in/forgot-password">Forgot password?</NuxtLink>
                    </div>
                    <UButton to="/home" color="primary" variant="solid" @click="isLoggedIn = true"
                        class="font-bold rounded-full w-full justify-center text-2xl my-6">Sign In</UButton>
                    <USeparator orientation="horizontal" class="w-full my-6" color="neutral">or</USeparator>
                    <div class="flex gap-6 justify-center my-6">
                        <NuxtImg src="/icons/LogoGA.svg" alt="Google" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoFB.svg" alt="Facebook" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoAA.svg" alt="Apple" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoMS.svg" alt="Microsoft" class="w-10 h-10" />
                    </div>
                    <div class="flex w-full gap-2 justify-center">
                        <p>First time with us?</p>
                        <p>
                            <NuxtLink to="/sign-up" class="text-primary underline">Create an Account</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <NuxtImg src="/sign-in-bg1.svg" class="w-full object-cover rounded-4xl" />
    </UContainer>
</template>