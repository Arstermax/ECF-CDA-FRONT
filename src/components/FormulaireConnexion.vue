<script setup>
import { ref, defineModel, onMounted } from 'vue'

const [data, setData] = defineModel({
    email : "",
    password : ""
})

const handleSubmit = (e) => {
    console.log(e);
}

</script>

<template>
    <form method="post" @submit.prevent="handleSubmit">
        <fieldset>
            <legend>
                <label for="email">Email</label>
            </legend>
            <input type="email" name="email" id="email" required placeholder="JohnDoe@gmail.com" >
        </fieldset>
        <fieldset>
            <legend>
                <label for="password">Mot de passe</label>
            </legend>
            <input type="password" name="password" id="password" required placeholder="Password1!">
        </fieldset>
        <fieldset class="submit">
            <p>Mot de passe oublier ?</p>
            <input type="submit" value="Connexion">
        </fieldset>
    </form>
</template>

<style scoped>
form {
    margin: 1rem;
    padding: 0rem 3rem;
    border-radius: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & fieldset {
        margin: 0.8rem 0;
        padding: 0.5rem 0.3rem;
        width: 40vw;
        border-radius: 0.3rem;
        border: 0.1rem solid var(--Border-Subtil);

        & input {
            width: 100%;
            background-color: var(--Arriere-Plan-Subtile);
            border: none;
            padding: 0.1rem 0.5rem;
        }

        & input:focus {
            outline: none;
            border-bottom: 0.13rem solid var(--Border-Strong);
        }

        & label {
            text-align: center;
            padding: 0 0.5rem;
        }

        input[type="submit"] {
            width: 15vw;
            padding: 0.3rem;
            border-radius: 0.3rem;
            background-color: var(--Arriere-Plan-Block);
            margin: 0 1rem;

        }

        input[type="submit"]:hover {
            cursor: pointer;
            color: var(--Text-color-subtil);
            border: 0rem solid var(----Border);
            background-color: var(--Arriere-Plan-Block-hover);
        }
    }

    & fieldset:last-child {
        display: flex;
        border: none;
        justify-content: center;
        align-items: center;
    }

    & .submit {
        width: 40vw;
        margin: 0rem;
        display: flex;
        border: none;
        justify-content: space-around;
        align-items: center;

        & p {
            font-size: 0.8rem;
        }

        & p:hover {
            color: var(--Text-color-subtil);
            cursor: pointer;
        }
    }
}
</style>