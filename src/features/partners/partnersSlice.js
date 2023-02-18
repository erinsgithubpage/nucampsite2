import { PARTNERS } from '../../app/shared/PARTNERS';
import Partner from './Partner';


export const selectAllPartners = () => {
    return PARTNERS;
};

/*export const selectAllPartners = (state)=> {
    return state.partners.partnersArray;
};*/


export const selectFeaturedPartner = () => {
    return PARTNERS.find((partners) => partners.featured);
};

/*export const selectAllPartners = () => {
    return PARTNERS.find((partner) => partner.featured);
};*/