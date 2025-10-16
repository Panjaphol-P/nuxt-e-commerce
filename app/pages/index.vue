<script>
</script>

<template>

        <div class="h-full">
            <p>Press the button to continue...</p>
            <NuxtLink class="Continue" to="/home">Go to Home</NuxtLink>
        </div>

</template>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.Continue {
    color: #2E7D32;
    font-family: 'Times New Roman', Times, serif;
    font-size: 24px;
    padding: 8px 16px;
    margin: 0 8px;
    border: 1px #2E7D32 solid;
    border-radius: 999px;
}

.Continue:link {
    text-decoration: none;
}

.Continue:hover {
    opacity: 0.5;
}

</style>