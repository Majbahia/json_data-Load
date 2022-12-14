class Product{
    name;
    Id;
    productCode;
    address;
    productPrice;
    Author;
    constructor(name, id, code, address, price, author){
        this.name = name;
        this.Id = id;
        this.productCode =  code;
        this.address= address;
        this.productPrice = price;
        this.Author = author;
    
    }
    ProductPrice(){
        const product = this.productCode * 5;
        
    }
}
const aamir = new Product("amir", 102, 5002, "Uttor Khaleya", 1500, 'Majbah');

console.log(aamir);
// aamir.ProductPrice();