import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';
import Partner from './Partner';

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

export const partnersReducer = partnersSlice.reducer;


export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

/*export const selectAllPartners = (state)=> {
    return state.partners.partnersArray;
};*/


export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
};

/*export const selectAllPartners = () => {
    return PARTNERS.find((partner) => partner.featured);
};*/