
import RecentLeads from '../../components/recentLeads'
import Deals from '../../components/deals'
import Revenue from '../../components/revenue'
import Campaigns from '../../components/campaigns'
import RevenueGenerated from '../../components/revenueGenerated'
import EmailCampaign from '../../components/emailCampaign'
const Workspaces = () => {
    return (
        <main>
            <div className='row p-4 mx-4'>
                <div className='col-xs-6 col-md-3'>
                    <div className='p-2'>
                        <RecentLeads />
                    </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                    <div className='p-2'>
                        <Deals />
                    </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                    <div className='p-2'>
                        <Revenue />
                    </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                    <div className='p-2'>
                        <Campaigns />
                    </div>
                </div>
            </div>
            <div className='row mx-5 p-2'>
                <div className='col-xs-12 col-md-6' >
                    <div className='p-2' >
                        <RevenueGenerated />
                    </div>
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div className='p-2'>
                        <EmailCampaign />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Workspaces;

// <AiOutlineShoppingCart />
//             <TbBrandCampaignmonitor />
//             <VscPreview />