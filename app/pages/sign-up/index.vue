<script setup>
definePageMeta({
    layout: 'sign-in'
})

const signupData1 = useState('signupData1', () => ({
    username: '' || 'Username01',
    password: '',
    confirmPassword: ''
}))

const show = ref(false)
const show2 = ref(false)

</script>

<template>
    <UContainer class="flex gap-8 !px-32 py-6 h-screen">
        <div class="w-full h-full">
            <NuxtImg src="/sign-up-bg1.svg" class="w-full h-full" />
        </div>
        <div class="w-full h-full flex flex-col gap- justify-center">
            <h1 class="font-bold text-center">Puréa</h1>
            <div class="w-full h-full ring ring-primary rounded-4xl p-8 flex flex-col gap-6 justify-start">
                <div class="min-w-[371px] flex flex-col gap-6 justify-start">
                    <div class="flex gap-2">
                        <h1 class="font-bold">Sign up</h1>
                        <div class="size-14 flex justify-center bg-primary rounded-full">
                            <h1 class="!text-white">1</h1>
                        </div>
                    </div>
                    <UFormField label="Username" required class="w-full">
                        <UInput v-model="signupData1.username" placeholder="Enter your username" class="w-full" color="primary" />
                    </UFormField>
                    <UFormField label="Password" help="Must contain more than 8 characters">
                        <UInput
                            v-model="signupData1.password"
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
                                    aria-control="signupData1.password"
                                    @click="show = !show" />
                            </template>
                        </UInput>
                    </UFormField>
                    <UFormField label="Confirm Password" required class="w-full" help="Both passwords must match">
                        <UInput
                            v-model="signupData1.confirmPassword"
                            placeholder="Enter your password"
                            :type="show2 ? 'text' : 'password'"
                            :ui="{ trailing: 'pe-1' }"
                            class="w-full"
                            >
                            <template #trailing>
                                <UButton
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    :icon="show2 ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                                    :aria-label="show2 ? 'Hide password' : 'Show password'"
                                    :aria-pressed="show2"
                                    aria-control="signupData1.confirmPassword"
                                    @click="show2 = !show2" />
                            </template>
                        </UInput>
                    </UFormField>

                    <UButton to="/sign-up/step-2" variant="solid"
                        class="justify-center items-center gap-2 px-4 py-2 text-white font-bold text-2xl rounded-full">
                        Continue
                        <UIcon name="i-lucide-arrow-right" size="24px" />
                    </UButton>

                    <USeparator orientation="horizontal" class="w-full">or</USeparator>

                    <div class="flex gap-6 justify-center">
                        <NuxtImg src="/icons/LogoGA.svg" alt="Google" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoFB.svg" alt="Facebook" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoAA.svg" alt="Apple" class="w-10 h-10" />
                        <NuxtImg src="/icons/LogoMS.svg" alt="Microsoft" class="w-10 h-10" />
                    </div>

                    <div class="flex w-full gap-2 justify-center">
                        <p>You've been here before?</p>
                        <p>
                            <NuxtLink to="/sign-in" class="text-primary underline">Sign In</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>