function productBudget(args = {product1, product2, product3, product4, product5}){

    for(var i = 0; i <= args.length; i++){
        console.log("price of product"+(i+1)+" : "+args[i]);
    }
}
productBudget(400, 340, 290, 499, 589);    

