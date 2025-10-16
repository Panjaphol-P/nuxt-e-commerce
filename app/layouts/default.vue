<template>
    <div>
        <header>
            <NavBar />
        </header>
        
        <main class="content">
            <slot />
        </main>
        
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>