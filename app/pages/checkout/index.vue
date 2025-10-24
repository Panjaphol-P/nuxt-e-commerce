<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'
import { vMaska } from "maska/vue"

const provinces = ref([
    "Amnat Charoen",
    "Ang Thong",
    "Bangkok",
    "Bueng Kan",
    "Buri Ram",
    "Chachoengsao",
    "Chai Nat",
    "Chaiyaphum",
    "Chanthaburi",
    "Chiang Mai",
    "Chiang Rai",
    "Chonburi",
    "Chumphon",
    "Kalasin",
    "Kamphaeng Phet",
    "Kanchanaburi",
    "Khon Kaen",
    "Krabi",
    "Lampang",
    "Lamphun",
    "Lopburi",
    "Mae Hong Son",
    "Maha Sarakham",
    "Mukdahan",
    "Nakhon Nayok",
    "Nakhon Pathom",
    "Nakhon Phanom",
    "Nakhon Ratchasima",
    "Nakhon Sawan",
    "Nakhon Si Thammarat",
    "Nan",
    "Narathiwat",
    "Nong Bua Lam Phu",
    "Nong Khai",
    "Nonthaburi",
    "Pathum Thani",
    "Pattani",
    "Phang Nga",
    "Phatthalung",
    "Phayao",
    "Phetchabun",
    "Phetchaburi",
    "Phichit",
    "Phitsanulok",
    "Phra Nakhon Si Ayutthaya",
    "Phrae",
    "Phuket",
    "Prachin Buri",
    "Prachuap Khiri Khan",
    "Ranong",
    "Ratchaburi",
    "Rayong",
    "Roi Et",
    "Sa Kaeo",
    "Sakon Nakhon",
    "Samut Prakan",
    "Samut Sakhon",
    "Samut Songkhram",
    "Saraburi",
    "Satun",
    "Sing Buri",
    "Si Sa Ket",
    "Songkhla",
    "Sukhothai",
    "Suphan Buri",
    "Surat Thani",
    "Surin",
    "Tak",
    "Trang",
    "Trat",
    "Ubon Ratchathani",
    "Udon Thani",
    "Uthai Thani",
    "Uttaradit",
    "Yala",
    "Yasothon"
])

const countries = ref([
    "Argentina",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costa Rica",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Ghana",
    "Greece",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Kenya",
    "Laos",
    "Luxembourg",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Myanmar (Burma)",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam"
])

const steps: StepperItem[] = [
    { title: 'Payment', slot: 'payment' as const },
    { title: 'Delivery', slot: 'delivery' as const },
    { title: 'Complete', slot: 'complete' as const }
]

const stepper = useTemplateRef('stepper')
const signupData2 = useState('signupData2')

const payments = [
    {
        type: 'credit',
        brand: 'Visa',
        lastFour: '1234',
        expiry: '12/25'
    },
    {
        type: 'debit',
        brand: 'Mastercard',
        lastFour: '5678',
        expiry: '11/24'
    }
]
</script>

<template>
    <UContainer class="!px-0 flex flex-col gap-6">
        <div class="w-fit mt-6">
            <UButton icon="i-lucide-arrow-left"
                class="text-primary flex items-center border-b border-primary rounded-[0px]" variant="ghost" :ui="{
                    leadingIcon: 'text-primary',
                }" @click="stepper?.prev()">
                <p>Back</p>
            </UButton>
        </div>
        <UStepper ref="stepper" :items="steps" class="w-full">
            <template #payment>
                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-6 flex flex-col gap-6">
                        <div class="flex flex-col gap-6 ring ring-primary/50 p-6 rounded-[32px]">
                            <h2 class="italic text-center">Your Order</h2>
                            <div class="grid grid-cols-7 gap-6 text-center">
                                <div class="col-span-3">
                                    <p class="text-primary">Product</p>
                                </div>
                                <div class="col-span-2">
                                    <p class="text-primary">Quantity</p>
                                </div>
                                <div class="col-span-1">
                                    <p class="text-primary">Total</p>
                                </div>
                                <div class="col-span-1">
                                    
                                </div>
                            </div>
                            

                            <ProductCardSum type="unfixed" name="Product Name #1" />
                            <ProductCardSum type="unfixed" name="Product Name #2" />
                            <ProductCardSum type="unfixed" name="Product Name #3" />
                            <ProductCardSum type="unfixed" name="Product Name #4" />
                        </div>

                        <div class="flex gap-2 ring ring-primary/50 p-6 rounded-[32px]">
                            <UInput highlight placeholder="Enter your coupon code" class="w-full" />
                            <UButton color="primary" label="Apply Voucher" variant="solid"
                                class="rounded-full px-4 py-2" />
                        </div>
                    </div>
                    <div class="col-span-6 flex flex-col gap-6">
                        <div class="flex flex-col gap-4 ring ring-primary/50 p-6 rounded-[32px]">
                            <h2 class="italic text-center">Payment Selections</h2>
                            <p class="opacity-50">— Saved Payment Methods</p>
                            <div class="flex flex-col gap-4">
                                <SavedPayment type="credit" brand="Visa" :last-four="'1234'" expiry="12/25" />
                                <SavedPayment type="debit" brand="Mastercard" :last-four="'5678'" expiry="11/24" />
                            </div>
                            <p class="opacity-50">— Available Payment Methods</p>
                            <div class="flex gap-6 flex-wrap">
                                <AvailablePayment type="promptpay" />
                                <AvailablePayment type="card" />
                                <AvailablePayment type="cashondelivery" />
                            </div>
                            <div class="flex">
                                <AvailablePayment type="mobilebanking" />
                            </div>
                        </div>

                        <div class="flex flex-col ring ring-primary/25 p-6 gap-4 rounded-[32px] items-center">
                            <div class="max-w-[500px] flex flex-col gap-5">
                                <h2 class="italic text-center">Payment Details</h2>
                                <UFormField label="Cardholder Name" required>
                                    <UInput highlight placeholder="Name Surname" size="xl" class="w-full" />
                                </UFormField>
                                <div class="flex gap-6">
                                    <UFormField label="Card Number" required class="w-fit">
                                        <UInput highlight v-maska="'#### #### #### ####'"
                                            placeholder="1234 5678 9012 3456" size="xl" class="w-fit" />
                                    </UFormField>
                                    <UFormField label="Expiry Date" required class="max-w-[100px]">
                                        <UInput highlight v-maska="'## / ##'" placeholder="MM / YY" size="xl"
                                            class="w-fit" />
                                    </UFormField>
                                    <UFormField label="CVV" required class="max-w-[100px]">
                                        <UInput highlight v-maska="'###'" placeholder="***" type="password" size="xl"
                                            trailing-icon="i-lucide-shield-check"
                                            :ui="{ trailingIcon: 'text-primary' }" />
                                    </UFormField>
                                </div>
                                <div class="flex flex-col gap-2 items-center">
                                    <UButton @click="stepper?.next()" variant="solid" label="Continue"
                                        class="font-bold justify-center items-center px-4 py-2 rounded-full text-2xl w-full"
                                        trailing-icon="i-lucide-arrow-right" :ui="{ trailingIcon: 'size-[24px]' }" />
                                    <span class="opacity-50 text-[12px]">Rest easy — your privacy is always our
                                        priority.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #delivery>
                <div class="grid grid-cols-12 gap-8">
                    <div class="flex flex-col gap-6 col-span-6">
                        <div class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px] justify-center">
                            <div class="flex flex-col gap-2">
                                <h2 class="italic text-center">Saved Address</h2>
                                <span class="opacity-50 text-center text-[12px]">Saved address will automatically fill
                                    in the form for you</span>
                            </div>

                            <!-- Saved Information Button -->
                            <SavedAddress type="current" />
                            <SavedAddress type="others" />

                        </div>

                        <div class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px] justify-center">
                            <h2 class="italic text-center">Delivery Selections</h2>

                            <!-- Standard -->
                            <p class="opacity-50">— Standard Delivery</p>
                            <AvailableDelivery type="standard" />

                            <!-- Express -->
                            <p class="opacity-50">— Express Delivery</p>
                            <AvailableDelivery type="express" />

                            <!-- International -->
                            <p class="opacity-50">— International Delivery</p>
                            <AvailableDelivery type="international" />
                        </div>
                    </div>

                    <div
                        class="grid-start-7 col-span-6 ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px] h-fit">
                        <h2 class="italic text-center">Address Details</h2>
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-8">
                                <UFormField label="Name" required class="flex-1">
                                    <UInput highlight placeholder="Name Surname" size="xl" class="w-full" />
                                </UFormField>

                                <UFormField label="Phone" required class="flex-1">
                                    <UInput highlight v-maska="'+## ## ### ####'" placeholder="+00 12 345 6789"
                                        size="xl" class="w-full" />
                                </UFormField>
                            </div>

                            <UFormField label="Address" required>
                                <UInput highlight placeholder="123/456 Something Building (00fl.)" size="xl"
                                    class="w-full" />
                            </UFormField>

                            <div class="flex gap-8">
                                <UFormField label="Subdistrict" required class="flex-1">
                                    <UInput highlight placeholder="Subdistrict" size="xl" class="w-full" />
                                </UFormField>
                                <UFormField label="District" required class="flex-1">
                                    <UInput highlight placeholder="District" size="xl" class="w-full" />
                                </UFormField>
                            </div>

                            <UFormField label="City" required>
                                <UInput highlight placeholder="City" size="xl" class="w-full" />
                            </UFormField>

                            <div class="flex gap-8">
                                <UFormField label="Province" required class="flex-1">
                                    <USelectMenu highlight :items="provinces" placeholder="Province" size="xl"
                                        class="w-full" />
                                </UFormField>
                                <UFormField label="Zip Code" required class="flex-1">
                                    <UInput highlight v-maska="'#####'" placeholder="Zip Code" size="xl"
                                        class="w-full" />
                                </UFormField>
                            </div>

                            <UFormField label="Country" required>
                                <USelectMenu highlight :items="countries" placeholder="Country" size="xl"
                                    class="w-full" />
                            </UFormField>

                            <UButton @click="stepper?.next()" variant="solid" label="Continue"
                                class="font-bold justify-center items-center px-4 py-2 rounded-full text-2xl w-full"
                                trailing-icon="i-lucide-arrow-right" :ui="{ trailingIcon: 'size-[24px]' }" />
                        </div>
                    </div>
                </div>
            </template>
            <template #complete>
                <div class="flex flex-col gap-2 items-center mb-6">
                    <h2 class="italic text-center">Order Placed</h2>
                    <div class="flex">
                        <span class="opacity-50">Order ID: </span>
                        <span class="font-bold text-primary opacity-100 px-1">1234567890</span>
                        <span class="opacity-50">— Thank you for choosing us!</span>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-7 flex flex-col gap-6">
                        <div class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px]">
                            <ProductCardSum type="fixed" name="Product Name #1" />
                            <ProductCardSum type="fixed" name="Product Name #2" />
                            <ProductCardSum type="fixed" name="Product Name #3" />
                            <ProductCardSum type="fixed" name="Product Name #4" />
                        </div>

                        <div class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px]">
                            <h2 class="italic text-center">Shipping Method</h2>
                            <div class="flex justify-between items-center ring ring-primary p-2 rounded-[8px]">
                                <div class="flex flex-col">
                                    <span class="font-light">Example Express</span>
                                    <div class="flex gap-2 items-center">
                                        <UIcon name="i-lucide-truck" class="text-primary" size="24px" />
                                        <span class="text-primary font-light">Estimated delivery <span
                                                class="font-bold">3 Sep - 6 Sep 2025</span></span>
                                    </div>
                                </div>

                                <div>
                                    <h3 class="!text-black">฿ 999</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-start-8 col-span-5 flex flex-col gap-6">
                        <div class="bg-primary flex flex-col gap-4 p-6 rounded-[32px]">
                            <h2 class="italic text-center !text-white">Order Summary</h2>

                            <div class="flex justify-between text-white">
                                <p class="font-light">Subtotal</p>
                                <p class="font-bold">฿ 9,999.00</p>
                            </div>
                            <div class="flex justify-between text-white">
                                <p class="font-light">Shipping Fee</p>
                                <p class="font-bold">฿ 99.00</p>
                            </div>
                            <div class="flex justify-between text-white">
                                <p class="font-light">VAT (7%)</p>
                                <p class="font-bold">฿ 99.00</p>
                            </div>
                            <div class="flex justify-between text-white items-center rounded-[8px]">
                                <p class="font-light">Discount</p>
                                <p class="font-bold">- ฿ 99.00</p>
                            </div>

                            <USeparator orientation="horizontal" />

                            <div class="flex justify-between p-2 items-center rounded-[8px]">
                                <h3 class="!text-white font-bold">Total</h3>
                                <h3 class="!text-white font-bold">฿ 9,999.00</h3>
                            </div>
                        </div>

                        <div class="ring ring-primary/25 flex flex-col gap-4 p-6 rounded-[32px]">

                            <h2 class="italic text-center">Shipping Information</h2>

                            <div class="flex justify-between">
                                <div class="flex flex-col gap-4">
                                    <div class="flex gap-2 items-center">
                                        <UIcon name="i-lucide-user-round" class="text-primary" size="24px" />
                                        <span>Name Surname</span>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <UIcon name="i-lucide-mail" class="text-primary" size="24px" />
                                        <span>example@email.com</span>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <UIcon name="i-lucide-phone" class="text-primary" size="24px" />
                                        <span>+00 12 345 6789</span>
                                    </div>
                                </div>
                                <div class="flex gap-2 justify-start">
                                    <UIcon name="i-lucide-map-pin" class="text-primary" size="24px" />
                                    <div class="flex flex-col">
                                        <span>123/456 Something Building</span>
                                        <span>Subdistrict, District</span>
                                        <span>City, Province, 12345</span>
                                        <span>Country</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HelpCard help="updateAndcancel" />
                    </div>
                </div>
            </template>
        </UStepper>
    </UContainer>
</template>