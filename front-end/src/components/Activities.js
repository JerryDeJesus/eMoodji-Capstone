import { useState } from "react";
const data = require('../data/activities.json');

export default function Activities(){



    const [ activities, setActivities ] = useState(data);
    console.log(data);

    //cant map currently, data in object form
    // let mappedActivities = activities.map((activity) => {
    //     return (<div>
    //         {activity.name}
    //         {activity.description}
    //     </div>
    //     )
    // })


    return(
    //   {mappedActivities}
    <div>test</div>
    )
}