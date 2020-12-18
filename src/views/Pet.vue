<template>
    <div>
        <h1>{{ pet.name }} - ({{ this.$route.params.species }})</h1>
        <p>Age: {{ pet.age }} years old</p>
        <p>Bred: {{ pet.breed }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            pet: {},
        };
    },
    computed: {
        ...mapState(["cats", "dogs"]),
    },
    mounted() {
        this.pet = this[this.$route.params.species][this.$route.params.id];
    },
};
</script>