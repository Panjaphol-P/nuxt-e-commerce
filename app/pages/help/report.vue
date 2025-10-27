<script setup>
const category = ref([
  "Service Inconveniences",
  "Process Issues",
  "Staff Interactions",
]);
const isAnonymous = ref(false);
</script>

<template>
  <UContainer class="flex flex-col gap-6 !px-0 my-6">
    <div class="w-full flex flex-col gap-2 items-center">
      <h1 class="italic">Report an Issue</h1>
      <span class="text-gray-400">
        Our issue-report system is here to improve your experience — please
        report matters we can directly address.
      </span>
    </div>

    <UContainer class="flex gap-8 !px-0">
      <UButton
        variant="outline"
        color="neutral"
        class="px-4 py-2 items-center text-2xl font-light rounded-full bg-none"
      >
        <NuxtLink to="/help">Refund</NuxtLink>
      </UButton>
      <UButton
        variant="outline"
        color="primary"
        class="px-4 py-2 items-center text-2xl font-light rounded-full bg-none"
      >
        Report
      </UButton>
    </UContainer>
  </UContainer>

  <UContainer class="flex gap-8 !px-0">
    <div class="w-full flex flex-col gap-6">
      <h1 class="italic">What Issues We Can Handle</h1>
      <div>
        <span class="font-bold text-primary">We accept reports regarding:</span>
        <ul class="py-6">
          <li>
            Service inconveniences (e.g., late delivery, unclear updates, system
            errors)
          </li>
          <li>
            Process issues (e.g., wrong order handling, damaged packaging,
            missing steps)
          </li>
          <li>
            Staff interactions (e.g., unprofessional behavior, personality
            concerns)
          </li>
        </ul>
      </div>
      <div>
        <span class="font-bold text-primary"
          >We cannot accept reports for:</span
        >
        <ul class="py-6">
          <li>
            Issues outside our services (e.g., courier delays beyond our
            control, third-party purchases)
          </li>
          <li>
            Personal preferences (e.g., dislike of product scent or color if not
            defective)
          </li>
          <li>Duplicate complaints already solved.</li>
        </ul>
      </div>

      <div class="flex flex-col gap-6">
        <h1 class="italic">Frequently Asked Questions</h1>
        <UCard class="max-w-1/2 p-6">
          <div class="flex flex-col gap-4">
            <FAQs question="How can I report an issue with my order?">
              <template #answer>
                Please email
                <span class="text-primary font-bold">support@purea.com</span>
                with your order number and brief details. Our Client Care team
                will assist you promptly.
              </template>
            </FAQs>
            <FAQs
              question="How do I share feedback about an in-store experience?"
            >
              <template #answer>
                We value your feedback deeply. Kindly email
                <span class="text-primary font-bold">support@purea.com</span>
                or our
                <span class="text-primary font-bold">Report an Issue Form</span>
                with the date, branch, and a short note so we can address it
                with care.
              </template>
            </FAQs>
            <FAQs question="Where can I leave feedback or suggestions?">
              <template #answer>
                Kindly share your experience or suggestions at
                <span class="text-primary font-bold">support@purea.com</span> —
                we truly value your voice.
              </template>
            </FAQs>
            <FAQs question="How will I know if my report has been received?">
              <template #answer>
                You’ll receive a confirmation email once we’ve received your
                message. Our Client Care team will follow up shortly after.
              </template>
            </FAQs>
          </div>
        </UCard>
      </div>
    </div>

    <div class="min-w-[500px] flex flex-col gap-6 w-[475px]">
      <h1 class="italic">Report an Issue Form</h1>
      <UCard class="w-full p-6 flex flex-col gap-4 ring ring-primary rounded-8">
        <USwitch
          v-model="isAnonymous"
          label="Would you like to stay anonymous?"
          :description="
            isAnonymous
              ? 'Your details are safe with us — we only use them to assist with your report.'
              : 'You are reporting anonymously. Please note, without contact details our ability to follow up is limited'
          "
          class="mb-4"
        />
        <UFormField label="Category" class="mb-4">
          <USelect
            placeholder="Category"
            :items="category"
            class="min-w-[200px]"
          />
        </UFormField>
        <UFormField label="Order ID (Optional)" class="mb-4 min-w-[200px]">
          <UInput placeholder="Enter your order IDs" class="min-w-[200px]" />
        </UFormField>
        <UFormField label="Description" class="mb-4">
          <UTextarea
            placeholder="Tell us what happened?"
            class="w-full"
            :rows="6"
          />
        </UFormField>
        <UFormField label="Supporting Evidence" class="mb-4">
          <UFileUpload
            color="primary"
            highlight
            description="Upload photo, screenshots or files if needed"
            class="min-w-[200px]"
          />
        </UFormField>
        <UFormField label="Contact Email (Optional)" class="mb-4">
          <UInput
            icon="i-lucide-mail"
            placeholder="example@email.com"
            class="w-full"
          />
        </UFormField>

        <div class="w-full flex justify-center">
          <UButton class="rounded-full text-[16px] font-bolds !px-4 !py-2 mb-4"
            >Submit Report</UButton
          >
        </div>
        <div class="w-full flex justify-center">
          <span class="text-[12px] text-gray-400"
            >Please share as many details as possible so we can resolve your
            issue quickly.</span
          >
        </div>
      </UCard>

      <h1 class="italic">What We Guarantee</h1>

      <UCard
        class="w-full p-6 flex flex-col ring ring-primary rounded-8 justify-between"
      >
        <span
          >We take every report seriously, Whether it's about our service,
          process, or staff behavior, we guarantee that:</span
        >
        <div class="h-fit flex flex-col gap-4 my-4">
          <div class="flex gap-2 w-full">
            <LFileSearch />
            <div>
              1. Every report is
              <span class="font-bold text-primary">reviewed</span> — no matter
              how small.
            </div>
          </div>
          <div class="flex gap-2 w-full">
            <LShieldCheck />
            <div>
              2. Your voice is
              <span class="font-bold text-primary">safe</span> — all reports are
              handled confidentially.
            </div>
          </div>
          <div class="flex gap-2 w-full">
            <LMessageSquareReply class="size-6" />
            <div>
              3. You'll receive a
              <span class="font-bold text-primary">fair response</span> — most
              cases are replied to within 1-2 business days.
            </div>
          </div>
          <div class="flex gap-2 w-full">
            <LHatGlasses class="size-6" />
            <div>
              4. Anonymous reporting is
              <span class="font-bold text-primary">respected</span> — but
              details may help us resolve your issue faster.
            </div>
          </div>
          <div class="flex gap-2 w-full">
            <LAward class="size-6" />
            <div>
              5. We value feedback — every report helps us
              <span class="font-bold text-primary">improve</span> for all
              customers.
            </div>
          </div>
        </div>
        <div class="text-[12px] w-full flex justify-center text-gray-400">
          Your experience matters. Our team is here to listen, act, and ensure
          fairness.
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<style>
ul {
  list-style: disc;
  padding-left: 2rem;
}
</style>
