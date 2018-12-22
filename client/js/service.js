let myChart = echarts.init(document.getElementById('main'))

let option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: []
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '90%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            data: [

            ]
        }
    ]
}

let total
function getData() {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', "http://localhost:8080/data", true)

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('first_name').focus()
                let obj = JSON.parse(xhr.responseText)

                obj.forEach((element, i) => {
                    option.series[0].data[i] = {}
                    option.series[0].data[i].value = element.participation
                    option.series[0].data[i].name = element.firstName + ' ' + element.lastName
                    option.legend.data.push(element.firstName + ' ' + element.lastName)
                    myChart.setOption(option)

                    document.getElementById('tbody').innerHTML += `
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.participation}%</td>
                    </tr>`
                })

                total = obj.reduce((total, n) => total + n.participation, 0)
                document.getElementById('tbody').innerHTML += `
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${total}%</td>
                    </tr>
                </tfoot>`
            } else {
                console.log(xhr.responseText)
            }
        }
    }
    xhr.send()
}

function postData(event) {
    event.preventDefault()
    let firstName = document.getElementById('first_name').value
    let lastName = document.getElementById('last_name').value
    let participation = document.getElementById('participation').value

    let obj = {
        "firstName": firstName,
        "lastName": lastName,
        "participation": participation
    }

    let request = new XMLHttpRequest()

    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let result = request.responseText
                console.log('result: ' + result)
            }
        }
    }

    if (100 >= parseInt(participation) + total) {
        request.open("POST", 'http://localhost:8080/data', true)
        request.setRequestHeader('Content-Type', 'application/json')
        request.send(JSON.stringify(obj))

        location.reload()
    } else {
        alert(`You can't have more than 100%, and you already have: ${total}%`)
    }
}