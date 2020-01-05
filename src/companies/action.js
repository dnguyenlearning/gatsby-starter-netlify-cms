import * as types from "./types";
import Airtable from "airtable";

const base = new Airtable({apiKey: 'keySCjTNN9E5c3bsw'}).base('appBwkOMERUfWZCvm');

export function fetchCompanies(){
    return async function (dispatch) {
        dispatch(_fetchingCompanies());
        const  option = {
            view: "data",
        }
        try {
            fetchingAirtableData({dispatch, option});
        } catch (error) {
            const { message } = error;
            dispatch(_fetchingCompaniesFailed({error: message}))
        }
    }
}

export function fetchCompaniesWithFilter({filters}){
    return async function (dispatch) {
        dispatch(_fetchingCompanies());
        const airtableFormula = filters.map(filter => filter.value).join(',');
        const finalFilter = `AND(${airtableFormula})`;
        let option = {
            view: "data",
            filterByFormula: finalFilter
        }
        try {
            fetchingAirtableData({dispatch, option});
        } catch (error) {
            const { message } = error;
            dispatch(_fetchingCompaniesFailed({error: message}))
        }
    }
}

async function fetchingAirtableData({dispatch, option}){
    let companyHoldingList = [];
    base('Data').select(option).eachPage(function page(records) {
        companyHoldingList = [...companyHoldingList, ...records.map(record => record.fields)]; 
        dispatch(_fetchingCompaniesSuccess({companies: companyHoldingList}))
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}

function _fetchingCompanies(){
    return {
        type: types.FETCHING_COMPANIES
    }
}

function _fetchingCompaniesSuccess({companies}){
    return {
        type: types.FETCHING_COMPANIES_SUCCESS,
        payload: {
            companies
        }
    }
}

function _fetchingCompaniesFailed({error}){
    return {
        type: types.FETCHING_COMPANIES_SUCCESS,
        payload: {
            error
        }
    }
}

