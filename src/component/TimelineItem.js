import React from 'react';

const TimelineItem =({data}) =>(
<div className="timeline-item">
    <div className="timeline-item-content">
        <span className='tag' style = { { background:data.id} } > </span>
        <time> {data.time} </time>
        <h3>{data.title}</h3>
        <p> {data.description} </p> 
        <span className="circle "></span>
    </div>
</div>
);
export default TimelineItem;