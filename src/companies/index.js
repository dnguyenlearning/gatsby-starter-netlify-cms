import React from "react";
import {isEmpty} from "lodash";

function Companies({companyList=[], isFetching}) {
    if(isEmpty(companyList) && isFetching) return null;
    if(isEmpty(companyList) && !isFetching) return <div className="py-2 pl-5">Nothing to return</div>
    return <div className="company_list">
        {companyList.map((company, index) => {
            return <div key={company.companyID} className="flex items-center flex-row m-2 sm:m-0 p-2 border-b border-gray-200 pb-4 pl-4">
                <div className="w-12 lg:w-20 h-20  flex overflow-hidden items-center justify-center">
                    <img className="w-full cursor-pointer" src={company.logo_url} alt="logo" />
                </div>
                <div className="flex-1 ml-5">
                    <div className={`uppercase cursor-pointer tracking-wide text-black font-bold`}>{company.name}</div>
                    <span className="text-sm normal-case text-gray-500">{company['overview/title'].replace(/Why You'll Love Working Here Location/gi, '').replace(/Location|Locations/gi, '')}</span>
                    <p className="mt-1 font-regular">{company['post_url']}</p>
                </div>
                <div className="flex items-center justify-center flex-shrink-0 flex-col w-10 ml-5">
                    <div className="flex flex-col justify-center items-center px-3 py-1 rounded">
                        <div className="text-xl"><span role="img" aria-label="like">👍</span></div>
                        <div className="text-sm text-gray-700">{company.like_numbers || 0}</div>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default React.memo(Companies);