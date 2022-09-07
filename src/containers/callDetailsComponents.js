
import {
    SwipeAction,
    TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { FiPhoneIncoming, FiPhoneMissed, FiVoicemail, FiArchive,FiMoreVertical } from 'react-icons/fi';
import {FaUndo} from 'react-icons/fa';

export const trailingActions = (handleCallArchive, isArchived) => (
    <TrailingActions>
        <SwipeAction onClick={() => handleCallArchive()} destructive={true}>
            <div className="archiveswipe" isArchived={isArchived}>
                {isArchived ? (
                    <FaUndo size="24" />
                ) : (
                    <FiArchive style={{ minWidth: "24px" }} />
                )}
            </div>
        </SwipeAction>
    </TrailingActions>
);

export const CallIcon = ({ callType }) => {
    if (callType === "answered") {
        return <FiPhoneIncoming size={20} style={{padding: "0 20"}}  />;
    } else if (callType === "missed") {
        return <FiPhoneMissed size={20} style={{padding: "0 20"}} />;
    } else if (callType === "voicemail") {
        return <FiVoicemail size={20} style={{padding: "0 20"}} />;
    } else {
        return null;
    }
};

export const CallVia = ({ via }) => {
    return (
        <>
            tried to call on
            <span style={{ fontSize: "12.7px", fontWeight: "900" }}> {via}</span>
        </>
    );
};

export const CallFrom = ({ direction, from, to }) => {
    if (direction === "inbound") {
        return <>{from}</>;
    } else if (direction === "outbound") {
        return <>{to}</>;
    } else {
        return null;
    }
};