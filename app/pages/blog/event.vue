<script></script>

<template>
  <BackButton />

  <UContainer class="grid grid-cols-3 gap-8 !px-0 my-6">
    <div class="col-span-2 flex flex-col gap-6">
      <div
        class="relative w-full min-h-[321px] rounded-2xl grid place-items-center overflow-hidden"
      >
        <!-- Background image -->
        <NuxtImg
          src="/frames/blog-thumbnail-bg.svg"
          alt="Blog thumbnail background"
          class="absolute inset-0 w-full h-full object-cover"
          format="webp"
        />

        <div class="flex w-32 h-16 absolute top-0 right-0 items-center justify-evenly">
            <UButton variant="ghost" class="rounded-full" color="neutral" icon="i-lucide-share-2" :ui="{ leadingIcon: 'size-10' }" />
            <Favourite size="lg" />
        </div>

        <!-- Overlay content -->
        <UIcon name="i-lucide-image" class="size-16 text-black/50 relative" />
      </div>
      <div class="grid grid-cols-8 justify-between gap-8">
        <div class="col-span-6">
          <h3 class="!text-black font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptate dolorem voluptatem ex.
          </h3>
        </div>
        <div
          class="col-span-2 h-full flex flex-col justify-start items-end gap-2"
        >
          <span>Name Surname</span>
          <span>August 09, 2025</span>
        </div>
      </div>

      <div>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia natus
          corrupti vero, porro voluptatibus repudiandae nesciunt facere eligendi
          nihil voluptatem rerum recusandae voluptates voluptatum sapiente,
          magni architecto soluta unde reprehenderit.
        </span>
      </div>

      <UContainer class="min-h-[321px] grid grid-cols-8 gap-x-8 gap-y-6 !px-0">
        <div
          class="col-span-3 bg-primary/10 grid place-items-center rounded-[8px]"
        >
          <UIcon name="i-lucide-image" class="size-16 text-black/50 relative" />
        </div>
        <div class="col-span-5 h-full grid items-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            soluta blanditiis adipisci fugiat architecto recusandae, nulla,
            itaque explicabo ea ratione obcaecati harum voluptates veniam
            assumenda. Cum quis aliquid dolorum mollitia. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aut velit rerum unde adipisci
            corrupti quos, accusantium similique laboriosam vel dolor repellat
            assumenda ipsa ut
          </span>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dolores quisquam necessitatibus ullam beatae odit at assumenda
            molestias laborum magni, unde expedita architecto, minima dolorum
            veritatis numquam doloribus quaerat libero. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo dicta eos natus. Totam
            corrupti labore soluta, consequatur quia obcaecati doloribus? Odio
            aliquam quis, dicta tempore aut totam voluptate placeat cumque?
          </span>
        </div>
      </UContainer>

      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quibusdam quos labore aspernatur! Officiis laboriosam voluptates
          dolore perferendis. Molestias eius cum incidunt corrupti est soluta
          unde provident explicabo. Quisquam, blanditiis? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magnam, corporis hic. Rerum aut
          animi quidem beatae maiores sunt cumque cupiditate pariatur, illo
          deserunt soluta harum vel saepe! Laborum, omnis quam?
        </span>
      </div>

      <div class="flex space-x-2 items-center">
        <div class="w-[8px] h-[64px] bg-primary"></div>
        <h3 class="italic !text-black">
          "Lorem ipsum dolor sit amet consectetur. Cursus id at fames turpis
          quam."
        </h3>
      </div>

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim debitis
        iure, officiis quo natus accusantium recusandae animi. Qui quod
        voluptate impedit laudantium dignissimos, tenetur molestiae dicta animi
        pariatur, nisi sit.
      </div>

      <UContainer class="text-center flex justify-center items-center gap-2">
        <p>This is helpful? Give author an applause!</p>
        <UButton
          icon="i-lucide-thumbs-up"
          variant="ghost"
          color="neutral"
          class="rounded-full"
        />
      </UContainer>
    </div>

    <UContainer class="flex flex-col gap-6 !px-0">
      <BlogCard tag="skincare101" />
      <BlogCard tag="announcements" />
      <BlogCard tag="review" />
    </UContainer>
  </UContainer>
</template>
