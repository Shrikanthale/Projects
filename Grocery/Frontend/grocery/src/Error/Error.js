export const setError=(itemName,isPurchased)=>{
    let errors={};
    errors.itemName=itemName?"":"Item Name is Required"
    errors.isPurchased=isPurchased?"":"Is Purchased is Required"
    return errors;
}