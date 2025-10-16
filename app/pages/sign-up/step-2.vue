<script setup>
definePageMeta({
    layout: 'signIn'
})

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

const signupData2 = useState('signupData2', () => ({
    email: '',
    phone: '',
    dateOfBirth: '',
    streetAddress: '',
    subdistrict: '',
    district: '',
    city: '',
    province: '',
    zipCode: '',
    country: ''
}))


</script>

<template>
    <UContainer class="flex gap-8 !px-32 py-14">
        <div class="w-full h-full">
            <NuxtImg src="/sign-up-bg1.svg" class="w-full h-full" />
        </div>
        <div class="w-full flex flex-col gap- justify-center">
            <h1 class="font-bold text-center">Puréa</h1>
            <div class="w-full h-full ring ring-primary rounded-4xl p-8 flex flex-col gap-6 justify-start">
                <div class="min-w-[371px] flex flex-col gap-6 justify-start">
                    <div class="flex gap-2">
                        <h1 class="font-bold">Sign up</h1>
                        <div class="size-14 flex justify-center bg-primary rounded-full">
                            <h1 class="!text-white">2</h1>
                        </div>
                    </div>
                    <UFormField label="Email" required class="w-full">
                        <UInput class="w-full" color="primary" />
                    </UFormField>
                    <div class="w-full flex gap-8">
                        <UFormField label="Phone" class="w-full">
                            <UInput v-model="signupData2.phone" v-maska="'+## ## ### ####'" variant="outline" placeholder="+00 12 345 6789"
                                class="w-full" />
                        </UFormField>
                        <UFormField label="Date of Birth" required class="w-full">
                            <UInput v-model="signupData2.dateOfBirth" v-maska="'## / ## / ####'" variant="outline" placeholder="DD / MM / YYYY"
                                class="w-full" />
                        </UFormField>
                    </div>
                    <UFormField label="Street Address" required class="w-full">
                        <UInput v-model="signupData2.streetAddress" class="w-full" />
                    </UFormField>
                    <div class="w-full flex gap-8">
                        <UFormField label="Subdistrict" required class="w-full">
                            <UInput v-model="signupData2.subdistrict" class="w-full" />
                        </UFormField>
                        <UFormField label="District" required class="w-full">
                            <UInput v-model="signupData2.district" variant="outline" class="w-full" />
                        </UFormField>
                    </div>
                    <div class="w-full flex gap-8">
                        <UFormField label="City" required class="w-full">
                            <UInput v-model="signupData2.city" class="w-full" />
                        </UFormField>
                        <UFormField label="Province" required class="w-full">
                            <USelectMenu v-model="signupData2.province" :items="provinces" placeholder="Province" class="w-full" />
                        </UFormField>
                    </div>

                    <div class="w-full flex gap-8">
                        <UFormField label="ZIP / Postal Code" required class="w-full">
                            <UInput v-model="signupData2.zipCode" v-maska="'#####'" class="w-full" />
                        </UFormField>
                        <UFormField label="Country" required class="w-full">
                            <USelectMenu v-model="signupData2.country" :items="countries" placeholder="Country" class="w-full" />
                        </UFormField>
                    </div>

                    <UButton to="/sign-up/step-3" variant="solid"
                        class="justify-center items-center gap-2 px-4 py-2 text-white font-bold text-2xl rounded-full">
                        Continue
                        <UIcon name="i-lucide-arrow-right" size="24px" />
                    </UButton>

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