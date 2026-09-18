import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container, Menu, LinkMenu } from "./styles";
import status from "./orders-status";
import api from "../../../services/api";
import Row from "./row";
import formatDate from "../../../utils/formatDate";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get("orders");
        setOrders(data);
        setFilteredOrders(data);
      } catch (err) {
        console.error("Erro ao carregar pedidos", err);
      }
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user?.name || "Cliente",
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products || [],
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(statusItem) {
    if (statusItem.id === 1) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter(
        (order) => order.status === statusItem.value
      );
      setFilteredOrders(newOrders);
    }
    setActiveStatus(statusItem.id);
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map((statusItem) => (
            <LinkMenu
              key={statusItem.id}
              onClick={() => handleStatus(statusItem)}
              isActiveStatus={activeStatus === statusItem.id}
            >
              {statusItem.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Orders;
