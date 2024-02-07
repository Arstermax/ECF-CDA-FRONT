<script setup>
import FormulaireConnexion from '../components/FormulaireConnexion.vue';
import FormulaireInscription from "../components/FormulaireInscription.vue"
import { ref, onMounted } from 'vue'

const choix = ref({
    inscription: false,
    connexion: true
})

</script>

<template>
    <main>
        <section>
            <hgroup>
                <button v-if="choix.inscription" class="buttonSelected">Inscription</button>
                <button v-if="!choix.inscription"
                    v-on:click="choix.connexion = false, choix.inscription = true">Inscription</button>
                <hr>
                <button v-if="choix.connexion" class="buttonSelected">Connexion</button>
                <button v-if="!choix.connexion"
                    v-on:click="choix.connexion = true, choix.inscription = false">Connexion</button>
            </hgroup>
        </section>
        <section class="Formulaire" v-if="choix.inscription">
            <FormulaireInscription />
        </section>
        <section class="Formulaire" v-if="choix.connexion">
            <FormulaireConnexion />
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5rem;

    section {
        width: 40vw;
    }

    & section:first-child {
        display: flex;
        align-items: end;
        height: 10vh;

        & hgroup {
            width: 100%;
            display: flex;
            justify-content: space-evenly;

            & button {
                padding: 0.3rem;
                border-radius: 0.3rem;
                border: none;
                background-color: var(--Arriere-Plan);
            }

            & button:hover {
                cursor: pointer;
                color: var(--Text-color-subtil);

            }

            & .buttonSelected {
                border: 0.1rem solid var(--Border-Subtil);
                background-color: var(--Arriere-Plan-Block);
                color: var(--Text-color-subtil);
            }
        }
    }

    & section:last-child {
        min-height: 50vh;
        display: flex;
        justify-content: center
    }
}
</style>