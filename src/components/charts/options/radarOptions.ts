const radarDefaultData = {
    title: "Radar Chart",
    legend: ["person1", "person2"],
    indicator: [
        {
            "name": "Sadness",
            "max": 100
        },
        {
            "name": "Happiness",
            "max": 100
        },
        {
            "name": "Fear",
            "max": 100
        },
        {
            "name": "Anger",
            "max": 100
        },
        {
            "name": "Surpriset",
            "max": 100
        },
        {
            "name": "Disgust",
            "max": 100
        }
    ],
    seriesName: "emotion",
    seriesData: [
        {
            "value": [
                80,
                90,
                70,
                85,
                60
            ],
            "name": "person1"
        },
        {
            "value": [
                60,
                80,
                75,
                70,
                90
            ],
            "name": "person2"
        }
    ]
};

export const radarOptions = {
    base: {
        title: {
            text: radarDefaultData.title
        },
        legend: {
            data: radarDefaultData.legend,
        },
        radar: {
            indicator: radarDefaultData.indicator
        },
        series: [
            {
                type: "radar",
                name: radarDefaultData.seriesName,
                data: radarDefaultData.seriesData
            }
        ]
    }
};

export type RadarType = keyof typeof radarOptions;