import "expo";
import React from "react";
import {
  Container,
  Content,
  Icon,
  Button,
  Text,
} from "native-base";

const ProContent = props => {
  return (
    <Container>
      <Content
        contentContainerStyle={{
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Icon
          name="sad"
          style={{
            fontSize: 70,
            color: "#0dc49d",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color: "#0dc49d",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {" "}Sorry, this content is for Pro members !!
        </Text>
        <Button
          bordered
          style={styles.button}
          onPress={() => props.navigation.navigate("Price")}
        >
          <Text style={styles.text}>Upgrade</Text>
        </Button>
      </Content>
    </Container>
  );
};
const styles = {
  text: {
    alignSelf: "center",
    color: "#0dc49d",
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "#0dc49d",
  },
  button: {
    alignSelf: "center",
    marginTop: 15,
    borderColor: "#0dc49d",
  },
};

export default ProContent;
