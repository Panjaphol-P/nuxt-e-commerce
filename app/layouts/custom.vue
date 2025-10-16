<template>
    <div>
        <header>
            <NavBar />
        </header>

        <main>
           <slot /> 
        </main>

        <footer>
            <AppFooter />
        </footer>
    </div>
</template>