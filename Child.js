class Child extends Parent {
    constructor(pokemonName, url){
        super(url)
        this._pokemonName = pokemonName
    }

    set pokemonName(string){
        this._pokemonName = string
    }

    get pokemonName() {
        return this._pokemonName
    }

    getPokemonByName() {
        fetch(this.url)
        .then(data => data.json())
        .then(json => {
            try {
                const foundPokemon = json.results.filter(pokeData => pokeData.name === this.pokemonName);

                fetch(foundPokemon[0].url)
                .then(data => data.json())
                .then(json => {
                    const [...pidgeotto] = Object.entries(json)
                    console.log(pidgeotto)
                })


            } catch (error) {
                console.log(error);
            }
        })
    };
}

let c = new Child("pidgeotto");

c.getPokemonByName()