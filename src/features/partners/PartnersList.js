import { Col } from 'reactstrap';
import { Partner } from './components/Partner';
import selectAllPartners from './features/partners/PartnersList';


const PartnersList = () => {
    const partners = selectAllPartners();
    return (
       <Col className='mt-4'>
       
       {partners.map((partner) => {
            return (
                <div 
                md='5' 
                className='d-flex mb-5' 
                key={partner.id}
                >
                    <Partner  partner={partner} />
                </div>
                    );
                })}
       </Col>
    );
  }

export default PartnersList;