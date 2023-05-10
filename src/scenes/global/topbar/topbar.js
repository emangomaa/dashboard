
import { AiOutlineUser } from 'react-icons/ai'
const Topbar = () => {
    return (
        <div className='row pt-4'>
            <div className='col-6 text-start px-5'>
                <img src='assets/logo.png' />
            </div>
            <div className='col-6'>
                <div className='row justify-content-end px-5'>
                    <div className='col-6 text-end'>
                        <p className='p-0 m-0 fs-5' style={{ textTransform: "uppercase" }}>divid allen</p>
                        <span className='p-0 fs-6' style={{ textTransform: "capitalize" }}>admin head</span>
                    </div>
                    <div className='col-6 pt-1 px-2 my-2' style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid rgb(98, 10, 156)" }}>
                        <AiOutlineUser style={{ fontSize: "25px", color: "rgb(98, 10, 156)" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;