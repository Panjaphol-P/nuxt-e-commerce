<script setup>
const signupData1 = useState("signupData1");
const signupData2 = useState("signupData2");

const date = new Date();
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
const registeredDate = `${day} / ${month} / ${year}`;

const isEdit = ref(false);
</script>

<template>
  <UContainer class="!px-0 flex flex-col gap-8">
    <h1 class="italic">Profile</h1>
    <div class="w-full grid grid-cols-12 gap-8">
      <AccountTab />

      <div
        v-if="!isEdit"
        class="col-start-4 col-span-full flex flex-col ring ring-primary/25 shadow-primary/25 rounded-[24px] p-6 gap-6"
      >
        <div class="flex gap-6 items-center">
          <div class="rounded-full bg-primary-50 size-32"></div>
          <div class="flex flex-col gap-2">
            <div class="font-light px-4 py-2 text-[32px] text-primary">
              {{ signupData1.username }}
            </div>
            <div class="font-light">{{ signupData2.email }}</div>
          </div>
        </div>
        <USeparator orientation="horizontal" />

        <div class="flex flex-col gap-6">
          <p class="!font-bold text-primary">Personal Information</p>
          <div class="flex gap-8">
            <div class="flex flex-col gap-6 px-4">
              <div>
                <p class="text-primary">Name</p>
                <span class="text-[16px]">{{ signupData2.name }}</span>
              </div>
              <div>
                <p class="text-primary">Phone</p>
                <span class="text-[16px]">{{ signupData2.phone }}</span>
              </div>
            </div>
            <div class="w-full flex flex-col gap-6 px-4">
              <div>
                <p class="text-primary">Street Address</p>
                <span class="text-[16px]">{{ signupData2.streetAddress }}</span>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">Subdistrict</p>
                  <span class="text-[16px]">{{ signupData2.subdistrict }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">District</p>
                  <span class="text-[16px]">{{ signupData2.district }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">City</p>
                  <span class="text-[16px]">{{ signupData2.city }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">Province</p>
                  <span class="text-[16px]">{{ signupData2.province }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">ZIP / Postal Code</p>
                  <span class="text-[16px]">{{ signupData2.zipCode }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">Country</p>
                  <span class="text-[16px]">{{ signupData2.country }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6 px-4">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Password</p>
                <UButton
                  variant="ghost"
                  color="primary"
                  icon="i-lucide-pencil-line"
                  label="Change Password"
                  class="text-[16px] font-light !px-0 !py-0"
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Date of Birth</p>
                <span class="text-[16px]">{{ signupData2.dateOfBirth }}</span>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Registered Date</p>
                <span class="text-[16px]">{{ registeredDate }}</span>
              </div>
            </div>
          </div>
        </div>
        <UButton
          variant="outline"
          color="primary"
          icon="i-lucide-pencil-line"
          label="Edit Profile"
          class="font-light px-4 py-2 w-fit rounded-full"
          @click="isEdit = true"
        />
      </div>

      <div
        v-else
        class="col-start-4 col-span-full flex flex-col ring ring-primary/25 shadow-primary/25 rounded-[24px] p-6 gap-6"
      >
        <div class="flex gap-6 items-center">
          <div class="rounded-full bg-primary-50 size-32"></div>
          <div class="flex flex-col gap-2">
            <UInput
              v-model="signupData1.username"
              variant="outline"
              color="primary"
              highlight
              class="min-w-[340px] px-4 py-2"
              :placeholder="signupData1.username"
            />
            <div class="font-light">{{ signupData2.email }}</div>
          </div>
        </div>
        <USeparator orientation="horizontal" />

        <div class="flex flex-col gap-6">
          <p class="!font-bold text-primary">Personal Information</p>
          <div class="flex gap-8">
            <div class="flex flex-col gap-6 px-4">
              <div>
                <p class="text-primary">Name</p>
                <span class="text-[16px]">{{ signupData2.name }}</span>
              </div>
              <div>
                <p class="text-primary">Phone</p>
                <span class="text-[16px]">{{ signupData2.phone }}</span>
              </div>
            </div>
            <div class="w-full flex flex-col gap-6 px-4">
              <div>
                <p class="text-primary">Street Address</p>
                <span class="text-[16px]">{{ signupData2.streetAddress }}</span>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">Subdistrict</p>
                  <span class="text-[16px]">{{ signupData2.subdistrict }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">District</p>
                  <span class="text-[16px]">{{ signupData2.district }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">City</p>
                  <span class="text-[16px]">{{ signupData2.city }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">Province</p>
                  <span class="text-[16px]">{{ signupData2.province }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full">
                  <p class="text-primary">ZIP / Postal Code</p>
                  <span class="text-[16px]">{{ signupData2.zipCode }}</span>
                </div>
                <div class="w-full">
                  <p class="text-primary">Country</p>
                  <span class="text-[16px]">{{ signupData2.country }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6 px-4">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Password</p>
                <UButton
                  variant="ghost"
                  color="primary"
                  icon="i-lucide-pencil-line"
                  label="Change Password"
                  class="text-[16px] font-light !px-0 !py-0"
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Date of Birth</p>
                <span class="text-[16px]">{{ signupData2.dateOfBirth }}</span>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Registered Date</p>
                <span class="text-[16px]">{{ registeredDate }}</span>
              </div>
            </div>
          </div>
        </div>
        <UButton
          variant="outline"
          color="primary"
          icon="i-lucide-pencil-line"
          label="Save Changes"
          class="font-light px-4 py-2 w-fit rounded-full"
          @click="isEdit = false"
        />
      </div>
    </div>
  </UContainer>
</template>
