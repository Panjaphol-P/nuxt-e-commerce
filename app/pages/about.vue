<script setup>
    definePageMeta({
        layout: 'custom',
    })
</script>

<template>

    <LineSight1 />
    
    <UContainer class="!px-32 min-h-[318px] grid grid-cols-12 grid-rows-4 gap-x-8 gap-y-6 my-6">
        <div class="col-span-5 row-span-4 bg-gray-400 grid place-items-center">
            *Img*
        </div>
        <div class="row-start-2 col-start-8 col-span-4 flex items-center justify-end">
            <h3 class="text-end">" DRAWN FROM NATURE</h3>
        </div>
        <div class="row-start-3 col-start-7 col-span-4 flex items-center justify-start">
            <h3 class="text-start">DESIGN FOR YOUR SKIN "</h3>
        </div>
    </UContainer>

    <UContainer class="!px-0 grid grid-cols-12 grid-rows-8 gap-x-8 gap-y-6 mt-6 max-h-[936px]">
        <div class="row-start-2 col-start-3 col-span-9 flex flex-col gap-6 max-h-[96px]">
            <h1 class="!text-[64px] italic">Our Stories</h1>
        </div>
        <div class="row-start-3 col-start-3 row-span-2 col-span-9 flex flex-col gap-6">

            <span>
                Lorem ipsum dolor sit amet consectetur. Ut pharetra eu duis risus imperdiet cras nunc condimentum eget.
                Eget aliquet nunc netus semper suspendisse. Aliquam aliquam sit at tincidunt in. Nec eget in dui leo
                feugiat. Dui fames auctor proin vitae. In amet diam rhoncus imperdiet proin tellus arcu nibh. Dui
                imperdiet ac nibh tristique. Dictumst habitant in montes duis vestibulum scelerisque tellus diam
                aliquet. Pretium dictumst laoreet cras tincidunt. Nulla erat praesent ut et mi pellentesque ac id.
                Platea quis sed duis ornare enim in diam. Eu rhoncus gravida vestibulum accumsan dui. Ultricies lectus
                orci purus ut pretium tempor lacinia nullam sit.
            </span>
            <span>
                Aenean at aliquet cursus aliquet. Dolor porttitor vestibulum lorem id sed urna sed. Faucibus dolor eget
                ullamcorper ultricies tellus. At risus non purus venenatis nunc risus a. In elit sit vitae viverra
                gravida commodo eu vel aenean. Tincidunt quis maecenas amet lectus.
                Sit nunc arcu vitae sed neque. Adipiscing urna mi augue mollis mollis quam tincidunt. Sit et turpis
                turpis sem. Id proin nunc mollis lacus vitae in magna pellentesque pulvinar. Mi nunc amet mattis turpis
                tortor ac massa diam.
            </span>
        </div>
        <div class="row-start-5 col-start-3 row-span-3 col-span-9 flex justify-between items-center">
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 grid place-items-center rounded-[8px]">*Img*
            </div>
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 grid place-items-center rounded-[8px]">*Img*
            </div>
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 grid place-items-center rounded-[8px]">*Img*
            </div>
        </div>
        <div class="row-start-8 col-span-full">
            <h1 class="!text-[128px] italic text-center">
                Our Goal
            </h1>
        </div>
    </UContainer>
    
    <div class="!w-full grid grid-cols-12 grid-rows-6 gap-y-6 gap-x-8 bg-primary !px-0 overflow-hidden relative z-10">
        
        <LineSight2 />

        <div class="h-[96px] col-span-full">
            <h1 class="!text-[128px] italic !text-white text-center translate-y-[-50%]">
                Our Goal
            </h1>
        </div>

        <div class="row-start-2 row-span-4 col-start-5 col-span-4 w-full flex text-center items-center">
            <span class="font-bold text-[32px] text-white">
                Lorem ipsum dolor sit amet consectetur. Ultrices at
                vestibulum rhoncus egestas eleifend quis. Elit varius mi eget sodales eu nisl proin elementum.
            </span>
        </div>

        <div class="h-[96px] row-start-6 col-span-full">
            <h1 class="!text-[128px] italic !text-white text-center">
                Seal of Trust
            </h1>
        </div>
    </div>

    <UContainer class="grid grid-cols-12 grid-rows-4 gap-x-8 gap-y-6 !px-0 mb-6 relative">
        
        <LineSight3 />

        <div class="h-[96px] col-span-full row-start-1">
            <h1 class="!text-[128px] italic text-center translate-y-[-50%]">
                Seal of Trust
            </h1>
        </div>

        <div class="col-span-8 row-start-2 col-start-3 row-span-3 flex justify-between items-center">
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 rounded-[8px]"></div>
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 rounded-[8px]"></div>
            <div class="min-w-[272px] max-h-[272px] h-full bg-gray-400 rounded-[8px]"></div>
        </div>
    </UContainer>

    <UContainer class="grid grid-cols-12 grid-rows-9 gap-x-8 gap-y-6 !px-0 min-h-[800px]">
        <div
            class="row-start-2 row-span-7 col-start-3 col-span-3 flex flex-col h-full w-full justify-center text-center">
            <h1 class="text-[128px] italic">Reviews</h1>
            <h2 class="!text-black">The medal of trustworthy.</h2>
        </div>
        <div class="row-start-2 row-span-7 col-start-6 col-end-12 ring ring-primary">
        </div>
    </UContainer>

    <UContainer class="grid grid-cols-12 grid-row-6 gap-x-8 gap-y-6 !px-0">
        <div class="col-span-full h-[56px]"></div>

        <div class="row-start-2 row-span-4 col-start-3 col-span-4 flex flex-col gap-6">
            <FAQs />
            <FAQs />
            <FAQs />
            <FAQs />
        </div>

        <div class="row-start-2 row-span-4 col-start-8 col-span-4 flex items-center text-center">
            <div class="w-full flex flex-col gap-2">
                <div>
                    <h1 class="text-[64px] italic">Frequently</h1>
                    <h1 class="text-[64px] italic">Asked</h1>
                    <h1 class="text-[64px] italic">Questions</h1>
                </div>
                <h2 class="!text-black">All basics you need to know.</h2>
            </div>
        </div>

        <div class="row-start-6 col-span-full h-[56px]"></div>
    </UContainer>

    <UContainer class="!px-32 grid grid-cols-12 grid-rows-5 gap-x-8 gap-y-6">
        <div class="w-full col-start-2 col-span-5 row-start-2 flex items-center">
            <h1 class="!text-[64px] italic">Let Us Assist</h1>
        </div>

        <div class="w-full h-full col-start-2 col-end-5 row-start-3 flex flex-col gap-2">
            <div class="flex gap-1 text-primary items-center">
                <LMail class="size-5 text-primary" />Email
            </div>
            <h3 class="!text-black underline">contact@purea.com</h3>
        </div>

        <div class="w-full h-full col-start-2 col-end-5 row-start-4 row-span-2 flex flex-col gap-2">
            <div class="flex gap-1 text-primary items-center">
                <LPhone class="size-5 text-primary" />Phone
            </div>
            <div class="flex flex-col gap-1">
                <h3 class="!text-black">+00 12 345 6789</h3>
                <p class="!text-[14px] italic">Monday - Friday, 09:00 - 18:00 (GMT +7)</p>
            </div>
        </div>

        <div class="w-full h-full col-start-5 col-span-4 row-start-3 row-span-2 flex flex-col gap-2">
            <div class="flex gap-1 text-primary items-center">
                <LMapPin class="size-5 text-primary" />Visit Us
            </div>
            <pre class="!text-black whitespace-pre-wrap text-[24px]">
Puréa Company Limited.
123/456 Example Building (99fl.)
Something Road,
Somewhere Subdistrict,
Somehow District
Province 0000, Country
            </pre>
        </div>

        <div class="col-start-10 col-span-2 row-start-3 row-span-2 flex flex-col gap-2 justify-center items-center">
            <div>
                <p class="text-primary">Social Media</p>
                <div class="grid grid-cols-2 grid-rows-2 w-[144px] h-[144px] gap-4">
                    <UIcon name="i-custom-facebook-inv" size="64px" />
                    <UIcon name="i-custom-instagram-inv" size="64px" />
                    <UIcon name="i-custom-tiktok-inv" size="64px" />
                    <UIcon name="i-custom-x-inv" size="64px" />
                </div>
            </div>
        </div>

        <div class="col-start-9 col-span-4 row-start-2 row-span-4 flex justify-center items-center">
            <NuxtImg 
            src="/TextSpinner.svg"
            class="animate-[spin_20s_linear_infinite] rounded-full h-[520px] w-[520px]" />
        </div>
    </UContainer>
</template>

<style>
pre {
    font-family: 'Times New Roman', Times, serif;
}
</style>