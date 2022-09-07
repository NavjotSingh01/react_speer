import React from "react";
import {FiArchive} from 'react-icons/fi';
import {FaUndo} from 'react-icons/fa';


export default function ArchiveUndo ({
    archiveOrUndo,
    activities,
    setActivities,
    mappedActivities,
    activitiesRef
}){
    const handleArchiveAll = () => {
        activities.forEach((call, callIndex) => {
            const payload = {
                is_archived: true
            };

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            };

            fetch(
                `https://aircall-job.herokuapp.com/activities/${call.id}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((json) => {
                    activitiesRef[callIndex].is_archived = json.is_archived; 
                    setActivities(mappedActivities(activitiesRef));
                })
                .catch((err) => console.log(err));
        });
    };

    const handleUndoAll = () => {
        activities.forEach((call, callIndex) => {
            const payload = {
                is_archived: false
            };

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            };

            fetch(
                `https://aircall-job.herokuapp.com/activities/${call.id}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((json) => {
                    activitiesRef[callIndex].is_archived = json.is_archived; 
                    setActivities(mappedActivities(activitiesRef));
                })
                .catch((err) => console.log(err));
        });
    };

    return (
        <div className="CallBox">
            {archiveOrUndo === "archive" ? (
                <div className="callDetail"
                    onClick={handleArchiveAll}
                    style={{ marginTop: "0", marginBottom: "10px", padding: "15px 0" }}
                >
                    <FiArchive size={20} style={{padding: "0 20"}}/>
                    <span style={{ fontWeight: "600" }}>Archive all calls</span>
                </div>
            ) : archiveOrUndo === "undo" ? (
                <div className="callDetail"
                    onClick={handleUndoAll}
                    style={{ marginTop: "0", marginBottom: "10px", padding: "15px 0" }}
                >
                    <FaUndo size={20} style={{padding: "0 20"}} />
                    <span style={{ fontWeight: "600" }}>Undo all archived calls</span>
                </div>
            ) : null}
        </div>
    );
};