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
        },
        accordion: {
            slots: {
                root: 'w-full',
                item: 'ring ring-2 ring-primary rounded-[32px] p-4',
                header: 'flex',
                trigger: 'group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0',
                content: 'data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none',
                body: 'text-[16px]',
                leadingIcon: 'shrink-0 size-6',
                trailingIcon: 'shrink-0 size-6 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200',
                label: 'text-start break-words'
            },
            variants: {
                disabled: {
                true: {
                    trigger: 'cursor-not-allowed opacity-75'
                }
                }
            }
        },
        slideover: {
            variants: {
                side: {
                    right: {
                        content: 'right-0 inset-y-0 w-full min-w-[700px]'
                    }
                }
            }
        },
        modal: {
            variants: {
                fullscreen: {
                    true: {
                        content: 'w-9/10 h-9/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px]'
                    }
                }
            }
        }
    }
})