import Navbar from '../components/Navbar'
import BackgroundHeader from '../components/BackgroundHeader'
import AddressBox from '../components/AddressBox'
import PromoInWhere from '../components/PromoInWhere'

function Header(){
    return(
        <>
            <div>
                <Navbar></Navbar>
                <BackgroundHeader></BackgroundHeader>
                <AddressBox></AddressBox>
                <PromoInWhere></PromoInWhere>
            </div>
        </>
    )
}
export default Header;