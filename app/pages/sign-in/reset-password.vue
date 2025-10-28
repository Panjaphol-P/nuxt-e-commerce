<script setup>
definePageMeta({
    layout: 'sign-in'
})

const resetClicked = ref(false)
const password = ref('')
const confirmPassword = ref('')
const show = ref(false)
const show2 = ref(false)

</script>

<template>
    <UContainer class="h-screen !px-32 grid grid-cols-6 grid-rows-6 gap-6 bg-cover bg-[url('/bg-2.svg')]">
        <div class="flex items-end">
            <UButton @click="resetClicked = false" icon="i-lucide-arrow-left"
                class="h-fit font-light bg-primary/90 backdrop-blur-md rounded-full px-4 py-2 gap-2 text-white">Back
            </UButton>
        </div>

        <div v-if="!resetClicked" class="col-start-2 col-span-4 row-span-full grid place-items-center">
            <div
                class="bg-white/70 backdrop-blur-md rounded-[48px] flex flex-col items-center p-12 gap-6 h-fit min-w-[766px]">
                <div class="flex flex-col gap-2 text-center">
                    <h2 class="font-bold">Create new password</h2>
                    <h3 class="!text-black/50">Choose a new password — something secure and memorable.</h3>
                </div>

                <UFormField help="Must be at least 8 characters" class="">
                    <UInput v-model="password" icon="i-lucide-lock" placeholder="New Password" highlight
                        :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1', leadingIcon: 'text-primary' }" size="xl" class="min-w-[400px]">
                        <template #trailing>
                            <UButton color="neutral" variant="link" size="sm"
                                :icon="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                                :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show2"
                                aria-control="password" @click="show = !show" />
                        </template>
                    </UInput>
                </UFormField>

                <UFormField help="Both passwords must match" class="">
                    <UInput v-model="confirmPassword" icon="i-lucide-lock" placeholder="Confirm Password" highlight
                        :type="show2 ? 'text' : 'password'" :ui="{ trailing: 'pe-1', leadingIcon: 'text-primary' }" size="xl" class="min-w-[400px]">
                        <template #trailing>
                            <UButton color="neutral" variant="link" size="sm"
                                :icon="show2 ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                                :aria-label="show2 ? 'Hide password' : 'Show password'" :aria-pressed="show"
                                aria-control="confirmPassword" @click="show2 = !show2" />
                        </template>
                    </UInput>
                </UFormField>

                <UButton @click="resetClicked = true" variant="solid" label="Reset Password" color="primary" class="text-2xl font-bold min-w-[400px] px-4 py-2 rounded-full justify-center" />
            </div>
        </div>

        <div v-else class="col-start-2 col-span-4 row-span-full grid place-items-center">
            <div class="bg-white/70 backdrop-blur-md rounded-[48px] flex flex-col items-center p-12 gap-6 h-fit min-w-[776px]">
                <NuxtImg src="/graphic/reset-success.svg" />

                <div class="flex flex-col gap-2 text-center">
                    <h2 class="font-bold">Reset password success.</h2>
                    <span class="text-2xl text-black/50">Password reset successful. You're all set to sign in again</span>
                </div>

                <UButton to="/sign-in" variant="solid" color="primary" class="justify-center text-2xl font-bold rounded-full min-w-[400px]" label="Return to Sign in" />
            </div>
        </div>
    </UContainer>
</template>