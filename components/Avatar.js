import React from "react";

import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "",
  };

  componentDidMount() {
    fetch("https://uinames.com/api/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response.photo,
        });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
