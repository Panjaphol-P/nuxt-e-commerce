<script>
</script>

<template>
    <!--
        <UCard class="w-[272px] h-[412px] px-6 py-10">
            <p class="text-center mb-[24px]"> *Stars* </p>
            
            <p class="w-full h-[242px] text-center mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Molestie aliquet pretium viverra suspendisse. Id nullam ac quam 
                viverra tincidunt. Interdum in dolor rhoncus sit. Quis in bibendum consectetur quam enim enim nibh. Congue 
                habitasse ligula sit pulvinar. Cras nunc mauris mi neque parturient pulvinar adipiscing orci eget.
            </p>
            
            <p class="w-full italic text-center h-[18px]">
                Name S.
            </p>
        </UCard>
    -->

    <div class="carousel">
        <div class="group">
            <div class="card">1</div>
            <div class="card">2</div>
            <div class="card">3</div>
            <div class="card">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
        </div>
        <div aria-hidden class="group">
            <div class="card">1</div>
            <div class="card">2</div>
            <div class="card">3</div>
            <div class="card">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
        </div>
    </div>

    <div>
        <ReviewCarousel2 />
    </div>
</template>

<style lang="css">
    .carousel {
        margin: 100px auto;
        width: 90%;
        border: 5px solid red;
        display: flex;
        overflow-x: auto
    }

    .carousel::-webkit-scrollbar {
        display: none;
    }

    .group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        animation: spin 10s infinite linear;
        padding-right: 1em;
    }

    .card {
        flex: 0 0 5em;
        height: 5em;
        padding: 1em;
        background: blanchedalmond;
        font-size: 3rem;
        border-radius: .2em;
        text-align: center;
        align-content: center;
    }

    @keyframes spin {
        from {translate: 0;}
        to {translate: -100%}
    }
</style>