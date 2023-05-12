import React from 'react';
import styled from 'styled-components';
import AppProviderContext from '../../store/AppContext';

const Table = () => {
  const { count, currentCount } = React.useContext(AppProviderContext);
  return (
    <Container>
      <h2>Overview</h2>

      <table className="main">
        <tr>
          <th>total clicks</th>
          <th>current count</th>
        </tr>
        <tr>
          <td> {count.length}</td>
          <td> {currentCount}</td>
        </tr>
      </table>
      <h2>History</h2>
      <table>
        <tr>
          <th>day</th>
          <th>time</th>
          <th>value</th>
        </tr>

        {count.map(({ day, time, value }) => (
          <tr>
            <td>{day}</td>
            <td>{time}</td>
            <td>{value}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top:20px
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.main{
  th,td{
    background-color: white;
    text-align:center;
  }
 
}
`;
