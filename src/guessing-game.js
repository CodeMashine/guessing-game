class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max ;
        this.min = min ;
    }

    guess() {
        return (Math.ceil((this.max-this.min)/2) + this.min) ;
    }

    lower() {
        this.max = Math.ceil((this.max-this.min)/2) + this.min ;
    }

    greater() {
        this.min = Math.ceil((this.max-this.min)/2) + this.min ;
    }
}

module.exports = GuessingGame;
