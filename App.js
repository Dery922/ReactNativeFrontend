import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NotificationIcon } from "./components/Icons";
export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back</Title>
            <Name>Frank</Name>

            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <Subtitle>Continue Leaning</Subtitle>

          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 OF 12 Sections"
            />

            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 OF 12 Sections"
            />

            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 OF 12 Sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 44px;
  border-radius: 27px;
  background: black;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
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
