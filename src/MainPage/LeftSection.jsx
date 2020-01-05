import React from "react";
import Companies  from "../companies";
import {useSelector, useDispatch} from "react-redux";
import * as companyActions from "../companies/action";
import {HashLoader} from "react-spinners";

function RightSection(){
    const dispatch = useDispatch();
    const companyList = useSelector(state => state.company.list || []);
    const isFetching  = useSelector(state => state.company.isFetching)
    const userFilters = useSelector(state => state.filter.userFilters);

    React.useEffect(() => {
        dispatch(companyActions.fetchCompaniesWithFilter({filters: userFilters}))
    }, [userFilters, dispatch])

    React.useEffect(() => {
        dispatch(companyActions.fetchCompanies());
    }, [dispatch])

    return <div className="flex-col">
        <div className="mb-5">
            <div className="font-semibold mb-2 text-gray-600">Companies</div>
            <div className="rounded bg-white p-0 lg:p-5 shadow-tech relative">
                <div className={`${isFetching ? "block" : "hidden"} flex mb-5 items-center`}>
                    <div className="mr-3 text-sm">Waiting for preparing data...</div>
                    <HashLoader color={"#f56565"} size={20}/>
                </div>
                <Companies isFetching={isFetching} companyList={companyList} />
            </div>
        </div>
    </div>
}

export default React.memo(RightSection);