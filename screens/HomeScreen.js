import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";

import { connect } from "react-redux";
import Avatar from "../components/Avatar";
import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ModalLogin from "../components/ModalLogin";

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        caption
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidUpdate() {
    this.toggleMenu();
  }
  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>

                <Title>Welcome Back</Title>
                <Name>Frank</Name>

                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>

              <Subtitle>{"Continue Learning".toUpperCase()}</Subtitle>

              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <Query query={CardsQuery}>
                  {({ loading, error, data }) => {
                    if (loading) return <Message>Loading.....</Message>;
                    if (error) return <Message>Error....</Message>;
                    return (
                      <CardsContainer>
                        {data.cardsCollection.items.map((card, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              this.props.navigation.navigate("home", {
                                section: card,
                              });
                            }}
                          >
                            <Card
                              title={card.title}
                              subtitle={card.subtitle}
                              caption={card.caption}
                              image={{ uri: card.image.url }}
                              content={card.content}
                            />
                          </TouchableOpacity>
                        ))}
                      </CardsContainer>
                    );
                  }}
                </Query>
              </ScrollView>
              <Subtitle>Popular Courses</Subtitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
              <Course />
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
        <ModalLogin />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const CoursesConatainer = styled.View``;

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;

const CardsContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius-top-left: 10px;
  border-radius-top-right: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

//Static data down for logos
const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio F",
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React R",
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift W",
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch z",
  },
];

//cards static data below

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background16.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Styled Components",
    image: require("../assets/background15.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Props In Designersw",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Node.js ReactNative,React,Javascript,Laravel",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "DataStructures and Algorthms",
    image: require("../assets/background15.jpg"),
    subtitle: "Date",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "UI,UX Designers Club",
    image: require("../assets/background16.jpg"),
    subtitle: "NativeWay",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "123 Sections",
    image: require("../assets/background16.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Frank Dery",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "123 Sections",
    image: require("../assets/background15.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Frank Dery",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "123 Sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Frank Dery",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "123 Sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Frank Dery",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
];
