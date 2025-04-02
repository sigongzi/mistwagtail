// TimelineItem.tsx
import React from 'react';
import { TimelineItem as TimelineItemType } from '../types/types';

const TimelineItem: React.FC<{ item: TimelineItemType }> = ({ item }) => {
    return (
        <div className="flex py-4">
            <div className="w-1/4 text-right pr-4">
                <h2 className="text-lg font-bold">{item.gregorianYear}</h2>
                {item.imperialYear && <p className="text-sm text-gray-500">{item.imperialYear}</p>}
            </div>
            <div className="w-1/12 flex justify-center">
                <div className="h-full w-1 bg-gray-300 relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 -left-1.5"></div>
                </div>
            </div>
            <div className="w-7/12 pl-4">
                {item.events.map((event, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-md font-semibold">{event.title}</h3>
                        {event.description && <p className="text-sm text-gray-700">{event.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineItem;  