<script setup>
const signupData1 = useState("signupData1");
const signupData2 = useState("signupData2");

const transactionData = useState("transactionData", () => ({
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
  <UContainer class="!px-0 flex flex-col gap-8">
    <h1 class="italic">Profile</h1>
    <div class="w-full grid grid-cols-12 gap-8">
      <AccountTab />

      <div class="col-start-4 col-span-full flex flex-col gap-6">
        <div class="rounded-[24px] grid grid-cols-9 ring ring-primary p-6 gap-8">
          <div class="col-span-3">
            <h2 class="italic">Contact email</h2>
          </div>
          <div class="flex flex-col col-span-6 gap-4 w-full">
            <USwitch label="Send to my Account email" description="example@email.com" />
            <UFormField label="Send to an alternative email">
              <UInput placeholder="alternative_email@email.com" />
            </UFormField>
            <USwitch label="I agree to receive news and updates by email." default-value="true" />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
