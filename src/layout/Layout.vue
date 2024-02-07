<script setup>
</script>

<template>
    <header>
        <hgroup>
            <RouterLink :to="'/'">
                <h1>ProjectTools</h1>
            </RouterLink>
        </hgroup>
        <nav>
            <ul>
                <li>
                    <RouterLink :to="'/log'">
                        <img src="../assets/svg/icon-inscription.svg" alt="">
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
    <router-view></router-view>
    <footer>
        <h2>Copyright 2024 ProjectTools</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias id quo atque velit aspernatur reprehenderit quibusdam quisquam! Quis dignissimos dolore hic magni velit cupiditate veritatis.</p>
    </footer>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    height: 8vh;
    background-color: var(--Arriere-Plan-Block);
    border-bottom: 0.2rem solid var(--Border-Strong);
}

footer {
    padding: 0 5rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 25vh;

    background-color: var(--Arriere-Plan-Block);

    & p{
        margin: 1rem;
    }
}
</style>
