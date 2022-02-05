class Parent {
    constructor(){
        this._url = "https://pokeapi.co/api/v2/pokemon/"
    }

    get url() {
        return this._url
    }
}