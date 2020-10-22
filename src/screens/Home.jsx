import React from 'react';
import { Container, Row, Column } from '../components/Custom';

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Column md={6} lg={6} xl={6} xs={1}>
            1
          </Column>
          <Column md={6} lg={6} xl={6}>
            2
          </Column>
        </Row>
      </Container>
    </div>
  )
}
