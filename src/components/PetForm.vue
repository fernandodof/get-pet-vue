<template>
    <b-form @submit.prevent="onSubmit">
        <b-form-group label="Pet's name:" label-for="pet-name">
            <b-form-input
                id="pet-name"
                v-model="formData.name"
                placeholder="Enter the pet's name"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Species:" label-for="species">
            <b-form-select
                id="species"
                v-model="formData.species"
                :options="['cats', 'dogs']"
                required
            ></b-form-select>
        </b-form-group>

        <b-form-group label="Pet's age:" label-for="pet-age">
            <b-form-input
                id="pet-age"
                type="number"
                v-model="formData.age"
                placeholder="Enter age here"
                required
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "PetForm",
    data() {
        return {
            formData: {
                name: "",
                age: 0,
                species: null,
            },
        };
    },
    methods: {
        ...mapActions(["addPet"]),
        onSubmit() {
            const { name, species, age } = this.formData;
            const payload = {
                species,
                pet: {
                    name,
                    age,
                },
            };
            this.addPet(payload);

            this.formData = {
                name: "",
                age: 0,
                species: null,
            };
        },
    },
};
</script>