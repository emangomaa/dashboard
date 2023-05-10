import { AiOutlineShoppingCart } from 'react-icons/ai'
const Deals = () => {
    return (
        <div className='row p-3' style={{ border: "none", borderRadius: "10px", backgroundColor: "white" }}>
            <div className='col-8 p-0'>
                <h6>deals</h6>
                <span>15.556</span>
            </div>
            <div className='col-4 text-end'>
                <AiOutlineShoppingCart style={{ fontSize: "30px", color: "rgb(98, 10, 156)" }} />
            </div>
            <div className='col-12' style={{ fontSize: "12px" }}>
                <p className='p-0 m-0'>-5.78%</p>
                <p className='p-0 m-0'>Since last month</p>
            </div>

        </div>
    )
}
export default Deals;