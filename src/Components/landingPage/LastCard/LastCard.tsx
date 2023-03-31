import React from "react";
import styled from "styled-components";

const LastCard = () => {
  return (
    <Container>
      <Wrapper>
        <Top>Add Payment methods in a click</Top>
        <Boxhold>
          <Card>
            <Img />
            <Down>
              <h3>Enjoy easy Pay out</h3>
              <Started>Get Started</Started>
            </Down>
          </Card>

          <Card>
            <Img />
            <Down>
              <h3>Enjoy easy Pay out</h3>
              <Started>Get Started</Started>
            </Down>
          </Card>

          <Card>
            <Img />
            <Down>
              <h3>Enjoy easy Pay out</h3>
              <Started>Get Started</Started>
            </Down>
          </Card>
        </Boxhold>
      </Wrapper>
    </Container>
  );
};

export default LastCard;

const Started = styled.img``;
const Down = styled.img``;
const Img = styled.img``;
const Card = styled.div``;
const Boxhold = styled.div``;
const Top = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;
