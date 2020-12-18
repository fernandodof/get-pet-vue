<template>
    <div class="home">
        <h1>Get a new furry friend</h1>

        {{ animalsCount }}
        <button class="btn btn-primary" @click="togglePetForm()">
            Add new pet
        </button>

        <PetForm v-if="showPetForm"></PetForm>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PetForm from "./../components/PetForm";

export default {
    name: "Home",
    components: {
        PetForm,
    },
    data() {
        return {
            showPetForm: false,
        };
    },
    computed: {
        ...mapGetters(["animalsCount", "getAllCats"]),
    },
    methods: {
        togglePetForm() {
            this.showPetForm = !this.showPetForm;
        },
    },
};
</script>
