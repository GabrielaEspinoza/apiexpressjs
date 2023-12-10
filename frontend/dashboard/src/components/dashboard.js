import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryLabel } from 'victory';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://34.16.165.131:5000/v1/api/sensor');
                let jsonData = await response.json();

                if (jsonData.length > 25) {
                    jsonData = jsonData.slice(jsonData.length - 25);
                }

                setChartData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 5000); // Realizar la solicitud cada 5 segundos

        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Datos de Sensor HC-SR501</h1>
            <VictoryChart
                domainPadding={{ x: 20 }}
                width={600}
                height={400}
            >
                <VictoryLegend
                    x={170}
                    y={5}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: 'black' }, title: { fontSize: 15 } }}
                    data={[
                        { name: 'Tiempo', symbol: { fill: 'rgba(75, 192, 192, 0.6)' } },
                        { name: 'Detencion', symbol: { fill: 'rgba(255, 99, 132, 0.6)' } },
                        { name: 'Estado', symbol: { fill: 'rgba(54, 162, 235, 0.6)' } },
                    ]}
                />
                <VictoryBar
                    data={chartData}
                    x="_id"
                    y={({ tiempo }) => parseInt(tiempo)}
                    style={{ data: { fill: 'rgba(75, 192, 192, 0.6)' } }}
                />
                <VictoryBar
                    data={chartData}
                    x="_id"
                    y={({ detencion }) => parseInt(detencion)}
                    style={{ data: { fill: 'rgba(255, 99, 132, 0.6)' } }}
                />
                <VictoryBar
                    data={chartData}
                    x="_id"
                    y={({ estado }) => parseInt(estado)}
                    style={{ data: { fill: 'rgba(54, 162, 235, 0.6)' } }}
                />
                <VictoryAxis dependentAxis />
                <VictoryAxis
                    tickValues={chartData.map(({ _id }) => _id)}
                    tickLabelComponent={<VictoryLabel angle={-60} style={{ fontSize: 4 }} />}
                />
            </VictoryChart>
        </div>
    );
};

export default Dashboard;
