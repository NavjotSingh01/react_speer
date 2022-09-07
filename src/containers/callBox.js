import React from "react";
import {trailingActions,CallIcon,CallFrom,CallVia} from './callDetailsComponents';
import {FiMoreVertical } from 'react-icons/fi';
import {
    SwipeableList,
    SwipeableListItem,
} from "react-swipeable-list";


export default function CallBox({
    id,
    date,
    from,
    to,
    callType,
    isArchived,
    via,
    direction,
    activitiesRef,
    setActivities,
    mappedActivities,
    callIndex
}){
    let newDate = new Date(date);
    let dateOptions = { year: "numeric", month: "long", day: "numeric" };
    let timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    let formatDate = new Intl.DateTimeFormat("en-US", dateOptions);
    let formatTime = new Intl.DateTimeFormat("en-US", timeOptions);
    let fullTime = formatTime.format(newDate);
    let time = fullTime.match(/[\d:]+/);
    let ampm = fullTime.match(/PM|AM/);

    const handleCallArchive = () => {
        const payload = {
            is_archived: !isArchived
        };

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        };

        fetch(`https://aircall-job.herokuapp.com/activities/${id}`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                activitiesRef[callIndex].is_archived = json.is_archived; 
                setActivities(mappedActivities(activitiesRef));
            })
            .catch((err) => console.log(err));
    };

    return (


        <div className="callBox">
            <div className="callDate">
                <SwipeableList destructiveCallbackDelay={100}>
                    <SwipeableListItem
                        trailingActions={trailingActions(handleCallArchive, isArchived)}
                    >

                        <div className="callDetail">
                            <CallIcon callType={callType} />
                            <div className="callFrom">
                                <CallFrom direction={direction} to={to} from={from} />
                                <div className="callvia">
                                    <CallVia via={via} />
                                </div>
                                
                            </div>
                            <FiMoreVertical size={18} />
                            <div className="callTime">
                                <div id="time">{time}</div>
                                <div id="ampm">{ampm}</div>

                            </div>


                        </div>
                    </SwipeableListItem>

                </SwipeableList>

            </div>

        </div>
    );
};