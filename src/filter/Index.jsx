import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as filterActions from "./action";

function Filter() {
    const filters = useSelector(state => state.filter.filters);
    const userFilters = useSelector(state => state.filter.userFilters);
    const dispatch = useDispatch();

    const addFilter = (filter) => {
        dispatch(filterActions.addFilter({ filter }))
    }

    const removeFilter = (filterId) => {
        dispatch(filterActions.removeFilter({ filterId }))
    }

    return <div className="flex flex-wrap min-w-full rounded bg-white">
        {filters.map(filter => {
            const active = userFilters.findIndex(userFilter => userFilter.id === filter.id) !== -1;

            return <span
                key={filter.id}
                onClick={() => { active ? removeFilter(filter.id) : addFilter(filter) }}
                className={`${active ? `bg-gray-500` : ``} flex-shrink-0 hover:bg-gray-500 m-1 cursor-pointer flex rounded bg-gray-200 text-black capitalize px-2 py-1 text-xs mr-3`}
            >
                {filter.icon} {filter.field}
            </span>
        })}
    </div>
}

export default React.memo(Filter);