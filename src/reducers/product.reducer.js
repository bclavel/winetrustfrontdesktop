export default function(products = [], action){

  var productCopy = [...products]

  if(action.type === 'createProduct'){
    console.log('Action from createProduct reducer >>', action);
    productCopy.push({
      ownerAddressEth : action.ownerAddressEth,
      productStatus : action.productStatus,
      producerHash : action.producerHash,
      productCreationDate : action.productCreationDate,
      productAddressEth : action.productAddressEth,
      productDomaine : action.productDomaine,
      productCuvee : action.productCuvee,
      productYoutube : action.productYoutube,
      productDeskImg : action.productDeskImg,
      productMobImg : action.productMobImg,
      productMillesime : action.productMillesime,
      productCepages : action.productCepages,
      productAppellation : action.productAppellation,
      productRegion : action.productRegion,
      productCountry : action.productCountry,
      productQuality : action.productQuality,
      domainHistory : action.domainHistory,
      productAccords : action.productAccords,
      domainPostalAddress : action.domainPostalAddress,
      domainUrl : action.domainUrl,
      domainFacebook : action.domainFacebook,
      domainEmail : action.domainEmail,
      historiqueTransactions : action.historiqueTransactions
    })
    return productCopy;
  } else if(action.type === 'getProductsFromDB'){
    console.log('Action from getProductsFromDB reducer >>', action);
    var results = action.products
    for (var i = 0; i < results.length; i++) {
      productCopy.push(results[i])
    }
    return productCopy;
  } else {
    return products;
  }
}
