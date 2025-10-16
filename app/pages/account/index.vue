<script>
    const signupData1 = useState('signupData1')
    const signupData2 = useState('signupData2')
</script>

<template>
    <UContainer class="!px-0 flex flex-col gap-8">
        <h1 class="italic">Profile</h1>
        <div class="w-full grid grid-cols-12 gap-8">
            <div class="col-span-3 flex flex-col gap-6">
                <UButton to="/account" variant="outline" color="primary"
                    class="px-4 py-2 gap-2 text-2xl font-light rounded-full" icon="i-lucide-user-round"
                    :ui="{ leadingIcon: 'size-[35px] stroke-0.5' }" label="Profile" />
                <UButton to="/account" variant="outline" color="neutral"
                    class="px-4 py-2 gap-2 text-2xl font-light rounded-full" icon="i-lucide-wallet"
                    :ui="{ leadingIcon: 'size-[35px]' }" label="Transactions" />
                <UButton to="/account" variant="outline" color="neutral"
                    class="px-4 py-2 gap-2 text-2xl font-light rounded-full" icon="i-lucide-history"
                    :ui="{ leadingIcon: 'size-[35px]' }" label="Transactions" />
                <UButton to="/account" variant="outline" color="neutral"
                    class="px-4 py-2 gap-2 text-2xl font-light rounded-full" icon="i-lucide-star"
                    :ui="{ leadingIcon: 'size-[35px]' }" label="Rate & Reviews" />
                <UButton to="/account" variant="outline" color="neutral"
                    class="px-4 py-2 gap-2 text-2xl font-light rounded-full" icon="i-lucide-rotate-ccw"
                    :ui="{ leadingIcon: 'size-[35px]' }" label="Refunds & Returns" />
            </div>

            <div
                class="col-start-4 col-span-full flex flex-col ring ring-primary/25 shadow-primary/25 rounded-[24px] p-6 gap-6">
                <div class="flex gap-6 items-center">
                    <div class="rounded-full bg-primary-50 size-32"></div>
                    <div class="flex flex-col gap-2">
                        <div class="font-light px-4 py-2 text-[32px] text-primary">{{ signupData1.username }}</div>
                        <div class="font-light">{{ signupData2.email }}</div>
                    </div>

                </div>
                <USeparator orientation="horizontal" />

                <div class="flex flex-col gap-6">
                    <p class="!font-bold text-primary">Personal Information</p>
                    <div class="flex gap-8">
                        <div class="flex flex-col gap-6 px-4">
                            <p class="text-primary">Name</p>
                            <span class="text-[16px]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>