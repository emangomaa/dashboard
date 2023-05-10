import './sidebar.css'
import { TiHomeOutline, TiStarOutline } from 'react-icons/ti'
import { AiOutlineClockCircle, AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { MdWorkspacesOutline } from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <ul>
                    <li>
                        <span><TiHomeOutline /></span> Home
                    </li>
                    <li>
                        <span><TiStarOutline /></span> Favorite
                    </li>
                    <li>
                        <span> <AiOutlineClockCircle /></span> Recent
                    </li>
                    <li>
                        <span><AiOutlineAppstore /> </span> Apps
                    </li>
                    <li>
                        <span><BsPeople /></span> Shared with me
                    </li>
                    <li>
                        <span><MdWorkspacesOutline /></span> Workspaces
                    </li>
                    <li>
                        <span><AiOutlineUser /></span> my workspace
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Sidebar;