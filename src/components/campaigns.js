import { TbBrandCampaignmonitor } from 'react-icons/tb'
const Campaigns = () => {
    return (
        <div className='row p-3' style={{ border: "none", borderRadius: "10px", backgroundColor: "white" }}>
            <div className='col-8 p-0'>
                <h6>recent leads</h6>
                <span>450</span>
            </div>
            <div className='col-4 text-end'>
                <TbBrandCampaignmonitor style={{ fontSize: "30px", color: "rgb(98, 10, 156)" }} />
            </div>
            <div className='col-12' style={{ fontSize: "12px" }}>
                <p className='p-0 m-0'>-5.78%</p>
                <p className='p-0 m-0'>Since last month</p>
            </div>

        </div>
    )
}
export default Campaigns;