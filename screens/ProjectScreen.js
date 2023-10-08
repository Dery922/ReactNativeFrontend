import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class ProjectScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Project Screen </Text>
      </Container>
    );
  }
}

export default ProjectScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
