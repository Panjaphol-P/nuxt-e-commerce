<script setup lang="ts">

    export interface HelpCardProps {
        help?: 'updateAndcancel' | "contact"
        title?: string
    }

    const clickState = ref(false)
    let autoSlideInterval: ReturnType<typeof setInterval> | null = null

    const props = withDefaults(defineProps<HelpCardProps>(), {
        help: 'updateAndcancel',
    })

    const helpConfig = computed(() => {
        const configs = {
            updateAndcancel: {
                title: 'Update or Cancel Order'
            },
            contact: {
                title: 'Need Help?'
            }
        }
        return configs[props.help] || configs.updateAndcancel
    })

    // Computed classes for dynamic transition direction
    const transitionClasses = computed(() => {
        if (clickState.value) {
            // Going to "Need Help" - slide from left
            return {
                enterFrom: '-translate-x-full',
                leaveTo: 'translate-x-full'
            }
        } else {
            // Going back to "Update or Cancel Order" - slide from right
            return {
                enterFrom: 'translate-x-full',
                leaveTo: '-translate-x-full'
            }
        }
    })

    // Auto-slide function
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            clickState.value = !clickState.value
        }, 5000)
    }

    // Stop auto-slide
    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval)
            autoSlideInterval = null
        }
    }

    // Manual navigation with auto-slide restart
    const handleNavigation = (newState: boolean) => {
        stopAutoSlide()
        clickState.value = newState
        startAutoSlide()
    }

    // Start auto-slide on mount
    onMounted(() => {
        startAutoSlide()
    })

    // Clean up on unmount
    onBeforeUnmount(() => {
        stopAutoSlide()
    })

</script>

<template>
    <div class="relative overflow-hidden min-h-[124px]">
        <TransitionGroup
            enter-active-class="transition-transform duration-500 ease-out absolute inset-0"
            leave-active-class="transition-transform duration-500 ease-out absolute inset-0"
            :enter-from-class="transitionClasses.enterFrom"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
            :leave-to-class="transitionClasses.leaveTo"
        >
            <div v-if="!clickState && help === 'updateAndcancel'" key="update" class="grid grid-cols-6 gap-8 min-h-[124px]">
                <div class="col-span-1">

                </div>

                <div class="col-span-4 flex flex-col gap-2 justify-center items-center text-center">
                    <h3 class="italic">Update or Cancel Order</h3>
                    <span class="opacity-50">Need to update or cancel your order? No worries.</span>
                    <div class="flex gap-2">    
                        <span class="opacity-50">simply review</span>
                        <UPopover mode="hover" :arrow="true">
                            <div class="flex gap-2">
                                <UIcon name="i-lucide-info" class="w-6 h-6 !text-primary" />
                                <span class="text-primary">our policy</span>
                            </div>

                            <template #content>
                                <div class="flex flex-col text-center px-4 py-2">
                                    <span>
                                        Updates allowed in 12hrs, cancellations within 24hrs of placing your order, 
                                    </span>

                                    <span>
                                        return & exchange within 7 days after delivery.
                                    </span>
                                </div>
                            </template>
                        </UPopover>
                        <div class="flex gap-2">
                            <span class="opacity-50">and follow</span>
                            <NuxtLink to="/help" class="text-primary underline !opacity-100">the quicksteps</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 grid place-items-center">
                    <UButton variant="ghost" icon="i-lucide-chevron-right" color="primary" :ui="{ leadingIcon: 'w-8 h-8' }" class="rounded-full" @click="handleNavigation(true)" />
                </div>
            </div>

            <div v-if="clickState" key="help" class="grid grid-cols-6 gap-8 min-h-[124px]">
                <div class="col-span-1 grid place-items-center">
                    <UButton variant="ghost" icon="i-lucide-chevron-left" color="primary" :ui="{ leadingIcon: 'w-8 h-8' }" class="rounded-full" @click="handleNavigation(false)" />
                </div>

                <div class="col-span-4 flex flex-col gap-2 justify-center items-center text-center">
                    <h3 class="italic">Need Help?</h3>
                    <div class="flex gap-2">
                        <span class="opacity-50">Email us at</span>
                        <span class="text-primary underline">support@purea.com</span>
                        <span class="opacity-50">or go to</span>
                        <NuxtLink to="/help" class="text-primary underline">Help Center</NuxtLink>
                    </div>
                    <div class="flex gap-2">
                        <span class="opacity-50">Our staff is ready to assist you with any concerns about your order, refund, or product care.</span>
                    </div>
                </div>

                <div class="col-span-1">

                </div>
            </div>
        </TransitionGroup>
    </div>
</template>