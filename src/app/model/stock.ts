export class Stock {
    favorite: boolean = false;
    //consturctor inicia los atributes of class
    constructor(public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        public exchange: string) {}
    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}