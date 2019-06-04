export default function(products = [], action){

  var productCopy = [...products]

  if(action.type === 'getProductsFromDB'){
    console.log("REDUCER OK")
    console.log('Action from Product reducer >>', action);
    productCopy.push({
      ownerAddress : action.ownerAddressEth,
      status : action.productStatus,
      producerHash : action.producerHash,
      creationDate : action.productCreationDate,
      productAddress : action.productAddressEth,
      domaine : action.productDomaine,
      cuvee : action.productCuvee,
      youtube : action.productYoutube,
      desktopImg : action.productDeskImg,
      mobileImg : action.productMobImg,
      millesime : action.productMillesime,
      cepages : action.productCepages,
      appellation : action.productAppellation,
      region : action.productRegion,
      country : action.productCountry,
      quality : action.productQuality,
      history : action.domainHistory,
      accords : action.productAccords,
      domainAddress : action.domainPostalAddress,
      url : action.domainUrl,
      facebook : action.domainFacebook,
      email : action.domainEmail,
    })
    return productCopy;
  } else {
    return products;
  }
}
