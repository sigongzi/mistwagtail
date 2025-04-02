// Timeline.tsx
import React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItem as TimelineItemType } from '../types/types';

const Timeline: React.FC<{ items: TimelineItemType[] }> = ({ items }) => {
    return (
        <div className="container mx-auto p-4">
            {items.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
        </div>
    );
};

export default Timeline;    