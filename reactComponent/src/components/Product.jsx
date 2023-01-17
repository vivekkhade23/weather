// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {


  return (
    <>
      <div data-testid="product-container"  style={{
        border: "2px solid #ffb23b",
        display: "flex",
        justifyContent: "space-around",
        color: "#ff3925",
        margin: "35px"
      }}>
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment"  onClick={()=>handleQty(id,+1)} style={{height:"29px",alignSelf:"center"}} >+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" disabled={quantity<=0?true:false} onClick={()=>handleQty(id,-1)}  style={{height:"29px",alignSelf:"center"}}>-</button>
      </div>
    </>
  );
};
export default Product;
