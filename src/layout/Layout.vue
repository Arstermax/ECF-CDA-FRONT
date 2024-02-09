<script setup>

</script>

<template>
    <div id="layout">
        <header>
            <hgroup>
                <RouterLink :to="'/'">
                    Home
                </RouterLink>
                <hr>
            </hgroup>
            <nav>
                <ul>
                    <li>
                        <RouterLink :to="'/log'">
                            <div class="profils">
                                <img src="../assets/svg/icon-inscription.svg" alt="">
                            </div>
                        </RouterLink>
                        <RouterLink :to="'/profils'">
                            <div class="tache parametre">
                                <img src="../assets/svg/icon-parametre.svg" alt="">
                                <p>Paramètre </p>
                            </div>
                        </RouterLink>
                        <hr>
                    </li>
                    <li>
                        <RouterLink :to="'/'">
                            <div class="tache element">
                                <img src="../assets/svg/icon-projet.svg" alt="">
                                <p>Projet</p>
                            </div>
                        </RouterLink>
                    </li>
                    <hr>
                    <li>
                        <RouterLink :to="'/'">
                            <div class="tache ">
                                <img src="../assets/svg/icon-deconnecter.svg" alt="">
                                <p>Se déconnecter</p>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<style scoped>
hr {
    margin: 0.3rem 0.5rem;
}

#layout {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    max-width: 100vw;

    & header {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        width: 15vw;
        height: 100vh;
        background-color: var(--Arriere-Plan-Block);

        & hgroup {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 13vw;
            padding: 0.2rem 0;
            & hr{
                width: 50%;
            }
        }

        & nav {
            & ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }

    }

    & section {
        width: 90vw;
    }

    .profils {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;

        & img {
            border: 0.15rem solid;
            padding: 0.8rem;
            border-radius: 50%;
        }
    }

    .tache {

        display: flex;
        justify-content: start;
        align-items: center;
        width: 15vw;
        padding: 0.1rem 0.2rem;

        & img {
            width: 1rem;
            margin: 0 0.3rem;
        }
    }

    .element {
        align-items: start;
        height: 56vh;
        margin: 1rem 0;
    }
    .parametre{
        justify-content: center;
    }
}
</style>
