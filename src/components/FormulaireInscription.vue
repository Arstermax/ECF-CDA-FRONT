<script setup>
</script>

<template>
    <form action="" method="post">
        <div class="part">
            <fieldset>
                <legend>
                    <label for="lastname">Nom</label>
                </legend>
                <input type="text" name="lastname" id="lastname" required placeholder="John">
            </fieldset>
            <fieldset>
                <legend>
                    <label for="firstname">Prénom</label>
                </legend>
                <input type="text" name="firstname" id="firstname" required placeholder="Doe">
            </fieldset>
        </div>
        <div class="part">
            <fieldset>
                <legend>
                    <label for="email">Email</label>
                </legend>
                <input type="email" name="email" id="email" required placeholder="Password1!">
            </fieldset>
            <fieldset>
                <legend>
                    <label for="password">Mot de passe</label>
                </legend>
                <input type="password" name="password" id="password" required placeholder="Password1!">
            </fieldset>
        </div>

        <fieldset class="submit">
            <p>Les champs (*) sont obligatoires</p>
            <input type="submit" value="Inscription">
        </fieldset>
    </form>
</template>

<style scoped>
.part {
    display: flex;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    border-radius: 1.6rem;

    & fieldset {
        margin: 0.5rem 1rem;
        padding: 0.5rem 0.3rem;
        min-width: 30vw;
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
            border: 0.1rem solid var(--Border-Subtil);

        }

        input[type="submit"]:hover {
            cursor: pointer;
            color: var(--Text-color-subtil);

            background-color: var(--Arriere-Plan-Block-hover);
        }
    }

    & .submit {
        padding: 0 5rem;
        width: 100%;
        display: flex;
        border: none;
        justify-content: space-between;
        align-items: center;

        & p{
            font-size: 1rem;
        }
    }

}
</style>