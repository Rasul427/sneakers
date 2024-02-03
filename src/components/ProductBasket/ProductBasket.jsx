import './ProductBasket.css'
export default function ProductBasket({ name, price, photo }) {
    return (
        <>
            <div className="product-basket">
            
                <img src={photo} alt="" />
                <div className="product_display_basket">
                    <div className="product_title_basket">{name}</div>


                    <div className="product_price_basket"><p>Цена:</p> {price} ₽</div>
                </div>

                <button className='product_btn_basket'> ⨉
                </button>

            </div >


        </>
    )
}