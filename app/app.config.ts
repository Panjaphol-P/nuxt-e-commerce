export default defineAppConfig({
    ui: {
        card: {
            slots: {
                root: 'rounded-[16px] overflow-hidden bg-white',
                header: 'p-0 sm:p-0',
                body: 'p-0 sm:p-0',
                footer: 'p-0 sm:p-0'
            },
            variants: {
                variant: {
                    solid: {
                        root: 'bg-primary text-white'
                    },
                    outline: {
                        root: 'bg-white ring ring-primary-400 divide-y divide-primary-400'
                    },
                    soft: {
                        root: 'bg-elevated/50 divide-y divide-primary-400'
                    },
                    subtle: {
                        root: 'bg-elevated/50 ring ring-primary-400 divide-y divide-primary-400'
                    }
                }
            },
            defaultVariants: {
                variant: 'outline'
            }
        },
        container: {
            base: 'w-full max-w-(--ui-container)'
        },
        formField: {
            slots: {
                root:'',
                wrapper:'',
                label: 'block text-[16px] text-primary'
            }
        }
    }
})