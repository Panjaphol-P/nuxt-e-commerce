<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const state = reactive({
  full_name: undefined,
  email: undefined,
  message: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.full_name) errors.push({ name: "full_name", message: "Required" });
  if (!state.email) errors.push({ name: "email", message: "Required" });
  if (!state.message) errors.push({ name: "message", message: "Required" });

  return errors;
};

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "primary",
    icon: "i-lucide-check",
  });
  console.log(event.data);
}
</script>

<template>
  <BackButton />

  <UContainer class="h-fit flex gap-8 my-6 !px-0">
    <div class="w-1/2 h-full flex flex-col space-y-6">
      <h1 class="text-[64px] italic">Contact Us</h1>
      <div class="flex flex-col">
        <span class="text-2xl">
          Whether you have questions, concerns or inquiries, our team is always
          ready to assist you the best.
        </span>
      </div>

      <div class="h-full grid grid-cols-2 gap-8">
        <UCard class="w-full h-full p-6 rounded-[32px] flex flex-col space-y-2">
          <div class="grid rounded-full size-16 bg-primary place-items-center">
            <LPhone :size="32" color="white" />
          </div>

          <h2 class="italic">Our Support</h2>

          We provide various methods for you to caarry out all the problem with
          24 hours services without any fees included. We Provide contacts via
          <span class="text-primary font-bold">phone, email, our branches</span>
          or directly at
          <span class="text-primary font-bold">our headquarter.</span>
        </UCard>
        <UCard class="w-full h-full p-6 rounded-[32px] flex flex-col space-y-2">
          <div class="grid rounded-full size-16 bg-primary place-items-center">
            <LMessageSquareReply :size="32" color="white" />
          </div>

          <h2 class="italic">Our Responses</h2>
          We prioritizes to give our customers the fastest response for the best
          outcomes within 12 hours. From
          <span class="text-primary font-bold">general</span> to
          <span class="text-primary font-bold"> enterprise</span> questions, we
          value them all the highest.
        </UCard>
      </div>
    </div>

    <UCard class="w-1/2 p-6 rounded-[32px] flex flex-col justify-between">
      <h1 class="italic mb-4">Contact Form</h1>
      <UForm
        :validate="validate"
        :state="state"
        class="w-full flex flex-col justify-between"
        @submit="onSubmit"
        validate-on="submit"
      >
        <UFormField label="Name" name="full_name" class="w-full">
          <UInput
            color="primary"
            variant="outline"
            :highlight="true"
            v-model="state.full_name"
            class="w-full"
            placeholder="Name Surname"
          />
        </UFormField>

        <UFormField label="Email" name="email" class="w-full">
          <UInput
            color="primary"
            variant="outline"
            :highlight="true"
            v-model="state.email"
            class="w-full"
            placeholder="example@email.com"
          />
        </UFormField>

        <UFormField label="Message" name="message" class="w-full">
          <UTextarea
            color="primary"
            :rows="6"
            :highlight="true"
            placeholder="Write a message"
            v-model="state.message"
            class="w-full text-[16px]"
          />
        </UFormField>

        <div class="flex justify-end w-full pt-2">
          <UButton
            type="submit"
            class="rounded-full gap-2 px-4 py-2"
            trailing-icon="i-lucide-chevron-right"
          >
            Submit
          </UButton>
        </div>
      </UForm>
    </UCard>
  </UContainer>

  <UContainer class="flex flex-col space-y-6 justify-center my-6">
    <h1 class="italic text-center">Frequently Asked Questions</h1>

    <UContainer
      class="h-full grid grid-cols-2 gap-8 p-6 ring ring-primary rounded-4xl"
    >
      <div class="ml-6 flex flex-col space-y-6">
        <FAQs question="How do I know that my questions will be answered?">
          <template #answer>
            Our support team will email the answers back to your given email
            within <span class="text-primary font-bold">12 hours</span>.
          </template>
        </FAQs>
        <FAQs question="Can I contact you through social media?">
          <template #answer>
            Absolutely, our official social medias are
            <span class="text-primary font-bold">always</span> having support
            staff standby ready for your any concerns.
          </template>
        </FAQs>
        <FAQs
          answer="Lorem ipsum dolor sit amet consectetur. Quis egestas vitae habitant tellus nisl ornare. Blandit pellentesque."
        />
        <FAQs
          answer="Lorem ipsum dolor sit amet consectetur. Quis egestas vitae habitant tellus nisl ornare. Blandit pellentesque."
        />
      </div>
      <div class="mr-6 flex flex-col space-y-6">
        <FAQs
          question="Can I provide feedback or make a complaint through your contact?"
        >
          <template #answer>
            Of course, you can provide feedbacks or make a complaint at any
            contact information we given. However, we recommend you to follow
            the guidelines in
            <NuxtLink to="/help" class="font-bold text-primary underline"
              >Help Center</NuxtLink
            >
            for the best experience and faster processing time.
          </template>
        </FAQs>
        <FAQs
          question="After sending a message, how do I know which one is yours?"
        >
          <template #answer>
            Our support email is <span class="text-primary font-bold">support@purea.com</span> and for contact is
            <span class="text-primary font-bold">contact@purea.com</span> only.
          </template>
        </FAQs>
        <FAQs
          answer="Lorem ipsum dolor sit amet consectetur. Quis egestas vitae habitant tellus nisl ornare. Blandit pellentesque."
        />
        <FAQs
          answer="Lorem ipsum dolor sit amet consectetur. Quis egestas vitae habitant tellus nisl ornare. Blandit pellentesque."
        />
      </div>
    </UContainer>
  </UContainer>
</template>

<style></style>
