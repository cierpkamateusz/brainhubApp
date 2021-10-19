/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Table } from "semantic-ui-react";

const EventListComponent = ({ events }) => {
  const returnTableBody = (data) => {
    return data.map((singleEvent, index) => {
      const { firstName, lastName, email, date } = singleEvent;
      return (
        <Table.Row key={index}>
          <Table.Cell>{firstName}</Table.Cell>
          <Table.Cell>{lastName}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
          <Table.Cell>{date}</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>firstName</Table.HeaderCell>
          <Table.HeaderCell>lastName</Table.HeaderCell>
          <Table.HeaderCell>email</Table.HeaderCell>
          <Table.HeaderCell>date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{returnTableBody(events)}</Table.Body>
    </Table>
  );
};
export default EventListComponent;
