<script>
</script>

<template>
    <UContainer class="flex flex-col gap-6 !px-0 my-6">

        <UContainer class="items-center flex flex-col gap-2 text-center !px-0">
            <h1 class="italic">Refund / Exchange Order</h1>
            <span class="text-gray-400">
                The problem always has a solution — and we're here to make it right.
            </span>
        </UContainer>

        <UContainer class="flex gap-8 !px-0">
            <UButton variant="outline" color="primary"
                class="px-4 py-2 items-center text-2xl font-light rounded-full bg-none">
                Refund
            </UButton>
            <UButton variant="outline" color="neutral"
                class="px-4 py-2 items-center text-2xl font-light rounded-full bg-none">
                <NuxtLink to="/help/report">Report</NuxtLink>
            </UButton>
        </UContainer>

        <h2 class="italic">Eligibility</h2>

        <ol>
            <li>
                Please provide a short <span class="font-bold text-primary">video of unboxing</span> your parcel.
                This helps us verify damages or missinng items quickly.
            </li>
            <li>
                Refund requests must be made <span class="font-bold text-primary">within 7 days after delivery.</span>
            </li>
            <li>
                All requests must be send to our <span class="font-bold text-primary">official refund email:
                    refund@purea.com</span>.
                We do not process refunds through other channels.
            </li>
            <li>
                Refund are processed within <span class="font-bold text-primary">7 - 14 business days,</span>
                depending on your payment provider.
            </li>
        </ol>
        <span>
            <span class="font-bold text-primary">Note:</span> if you have any doubts, our support team is here to guide you
            through the process. You can contact via; email<span class="font-bold text-primary"> support@purea.com</span>
            or phone <span class="font-bold text-primary">+66 012 345 6789</span>
        </span>

        <UContainer class="flex justify-center !px-0">
            <h2 class="italic">How to request a refund / exchange</h2>
        </UContainer>

        <div class="min-h-[235px] flex justify-between !p-6 rounded-4xl font-bold ring ring-primary text-center">
            <div class="w-fit flex flex-col p-2 gap-2 justify-center items-center">
                <NuxtImg src="/graphic/steps/step1.svg" class="w-16" />
                <div>Record the unboxing of your parcel.</div>
            </div>
            <div class="w-fit flex flex-col p-2 gap-2 justify-center items-center">
                <NuxtImg src="/graphic/steps/step2.svg" class="w-16" />
                <div>Take photos of any items that did not pass quality check.</div>
            </div>
            <div class="w-fit flex flex-col p-2 gap-2 justify-center items-center">
                <NuxtImg src="/graphic/steps/step3.svg" class="w-16" />
                <div>Send the video @ photos to <span class="text-primary">refund@purea.com</span></div>
            </div>
            <div class="w-fit flex flex-col p-2 gap-2 justify-center items-center">
                <NuxtImg src="/graphic/steps/step4.svg" class="w-16" />
                <div>Once we've inspected your requests, we'll reply to the same email as soon as possible</div>
            </div>
        </div>

        <UContainer class="flex justify-center !px-0-">
            <h2 class="italic">Frequently Asked Questions</h2>
        </UContainer>

        <UContainer class="flex ring ring-primary rounded-4xl justify-between p-6 items-start gap-8">
            <div class="w-full flex flex-col justify-center gap-4">
                <h2 class="italic text-center">Refund</h2>
                    <FAQs
                    question="Can I exchange my product instead of getting a refund?"
                    answer="Yes, if the product is defective or incorrect, we can arrange an exchange upon request."
                     />
                    <FAQs
                    question="Do I have to pay for return shipping?"
                    answer="If the product is defective or incorrect, return shipping is covered by us. For other reasons, customers may be responsible for return costs."
                    />
                    <FAQs
                    question="What if I never received my parcel"
                    answer="If your tracking shows no delivery, please contact us immediately. We'll investigate with the courier and update you on next steps."
                    />
                    <FAQs
                    question="Can I request a partial refund?"
                    answer="Yes, if only part of your order is defective or missing, we can process a partial refund."
                    />
            </div>

            <USeparator orientation="vertical"></USeparator>

            <div class="w-full flex flex-col justify-center gap-4">
                <h2 class="italic text-center">Exchange</h2>
                    <FAQs
                    question="Can I exchange my product instead of getting a refund?"
                    answer="Yes, if the product is defective or incorrect, we can arrange an exchange upon request."
                     />
                    <FAQs
                    question="Do I have to pay for return shipping?"
                    answer="If the product is defective or incorrect, return shipping is covered by us. For other reasons, customers may be responsible for return costs."
                    />
                    <FAQs
                    question="What if I never received my parcel"
                    answer="If your tracking shows no delivery, please contact us immediately. We'll investigate with the courier and update you on next steps."
                    />
                    <FAQs
                    question="Can I request a partial refund?"
                    answer="Yes, if only part of your order is defective or missing, we can process a partial refund."
                    />
            </div>
        </UContainer>

    </UContainer>
</template>

<style>
ol {
    list-style: decimal;
    padding-left: 16px;
}
</style>