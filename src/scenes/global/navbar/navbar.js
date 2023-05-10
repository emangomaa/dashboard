import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiMessageAltDetail } from 'react-icons/bi'
const Navbar = () => {
    return (
        <div className="row justify-content-between text-center my-4 px-5">
            <div className="col-4 mx-3" style={{ border: "1px solid rgb(98, 10, 156)", borderRadius: "10px", backgroundColor: "white" }}>
                <input style={{
                    border
                        : "none"
                }} className='' type='text' placeholder='search' /><AiOutlineSearch style={{
                    color:
                        "rgb(98, 10, 156)",
                }} />
            </div>
            <div className="col-2 d-md-block d-xs-none">notifications <IoMdNotificationsOutline style={{
                color
                    : "rgb(98, 10, 156)"
            }} /> </div>
            <div className="col-2 d-md-block d-xs-none">messages <BiMessageAltDetail style={{ color: "rgb(98, 10, 156)" }} /></div>
            <div className="col-2 text-end">
                <button style={{ backgroundColor: "rgb(98, 10, 156)", color: "white" }} className="btn">log out</button>
            </div>
        </div>
    )
}
export default Navbar;