import axios from 'axios'; 


function requestActivities() {
    return {
        type: "FETCHING_ACTIVITIES_REQUEST",
        isFetchingActivities: true,
    };
}
function receiveActivities(data) {
    return {
        type: "FETCHING_ACTIVITIES_RECEIVE",
        isFetchingActivities: false,
        activities: data,
    };
}



export function getActivities(courseId) {
    let config = {
        method: "get",
        url: 'https://aircall-job.herokuapp.com/activities',
        // headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Token ${token}`,
        // },
    };

    return (dispatch) => {
        dispatch(requestActivities());
        return axios(config)
            .then((res) => res.data)
            .then((data) => {
                dispatch(receiveActivities(data));
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
