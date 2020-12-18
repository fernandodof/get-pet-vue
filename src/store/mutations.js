export default {
    appendPet: (state, { species, pet }) => {
        console.log(species, pet);
        state[species].push(pet);
    }
};