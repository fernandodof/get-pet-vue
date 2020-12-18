<template>
    <div>
        <PetTable species="Cats" :pets="cats"> </PetTable>
    </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "@/components/PetTable";

export default {
    components: {
        PetTable,
    },
    computed: {
        ...mapState(["cats"]),
    },
};
</script>