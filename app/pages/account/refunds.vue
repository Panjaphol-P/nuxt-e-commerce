<script setup lang="ts">

import type { RadioGroupItem } from '@nuxt/ui'

const prodReasons = ref(['Unsatisfied quality', 'Defective product', 'Ordered by mistake', 'Item will take long time to arrive'])
const returnReasons = ref(['Changed my mind', 'Found a better place', 'Ordered by mistake', 'Items will take long time to arrive'])

type SignupData = {
    phone?: string
    name?: string
    email?: string
    streetAddress?: string
    district?: string
    subDistrict?: string
    province?: string
    city?: string
    zipCode?: string
    country?: string
}

const isEdit = ref(false)

const signupData1 = useState<SignupData>('signupData1')
const signupData2 = useState<SignupData>('signupData2')

const deliveryMethods = ref<RadioGroupItem[]>([
    {
        label: 'Express Courier — ฿ 99',
        value: 'express',
        description: 'Return item to our courier service via post office / drop-off point.'
    },
    {
        label: 'At Store — Free',
        value: 'atStore',
        description: 'You can return the item at our nearest store.'
    },
    {
        label: 'Pick-up Service — ฿ 99',
        value: 'pickUp',
        description: 'Your items will be picked up from your address directly.'
    }
])

const refundOptions = ref<RadioGroupItem[]>([
    {
        label: 'Gift Card',
        value: 'giftCard',
        description: 'Gift bouchers according to your refund, depends on the total price'
    },
    {
        label: 'Money Back',
        value: 'moneyBack',
        description: "We'll return the refund directly to your original payment method"
    },
    {
        label: 'Exchange',
        value: 'exchange',
        description: 'Return item with a new one via selected method of product delivery'
    }
])
</script>

<template>
    <BackButton />

    <div class="flex flex-col gap-2 justify-center text-center">
        <h2 class="italic">Product Return Application</h2>
        <span class="text-black/50">Fill out the request from below to initiates the process</span>
    </div>

    <div class="!px-0 flex flex-col gap-6">
        <h3 class="italic">Select Item for Return</h3>
        <div class="w-full ring ring-primary/25 p-8 rounded-[32px] flex flex-col gap-4">
            <div class="flex justify-between">
                <div class="flex gap-2 font-light">
                    <span class="text-2xl text-black">Order ID:</span>
                    <span class="text-2xl text-primary opacity-50">1234567890</span>
                </div>
                <div class="flex gap-2 font-light">
                    <span class="text-2xl text-black">Order Date:</span>
                    <span class="text-2xl text-primary opacity-50">09th Sep, 2025 11:53</span>
                </div>
            </div>

            <USeparator orientation="horizontal" />

            <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <UCheckbox size="xl" />
                    <div class="flex gap-6">
                        <div class="min-w-16 min-h-16 bg-primary/25"></div>
                        <div class="flex flex-col gap-2 justify-center">
                            <h3 class="font-bold">Product Name #1</h3>
                            <div class="flex gap-2">
                                <p>Size:</p>
                                <p class="opacity-50">000 ml.</p>
                                <USeparator orientation="vertical" />
                                <p>Price:</p>
                                <p class="opacity-50">฿ 999</p>
                                <USeparator orientation="vertical" />
                                <p>QTY:</p>
                                <p class="opacity-50">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <USelect :items="prodReasons" :ui="{
                    trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
                }" placeholder="Select Reasons" color="primary" highlight class="min-w-[200px]" />
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <UCheckbox size="xl" />
                    <div class="flex gap-6">
                        <div class="min-w-16 min-h-16 bg-primary/25"></div>
                        <div class="flex flex-col gap-2 justify-center">
                            <h3 class="font-bold">Product Name #2</h3>
                            <div class="flex gap-2">
                                <p>Size:</p>
                                <p class="opacity-50">000 ml.</p>
                                <USeparator orientation="vertical" />
                                <p>Price:</p>
                                <p class="opacity-50">฿ 999</p>
                                <USeparator orientation="vertical" />
                                <p>QTY:</p>
                                <p class="opacity-50">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <USelect :items="prodReasons" :ui="{
                    trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
                }" placeholder="Select Reasons" color="primary" highlight class="min-w-[200px]" />
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <UCheckbox size="xl" />
                    <div class="flex gap-6">
                        <div class="min-w-16 min-h-16 bg-primary/25"></div>
                        <div class="flex flex-col gap-2 justify-center">
                            <h3 class="font-bold">Product Name #3</h3>
                            <div class="flex gap-2">
                                <p>Size:</p>
                                <p class="opacity-50">000 ml.</p>
                                <USeparator orientation="vertical" />
                                <p>Price:</p>
                                <p class="opacity-50">฿ 999</p>
                                <USeparator orientation="vertical" />
                                <p>QTY:</p>
                                <p class="opacity-50">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <USelect :items="prodReasons" :ui="{
                    trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
                }" placeholder="Select Reasons" color="primary" highlight class="min-w-[200px]" />
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <UCheckbox size="xl" />
                    <div class="flex gap-6">
                        <div class="min-w-16 min-h-16 bg-primary/25"></div>
                        <div class="flex flex-col gap-2 justify-center">
                            <h3 class="font-bold">Product Name #4</h3>
                            <div class="flex gap-2">
                                <p>Size:</p>
                                <p class="opacity-50">000 ml.</p>
                                <USeparator orientation="vertical" />
                                <p>Price:</p>
                                <p class="opacity-50">฿ 999</p>
                                <USeparator orientation="vertical" />
                                <p>QTY:</p>
                                <p class="opacity-50">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <USelect :items="prodReasons" :ui="{
                    trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
                }" placeholder="Select Reasons" color="primary" highlight class="min-w-[200px]" />
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <UCheckbox size="xl" />
                    <div class="flex gap-6">
                        <div class="min-w-16 min-h-16 bg-primary/25"></div>
                        <div class="flex flex-col gap-2 justify-center">
                            <h3 class="font-bold">Product Name #1</h3>
                            <div class="flex gap-2">
                                <p>Size:</p>
                                <p class="opacity-50">000 ml.</p>
                                <USeparator orientation="vertical" />
                                <p>Price:</p>
                                <p class="opacity-50">฿ 999</p>
                                <USeparator orientation="vertical" />
                                <p>QTY:</p>
                                <p class="opacity-50">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <USelect :items="prodReasons" :ui="{
                    trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
                }" placeholder="Select Reasons" color="primary" highlight class="min-w-[200px]" />
            </div>
        </div>

        <h3 class="italic">Select Reason for Returning</h3>

        <div class="flex gap-8 p-8 rounded-[32px] ring ring-primary/50">
            <UFormField label="Choose Reason" class="w-full" required>
                <USelect color="primary" class="w-full" :items="returnReasons"
                    :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
                    highlight placeholder="Select Reasons" />
            </UFormField>
            <UFormField label="Describe More" class="w-full">
                <UInput class="w-full" highlight placeholder="Tell us more..." />
            </UFormField>
        </div>

        <h3 class="italic">Select the Method of Product Delivery</h3>

        <div class="flex gap-8 p-8 rounded-[32px] ring ring-primary/50">
            <URadioGroup :items="deliveryMethods" variant="card" color="primary" orientation="horizontal" class="w-full"
                default-value="express" :ui="{ label: '!font-light text-primary' }" highlight />
        </div>

        <h3 class="italic">Select Refund Option</h3>

        <div class="flex gap-8 p-8 rounded-[32px] ring ring-primary/50">
            <URadioGroup :items="refundOptions" variant="card" color="primary" orientation="horizontal" class="w-full"
                default-value="giftCard" :ui="{ label: '!font-light text-primary' }" highlight />
        </div>

        <div class="grid grid-cols-6 gap-8">
                <HelpCard help="updateAndcancel" class="w-full h-full col-span-3 items-center" />
            <div class="col-start-4 col-span-3 flex flex-col gap-4 p-6 rounded-[32px] ring ring-primary/25">
                <div v-if="!isEdit">
                    <div class="flex justify-between">
                        <h2 class="italic">Shipping Information</h2>
                        <UButton variant="outline" icon="i-lucide-pencil-line" color="primary" label="Edit Address"
                            class="rounded-full px-4 py-2" @click="isEdit = true" />
                    </div>
                    <div class="flex gap-8">
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-user-round" class="text-primary" size="24px" />
                                <span class="text-black font-light">{{ signupData2.name || 'Guest User' }}</span>
                            </div>
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-mail" class="text-primary" size="24px" />
                                <span class="text-black font-light">{{ signupData2.email || 'example@email.com' }}</span>
                            </div>
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-phone" class="text-primary" size="24px" />
                                <span class="text-black font-light">+00 12 345 6789</span>
                            </div>
                        </div>

                        <div class="flex gap-2 px-2.5 py-1.5">
                            <UIcon name="i-lucide-map-pin" class="text-primary" size="24px" />
                            <div class="flex flex-col gap-2">
                                <span class="text-black font-light">{{ signupData2.streetAddress || '123 Main St, Anytown, USA' }}</span>
                                <span class="text-black font-light">{{ signupData2.subDistrict || 'Subdistrict' }}, {{  signupData2.district || 'District' }}</span>
                                <span class="text-black font-light">{{ signupData2.city || 'City' }}, {{ signupData2.province || 'Province' }}</span>
                                <span class="text-black font-light">{{ signupData2.zipCode || 'Zip Code' }}, {{ signupData2.country || 'Country' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="flex justify-between">
                        <h2 class="italic">Shipping Information</h2>
                        <UButton variant="outline" icon="i-lucide-check" color="primary" label="Save Changes"
                            class="rounded-full px-4 py-2" @click="isEdit = false" />
                    </div>
                    <div class="flex gap-8"> 
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-user-round" class="text-primary" size="24px" />
                                <UInput variant="outline" :placeholder="signupData2.name || 'Guest User'" class="w-full" />
                            </div>
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-mail" class="text-primary" size="24px" />
                                <UInput variant="outline" :placeholder="signupData2.email || 'example@email.com'" class="w-full" />
                            </div>
                            <div class="flex gap-2 px-2.5 py-1.5 items-center">
                                <UIcon name="i-lucide-phone" class="text-primary" size="24px" />
                                <UInput variant="outline" :placeholder="signupData2.phone || '+00 12 345 6789'" class="w-full" />
                            </div>
                        </div>

                        <div class="flex gap-2 py-1.5">
                            <div class="">
                                <UIcon name="i-lucide-map-pin" class="text-primary" size="24px"  />
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <UInput variant="outline" :placeholder="signupData2.streetAddress || '123 Main St, Anytown, USA'" class="w-full" />
                                </div>
                                <div class="flex gap-2">
                                    <UInput variant="outline" :placeholder="signupData2.subDistrict || 'Subdistrict'" class="w-full" />
                                    <UInput variant="outline" :placeholder="signupData2.district || 'District'" class="w-full" />
                                </div>
                                <div class="flex gap-2">
                                <UInput variant="outline" :placeholder="signupData2.city || 'City'" class="w-full" />
                                <UInput variant="outline" :placeholder="signupData2.province || 'Province'" class="w-full" />
                                </div>
                                <div class="flex gap-2">
                                    <UInput variant="outline" :placeholder="signupData2.zipCode || 'Zip Code'" class="w-full" />
                                    <UInput variant="outline" :placeholder="signupData2.country || 'Country'" class="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center gap-2">
            <UButton color="primary" class="rounded-full px-4 py-2 text-2xl justify-center w-fit" label="Send Request" variant="solid" />
            <span class="text-black/50">Don't worry — your refund will be safely returned within a few days.</span>
        </div>
    </div>
</template>