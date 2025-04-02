// App.tsx
import React from 'react';
import Timeline from './components/Timeline';
import { TimelineItem } from './types/types';

const items: TimelineItem[] = [
    {
        gregorianYear: 304,
        imperialYear: '西晋永兴元年',
        events: [
            {
                title: '李雄称成都王',
                description: '巴氐族李雄在蜀地称成都王，建立成汉政权，是十六国之一。'
            },
            {
                title: '刘渊称汉王',
                description: '匈奴人刘渊在左国城称汉王，建立汉赵政权，拉开了十六国时期的序幕。'
            }
        ]
    },
    {
        gregorianYear: 316,
        imperialYear: '西晋建兴四年',
        events: [
            {
                title: '西晋灭亡',
                description: '汉赵刘曜围攻长安，晋愍帝出降，西晋灭亡。'
            }
        ]
    },
    {
        gregorianYear: 357,
        imperialYear: '东晋升平元年',
        events: [
            {
                title: '苻坚即位',
                description: '前秦苻坚杀苻生后即位，重用王猛，推行一系列改革，使前秦逐渐强大。'
            }
        ]
    }
];

const App: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-4">竖向时间轴 - 十六国时期</h1>
            <Timeline items={items} />
        </div>
    );
};

export default App;    