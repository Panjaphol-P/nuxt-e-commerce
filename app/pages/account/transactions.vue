<script setup>
const signupData1 = useState("signupData1");
const signupData2 = useState("signupData2");

const paymentType = ref(["Credit Card", "Debit Card"]);
import { vMaska } from "maska/vue";

const open = ref(false)

const paymentData = useState("paymentData", () => ({
  altEmail: "",
  payType: "",
  cardName: "",
  cardNum: "",
  expDate: "",
  cvc: "",
}));

const date = new Date();
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
const registeredDate = `${day} / ${month} / ${year}`;
</script>

<template>
  <BackButton />

  <UContainer class="!px-0 flex flex-col gap-8">
    <h1 class="italic">Transactions</h1>
    <div class="w-full grid grid-cols-12 gap-8">
      <AccountTab />

      <div class="col-start-4 col-span-full flex flex-col gap-6">
        <div
          class="rounded-[24px] grid grid-cols-9 ring ring-primary p-6 gap-8"
        >
          <div class="col-span-3">
            <h2 class="italic">Contact email</h2>
          </div>
          <div class="flex flex-col col-span-6 gap-4 w-full">
            <USwitch
              label="Send to my Account email"
              :description="signupData2.email"
            />
            <UFormField label="Send to an alternative email">
              <UInput
                placeholder="alternative_email@email.com"
                class="w-full"
              />
            </UFormField>
            <USwitch
              label="I agree to receive news and updates by email."
              default-value="true"
            />
          </div>
        </div>
        <div
          class="rounded-[24px] grid grid-cols-9 ring ring-primary p-6 gap-8"
        >
          <div class="col-span-3">
            <h2 class="italic">Payment Methods</h2>
          </div>
          <div class="flex flex-col col-span-6 gap-4 w-full">
            <PaymentCard />
            <PaymentCard />
            <UModal v-model:open="open">
              <UButton
                variant="ghost"
                color="neutral"
                icon="i-lucide-plus"
                size="lg"
                label="Add new payment method"
                class="opacity-50"
              />

              <template #content>
                <div class="flex flex-col gap-6 p-6 ring ring-primary/25">
                  <h3 class="italic">Add New Payment Method</h3>
                  <URadioGroup
                    indicator="start"
                    variant="card"
                    default-value="Credit Card"
                    :items="paymentType"
                  />

                  <USeparator orientation="horizontal" />

                  <UFormField label="Cardholder Name" required>
                    <UInput
                      highlight
                      variant="outline"
                      placeholder="Enter name here"
                      class="w-full"
                      size="lg"
                    />
                  </UFormField>
                  <UFormField label="Card Number" required>
                    <UInput
                      highlight
                      variant="outline"
                      v-maska="'#### #### #### ####'"
                      placeholder="0000 0000 0000 0000"
                      class="w-full"
                      size="lg"
                    />
                  </UFormField>
                  <div class="flex justify-between">
                    <UFormField label="Expiry Date" required>
                      <div class="flex gap-4 w-fit">
                        <UInput
                          highlight
                          variant="outline"
                          v-maska="'##'"
                          placeholder="MM"
                          class="w-16"
                          size="lg"
                        />
                        <UInput
                          highlight
                          variant="outline"
                          v-maska="'##'"
                          placeholder="YY"
                          class="w-16"
                          size="lg"
                        />
                      </div>
                    </UFormField>

                    <UFormField label="CVC" required>
                      <UInput
                        highlight
                        placeholder="***"
                        v-maska="'###'"
                        trailing-icon="i-lucide-shield-check"
                        size="lg"
                        class="w-20"
                      />
                    </UFormField>
                  </div>

                  <USeparator orientation="horizontal" />

                  <div class="flex justify-end gap-4">
                    <UButton
                      color="neutral"
                      variant="outline"
                      class="px-4 py-2 rounded-full"
                      label="Cancel"
                      @click="open = false"
                    />
                    <UButton
                      color="primary"
                      variant="solid"
                      class="px-4 py-2 rounded-full"
                      label="Add Card"
                      @click="open = false"
                    />
                  </div>
                </div>
              </template>
            </UModal>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
