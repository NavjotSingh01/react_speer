import React from "react";
import CallBox from "../containers/callBox";
import ArchiveUndo from "../containers/archiveUndo";

export default function ActivityFeed({
    activities,
    activitiesRef,
    mappedActivities,
    setActivities
}) {
    if (activities) {
        return (
            <>
                <ArchiveUndo
                    archiveOrUndo={"archive"}
                    activities={activities}
                    setActivities={setActivities}
                    mappedActivities={mappedActivities}
                    activitiesRef={activitiesRef}
                />
                {activities.map((call, callIndex) =>
                    !call.is_archived ? (
                        <CallBox
                            key={call.id}
                            date={call.created_at}
                            from={call.from}
                            to={call.to}
                            callType={call.call_type}
                            isArchived={call.is_archived}
                            via={call.via}
                            direction={call.direction}
                            id={call.id}
                            activitiesRef={activitiesRef}
                            mappedActivities={mappedActivities}
                            setActivities={setActivities}
                            callIndex={callIndex}
                        />
                    ) : null
                )}
            </>
        );
    } else {
        return null;
    }
}

