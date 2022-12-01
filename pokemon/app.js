const app = Vue.createApp({
    data(){
        return {
            pokemon: '',
            legend: '',
            picture: "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__480.png"
        }
    },
    methods: {
       async getPokemon(){
            const id = Math.floor(Math.random() * (300 - 1) + 1)
            const pokemon =await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const result = await pokemon.json()
            return result
        },
        async choosePokemon(){
            pkmn = await this.getPokemon()
            this.pokemon = pkmn.name
            this.picture = pkmn.sprites.front_default
            const moves = pkmn.moves
            const move = moves.sort(() => Math.random() - 0.5)[0].move.name
            this.legend = `Your pokemon is: ${this.pokemon.toUpperCase()}! Make good use of its powerful move ${move.toUpperCase()}!`           
        }
    }
})

app.mount('#app')