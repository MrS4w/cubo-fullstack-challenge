var myChart = echarts.init(document.getElementById('main'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['pessoa 1', 'pessoa2', 'pessoa3', 'pessoa4', 'pessoa5']
    },
    series: [
        {
            name: 'Participation: ',
            type: 'pie',
            radius: ['49%', '90%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 15, name: 'pessoa 1' },
                { value: 20, name: 'pessoa2' },
                { value: 20, name: 'pessoa3' },
                { value: 5, name: 'pessoa4' },
                { value: 40, name: 'pessoa5' }
            ]
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);