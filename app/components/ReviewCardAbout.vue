<script setup lang="ts">
    export interface CardProps {
        name?: string
        quote?: string
    }

    const props = withDefaults(defineProps<CardProps>(), {
        name: 'Name Surname',
        quote: 'Lorem ipsum dolor sit amet consectetur. Pretium enim fames etiam suspendisse amet. Urna sit odio neque elit quis semper condimentum pharetra. Tincidunt id facilisis at leo risus imperdiet.'
    })
</script>

<template>
    <div class="flex gap-2 w-[475px]">
        <div class="rounded-full size-32 bg-primary/10 shrink-0 grid place-items-center">
            <UIcon name="i-lucide-image" size="64px" color="neutral" />
        </div>

        <div class="flex flex-col justify-between">
            <div>
                <slot name="quote">
                    <p class="italic">" {{ props.quote }} "</p>
                </slot>
            </div>
            <div class="flex justify-end">
                <slot name="name">
                    {{ props.name }}
                </slot>
            </div>
        </div>
    </div>
</template>