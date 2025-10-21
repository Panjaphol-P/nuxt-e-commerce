<script setup>
const signupData1 = useState("signupData1");
const signupData2 = useState("signupData2");

import { vMaska } from "maska/vue"

const date = new Date();
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
const registeredDate = `${day} / ${month} / ${year}`;

const isEdit = ref(false);
</script>

<template>

  <BackButton />

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
            <div class="font-light px-2.5 py-1.5 text-[32px] text-primary">
              {{ signupData1.username }}
            </div>
            <div class="font-light">{{ signupData2.email }}</div>
          </div>
        </div>
        <USeparator orientation="horizontal" />

        <div class="flex flex-col gap-6">
          <p class="!font-bold text-primary">Personal Information</p>
          <div class="flex justify-between">
            <div class="flex flex-col gap-6 px-4 min-w-[226px]">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Name</p>
                <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.name }}</span>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Phone</p>
                <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.phone }}</span>
              </div>
            </div>
            <div class="w-full max-w-[400px] flex flex-col gap-6 px-4">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Street Address</p>
                <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.streetAddress }}</span>
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Subdistrict</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.subdistrict }}</span>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">District</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.district }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">City</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.city }}</span>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Province</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.province }}</span>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">ZIP / Postal Code</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.zipCode }}</span>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Country</p>
                  <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.country }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6 px-4 min-w-[200px]">
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
                <span class="px-2.5 py-1.5 min-h-9">{{ signupData2.dateOfBirth }}</span>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Registered Date</p>
                <span class="px-2.5 py-1.5 min-h-9">{{ registeredDate }}</span>
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
              variant="ghost"
              color="primary"
              highlight
              class="w-full h-[60px] [&_input]:text-[32px] [&_input]:font-light [&_input]:placeholder:text-[32px]"
              :placeholder="signupData1.username"
            />
            <div class="font-light">{{ signupData2.email }}</div>
          </div>
        </div>
        <USeparator orientation="horizontal" />

        <div class="flex flex-col gap-6">
          <p class="!font-bold text-primary">Personal Information</p>
          <div class="flex justify-between">
            <div class="flex flex-col gap-6 px-4">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Name</p>
                <UInput
                  v-model="signupData2.name"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData1.name"
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Phone</p>
                <UInput
                  v-model="signupData2.phone"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.phone"
                />
              </div>
            </div>
            <div class="w-[400px] max-w[400px] flex flex-col gap-6 px-4">
              <div class="flex flex-col gap-2">
                <p class="text-primary">Street Address</p>
                <UInput
                  v-model="signupData2.streetAddress"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.streetAddress"
                />
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Subdistrict</p>
                <UInput
                  v-model="signupData2.subdistrict"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.subdistrict"
                />
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">District</p>
                <UInput
                  v-model="signupData2.district"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.district"
                />
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">City</p>
                <UInput
                  v-model="signupData2.city"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.city"
                />
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Province</p>
                <UInput
                  v-model="signupData2.province"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.province"
                />
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">ZIP / Postal Code</p>
                <UInput
                  v-model="signupData2.zipCode"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.zipCode"
                />
                </div>
                <div class="w-full flex flex-col gap-2">
                  <p class="text-primary">Country</p>
                <UInput
                  v-model="signupData2.country"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  :placeholder="signupData2.country"
                />
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6 px-4 max-w-[200px]">
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
                <UInput
                  v-model="signupData2.dateOfBirth"
                  variant="ghost"
                  color="primary"
                  highlight
                  class="w-full min-h-9 [&_input]:text-[16px] [&_input]:font-light [&_input]:placeholder:text-[16px]"
                  v-maska="'## / ## / ####'"
                  :placeholder="signupData2.dateOfBirth"
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-primary">Registered Date</p>
                <span class="px-2.5 py-1.5 min-h-9">{{ registeredDate }}</span>
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

<style scoped></style>