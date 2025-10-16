<script setup>
definePageMeta({
    layout: 'sign-in'
})

const signupData1 = useState('signupData1')
const signupData2 = useState('signupData2')

const showPassword = ref(false)

const isLoggedIn = useState('isLoggedIn')

</script>

<template>
    <UContainer class="!px-32 grid grid-cols-12 grid-rows-12 gap-x-8 gap-y-6">
        <div class="col-start-6 col-span-2 row-start-2 grid place-items-center">
            <h2 class="font-bold">Puréa</h2>
        </div>

        <div
            class="row-start-3 row-span-9 col-span-full flex flex-col gap-6 p-8 justify-start ring ring-primary rounded-[64px]">
            <div class="col-span-full flex-col gap-2">
                <div class="flex gap-2 items-center">
                    <h1 class="font-bold">Sign Up</h1>
                    <div class="size-14 flex justify-center bg-primary rounded-full">
                        <h1 class="!text-white">3</h1>
                    </div>
                </div>
                <h3 class="!text-black">
                    Take a moment to review your details — accuracy helps us serve you better.
                </h3>
            </div>

            <div class="w-full h-full p-6 ring ring-primary rounded-4xl flex flex-col gap-8">
                <div class="w-full grid grid-cols-2 gap-8">
                    <div class="flex flex-col w-full py-8 gap-6 justify-start">
                        <div class="w-full flex flex-col gap-2">
                            <span class="text-primary text-[16px]">Username</span>
                            <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                <span class="text-black">{{ signupData1.username }}</span>
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <span class="text-primary text-[16px]">Password</span>
                            <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary flex items-center">
                                <span class="text-black w-full">
                                    {{  showPassword ? signupData1.password : '********' }}
                                </span>
                                <UButton
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                                    @click="showPassword = !showPassword"
                                />
                            </div>
                        </div>
                        <div class="flex gap-6">
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">Phone</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.phone }}</span>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">Password</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.dateOfBirth }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col py-8 gap-6 justify-center">
                        <div class="w-full flex flex-col gap-2">
                            <span class="text-primary text-[16px]">Street Addresss</span>
                            <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                <span class="text-black">{{ signupData2.streetAddress }}</span>
                            </div>
                        </div>
                        <div class="flex gap-6">
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">Subdistrict</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.subdistrict }}</span>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">District</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.district }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-6">
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">City</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.city }}</span>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">Province</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.province }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-6">
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">ZIP / Postal Code</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.zipCode }}</span>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <span class="text-primary text-[16px]">Country</span>
                                <div class="w-full rounded-md px-2.5 py-1.5 ring ring-primary">
                                    <span class="text-black">{{ signupData2.country }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-2">
                            <UCheckbox />
                            <p>Stay informed with important updates via your filled <span class="font-bold text-primary">email</span>.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full flex gap-8 justify-end items-center">
                    <div class="flex h-full items-center">
                        <p class="text-end h-fit">
                            By clicking Create Account you agreed to
                            our <span class="font-bold text-primary">Terms of Use</span> and <span class="font-bold text-primary">Privacy Policy</span>
                        </p>
                    </div>
                    <UButton to="/home" label="Create Account" @click="isLoggedIn = true" class="min-w-[317px] px-4 py-2 justify-center text-2xl font-bold rounded-full" color="primary" />
                </div>
            </div>
        </div>
    </UContainer>
</template>