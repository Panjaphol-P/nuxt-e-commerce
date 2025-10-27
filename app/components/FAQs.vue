<script setup lang="ts">
    export interface faqProps {
        type?: 'inactive' | 'active'
        question?: string
        answer?: string
    }

    const props = withDefaults(defineProps<faqProps>(), {
        type: 'inactive',
        question: 'Question',
        answer: 'Lorem ipsum'
    })

    const clickState = ref(false)
</script>

<template>
    <div class="w-full rounded-4xl ring-2 ring-primary overflow-hidden transition-all duration-300 ease-in-out">
        <div class="flex justify-between space-x-2 p-4 items-center cursor-pointer" @click="clickState = !clickState">
            <UIcon name="i-lucide-circle-question-mark" class="size-6 flex-shrink-0" />
            <p class="w-full">{{ props.question }}</p>
            <UButton 
                variant="ghost" 
                icon="i-lucide-plus" 
                class="rounded-full flex-shrink-0" 
                color="neutral"
                :ui="{ leadingIcon: `size-6 transition-transform duration-300 ease-in-out ${clickState ? 'rotate-45' : 'rotate-0'}` }" 
            />
        </div>
        
        <div 
            :class="[
                'grid transition-all duration-300 ease-in-out',
                clickState ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            ]"
        >
            <div class="overflow-hidden">
                <div class="px-4 pb-4 pt-0">
                    <slot name="answer">
                        <span>{{ props.answer }}</span>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>