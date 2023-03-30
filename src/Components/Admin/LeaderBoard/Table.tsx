import React from 'react'
import styled from 'styled-components';

const Table = () => {
  return (
    <div>
        <Container>
        <TableStyle>
          <table>
            <tr>
              <th>name</th>
              <th>number</th>
              <th>code</th>
            </tr>
            
              <tr>
                <td>name </td>
                <td>number</td>
                <td>code</td>
              </tr>
       
          </table>
        </TableStyle>
        </Container>
    </div>
  )
}

export default Table

const TableStyle = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
  }
`;


const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;
