import { useState } from 'react';
import ArchiveUndo from '../containers/archiveUndo';
import {FiMoreVertical,FiSliders } from 'react-icons/fi';

import CallBox from "../containers/callBox";


const ArchiveSwitch = ({ setseearchive, seearchive }) => {

  return (
    <>
      <div className="archiveswitch" seearchive={seearchive}>
      <div id='btn' style={{left: seearchive ? "45%" : "5%"}}></div>
        <div className="activitybtn"
          seearchive={seearchive}
          onClick={() => setseearchive(false)}
        >
          Inbox
        </div>
        <FiMoreVertical size={20} style={{marginTop: 23, color:'lightgray'}} />
        <div className="archivebtn"
          seearchive={seearchive}
          onClick={() => setseearchive(true)}
        >
          All calls
        </div>
        <FiMoreVertical size={20} style={{marginTop: 23, color:'lightgray'}} />
        <FiSliders size={22} style={{marginTop: 23, marginRight: 10 }} />

        
      </div>
    </>
  );
};

const Archive = ({
  activities,
  activitiesRef,
  mappedActivities,
  setActivities
}) => {
  if (activities) {
    return (
      <>
        <ArchiveUndo
          archiveOrUndo={"undo"}
          activities={activities}
          setActivities={setActivities}
          mappedActivities={mappedActivities}
          activitiesRef={activitiesRef}
        />
        {activities.map((call, callIndex) =>
          call.is_archived ? (
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
};

export { ArchiveSwitch, Archive };
