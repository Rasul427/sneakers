
import './Product.css'

export default function Product({ name, price, photo }) {
    return (
        <>
            <div className="product">
                <div className="heart">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2373 2.23731C17.7839 3.78395 17.8432 6.27268 16.3718 7.89114L8.99949 16.0001L1.62812 7.89111C0.156794 6.27265 0.216048 3.7839 1.76269 2.23726C3.48961 0.510338 6.33372 0.66814 7.85937 2.5752L9 4.00045L10.1396 2.57504C11.6653 0.667978 14.5104 0.510393 16.2373 2.23731Z" stroke="#ECECEC" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <img src={photo} alt="" />

                <div className="product_title">{name}</div>

                <div className="product_display">
                    <div className="product_price"><p>Цена:</p> {price} ₽</div>


                    <button className='product_btn'> +
                    </button></div>
            </div>
        </>
    )
}