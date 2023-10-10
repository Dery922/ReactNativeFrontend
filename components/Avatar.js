import React from "react";

import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "",
  };

  // componentDidMount() {
  //   fetch("https://uifaces.co/api")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         photo: response.breeds,
  //       });
  //     });
  // }

  render() {
    return <Image />;
  }
}

export default Avatar;

const Image = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
