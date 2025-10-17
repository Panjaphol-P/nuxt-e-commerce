<script setup>
const paymentData = useState("paymentData", () => ({
  altEmail: "",
  payType: "",
  cardName: "",
  cardNum: "",
  expDate: "",
  cvc: "",
}));
</script>

<template>
  <div
    class="ring ring-primary rounded-[16px] flex w-full justify-between items-center p-4"
  >
    <div class="flex gap-2 items-center">
      <div class="size-16 bg-primary/25"></div>
      <div class="flex flex-col">
        <span class="font-light text-black">Mastercard Credit</span>
        <span class="font-light text-black">Ends in 1234</span>
        <span class="font-light text-black">Expiration Date (MM/YY)</span>
      </div>
    </div>
    <UButton
      variant="ghost"
      color="error"
      icon="i-lucide-trash"
      size="lg"
      class="rounded-full"
    />
  </div>
</template>
