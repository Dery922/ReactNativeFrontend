import React from "react";

import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions, Easing } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MenuItem from "./MenuItem";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, { toValue: 54 }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Frank</Title>
          <Subtitle>Engineer</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="close" size={35} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {Items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  font-size: 19px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  height: ${screenHeight};
  padding: 50px;
  background: #f0f3f5;
`;

const Items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-save",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "stop-circle",
    title: "Learn React",
    text: "start Learning with Me",
  },
  {
    icon: "log-out",
    title: "see you soon",
    text: "Logout",
  },
];

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
