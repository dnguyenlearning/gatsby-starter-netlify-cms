import React from "react";
import AdvertisingBarPNG from "../img/advertising_bar.png";
import { Link } from "gatsby";
import { BounceLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import Airtable from "airtable";

function Companies() {
    const [companyList, setCompanyList] = React.useState([]);
    const [offset, setOffset] = React.useState();
    const [isFetching, setIsFetching] = React.useState(false);

    const fetchUrl = (offset) => `https://api.airtable.com/v0/appBwkOMERUfWZCvm/Data?view=congty${offset ? `&offset=${offset}`: ``}`
    const base = React.useMemo(()=> {
        return new Airtable({apiKey: 'keySCjTNN9E5c3bsw'}).base('appBwkOMERUfWZCvm');
    },[])

    React.useEffect(() => {
        setIsFetching(true);
        let companyHoldingList = [];
        base('Data').select({
            // Selecting the first 3 records in congty:
            view: "congty"
        }).eachPage(function page(records, fetchNextPage) {
            companyHoldingList = [...companyHoldingList, ...records.map(record => record.fields)]; 
            setCompanyList(companyHoldingList);
            fetchNextPage();
        }, function done(err) {
            setIsFetching(false);
            if (err) { console.error(err); return; }
        });
    }, []);

    if (isFetching) return <div className="max-w-full flex justify-center mt-32">
        <BounceLoader
          size={100}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={isFetching}
        />
    </div>
    return <div className="company_list">
        {/* <InfiniteScroll
          dataLength={companyList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
        {companyList.map((company, index) => {
            let description = company['overview/body'];
            if(description.length > 303){
                description = description.slice(0,300) + '...'
            }
            if ((index > 1 && index % 10 === 0)) return <div key={company.companyID} className="md:flex mb-4 h-24 sm:h-40 p-5">
                <img className="max-w-full max-h-full mx-auto" src={AdvertisingBarPNG} alt="advertising 2" />
            </div>
            return <div key={company.companyID} className="sm:flex-row shadow-lg sm:shadow-none m-2 sm:m-0 sm:p-2 p-5 flex flex-col border-b border-gray-300 pb-4 pl-4 sm:mb-4 my-10">
                <div className="md:flex-shrink-0  sm:w-3/12 h-100 flex justify-center sm:items-center items-start">
                    {/* <Link to="/detail-ui"> */}
                        <img className="sm:w-40 w-24 cursor-pointer" src={company.logo_url} alt="logo" />
                    {/* </Link> */}
                </div>
                <div className="mt-3 md:mt-0 md:ml-6 sm:w-8/12 text-center sm:text-left">
                    <Link to="/detail-ui">
                        <div className={`uppercase hidden sm:block cursor-pointer tracking-wide text-lg font-bold`}>{company.name}</div>
                    </Link>
                    <span className="text-sm normal-case text-gray-400">{company['overview/title']}</span>
                    {/* <a href="#" className="block mt-4 text-lg leading-tight text-gray-600">{company.title}</a> */}
                    <p className="mt-1 text-gray-500">{description}</p>
                    {/* <div className="flex flex-wrap mt-3">
                    <span className="cursor-default flex justify-center items-center rounded-lg bg-gray-300 text-black capitalize px-2 text-xs font-bold mr-3">{company.address}</span>
                    <span className="cursor-default flex justify-center items-center rounded-lg bg-gray-300 text-black capitalize px-2 text-xs font-bold mr-3">{company.type}</span>
                    <span className="cursor-default flex justify-center items-center rounded-lg bg-gray-300 text-black capitalize px-2 text-xs font-bold mr-3 text-lg">{company.country}</span>
                  </div> */}
                </div>
                <div className="flex items-center justify-center flex-col sm:w-1/12 mt-2">
                    <div className="text-2xl">👍</div>
                    <div className="text-sm text-gray-700">{company.like_numbers}</div>
                </div>
            </div>
        })}
        {/* </InfiniteScroll>
         */}
    </div>
};

export default React.memo(Companies);