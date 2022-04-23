import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [peoples, setPeoples] = useState([]);
    const [error, setError] = useState('');

    const randomPeopleGenerator = () => {
        const randomNum = Math.random();
        const random = Math.floor(randomNum * 100);
        return random;
    };

    const handleAddNewRecord = () => {
        const randomPeople = randomPeopleGenerator();

        fetch(`https://swapi.dev/api/people/${randomPeople}`)
            .then(res => res.json())
            .then(data => {
                if (data.detail === 'Not found') {
                    setError('URL not found');
                    return;
                }

                else {
                    setError('');
                    setPeoples(newArr => [...newArr, data]);
                }
            });
    };

    const handleRecordDelete = (selected) => {
        setPeoples(peoples.filter(people => people.name !== selected.name));
    };

    return (
        <div>
            <h1 className="title">Call Records</h1>

            <div>
                <button
                    onClick={handleAddNewRecord}
                    className="btn btn-add"
                >ADD RECORD</button>
            </div>

            {
                peoples.length === 0 ? <div>
                    <h3>No call record found</h3>
                </div>
                    :
                    <div className="record-table">
                        <h3>Records found: {peoples.length}</h3>

                        <div className="error-sec">
                            <div className="error">
                                {
                                    error ? <p>{error}, <span className="try" onClick={handleAddNewRecord}>try another one</span></p> : ''
                                }
                            </div>
                        </div>

                        <table style={{ width: '360px' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '75%' }}>NAME</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    peoples.map((people, idx) => <tr
                                        key={idx}
                                    >
                                        <td>{people?.name}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button
                                                onClick={() => handleRecordDelete(people)}
                                                className="btn btn-delete"
                                            >DELETE</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default Home;