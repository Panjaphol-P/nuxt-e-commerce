<script setup>
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <UButton
    icon="i-lucide-arrow-left"
    class="text-primary flex items-center border-b border-primary rounded-[0px] my-6"
    variant="ghost"
    :ui="{
      leadingIcon: 'text-primary',
    }"
    @click="goBack"
  >
    <p>Back</p>
  </UButton>
</template>
