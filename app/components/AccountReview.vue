<script setup>
    const isAnonymous = ref(false)
    const isReviewed = ref(false)
</script>

<template>
    <div class="flex justify-between items-center p-2 rounded-[8px] ring ring-primary/25 bg-white">
        <div class="flex gap-4">
            <div class="rounded-[3px] w-[100px] h-[100px] bg-primary/25 grid place-items-center"></div>
            <div class="flex flex-col justify-between">
                <div class="flex flex-col gap-2">
                    <h3 class="font-bold">Product #1</h3>
                    <div class="flex gap-2">
                        <div class="flex gap-1">
                            <p>Size: <span class="text-black/50">000 ml.</span></p>
                            <USeparator orientation="vertical" />
                            <p>Price: <span class="text-black/50">฿ 999</span></p>
                            <USeparator orientation="vertical" />
                            <p>QTY: <span class="text-black/50">1</span></p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2">
                    <p>Latest Purchase: </p>
                    <p class="text-black/50">DD Month YYYY</p>
                </div>
            </div>
        </div>

        <div>
            <UModal>
                <UButton v-if="!isReviewed" variant="outline" color="warning" icon="i-custom-star" label="Rate this product"
                    class="rounded-full" />
                <UButton v-else variant="outline" color="warning" icon="i-custom-star" label="Product Rated" disabled
                    class="rounded-full" />

                <template #content>
                    <div class="flex flex-col gap-6 p-8">
                        <div class="flex flex-col gap-4 justify-center text-center">
                            <h2 class="italic">Add a Review</h2>
                            <span class="text-black/50">Tell us how you feel about this product and get vouchers
                                for the next purchases</span>
                        </div>
                        <USwitch v-model="isAnonymous" label="Would you like to stay anonymous?"
                            :description="isAnonymous ? 'Your details are safe with us — we only use them to assist with your report.' : 'You are reporting anonymously. Please note, without contact details our ability to follow up is limited'" />

                        <UFormField label="Add your Rating" required>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-2">
                                    <UIcon name="i-custom-star-filled" size="40px" />
                                    <UIcon name="i-custom-star-filled" size="40px" />
                                    <UIcon name="i-custom-star-filled" size="40px" />
                                    <UIcon name="i-custom-star-half-filled" size="40px" />
                                </div>

                                <span class="font-bold">4.5/5</span>
                            </div>
                        </UFormField>

                        <UFormField label="Write your Review">
                            <UTextarea :rows="6" placeholder="Write here..." highlight class="w-full" />
                        </UFormField>

                        <UFormField label="Upload photos">
                            <UFileUpload variant="button" color="primary" highlight />
                        </UFormField>

                        <div class="flex flex-col gap-2">
                            <UButton variant="solid" color="primary" label="Submit Reviews"
                                class="rounded-full w-full px-4 py-2 justify-center" @click="isReviewed = true" />
                            <span class="text-[12px] text-center">We sincerely appreciate all reviews from our
                                customers.</span>
                            <span class="text-[12px] text-center">Without you, without us.</span>
                        </div>

                    </div>
                </template>
            </UModal>
        </div>
    </div>
</template>