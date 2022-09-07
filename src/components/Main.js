import React, { useEffect, useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Threads from "./Threads";
import { getActivities } from "../actions/allAction";
import ActivityFeed from "./ActivityFeed";
import { Archive } from "./Archive";

import Header from './Header';
import Tabs from "./tabs";

function mappedActivities(activities) {
    let data = activities.map((call) => {
        return {
            id: call.id,
            created_at: call.created_at,
            direction: call.direction,
            from: call.from,
            to: call.to,
            via: call.via,
            duration: call.duration,
            is_archived: call.is_archived,
            call_type: call.call_type
        };
    });
    return data;
}

export default function Main(props) {


    const dispatch = useDispatch();
    const activitiesRef = useRef(null);
    const [activities, setActivities] = useState(null);
    const activitiesList = useSelector(
        (state) => state.callReducer.activitiesList
    );
    const isFetchingActivities = useSelector(
        (state) => state.callReducer.isFetchingActivities
    );
    const [seearchive, setseearchive] = useState(false);



    useEffect(() => {
        dispatch(getActivities());
        activitiesRef.current = activitiesList;
        setActivities(activitiesList)
    }, [activitiesList]);



        return (
            <div id="app">
                <div className="container">
                    <Header setseearchive={setseearchive} seearchive={seearchive} />
                    <div className="container-view">
                        {seearchive ? (
                            <Archive
                                activities={activities}
                                activitiesRef={activitiesRef.current}
                                mappedActivities={mappedActivities}
                                setActivities={setActivities}
                            />
                        ) : (

                            <ActivityFeed
                                activities={activities}
                                activitiesRef={activitiesRef.current}
                                mappedActivities={mappedActivities}
                                setActivities={setActivities}
                            />
                        )}
                    </div>
                    <Tabs />
                </div>
            </div>
        );
    


}