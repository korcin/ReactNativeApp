import React, { Component, Fragment, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {
  Menu,
  FormControl,
  Input,
  Modal,
  Button,
  Center,
  NativeBaseProvider,
  TextArea,
  Container,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import Task from "./Task";
import { COMPLAINT } from "./const/DataBase";

function Start() {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [showNote, setShowNote] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [taskItems, setTaskItems] = useState([]);

  const [itemContent, setItemContent] = useState({ id, title, description });

  const [shouldOverlapWithTrigger] = React.useState(false);
  const [position, setPosition] = React.useState("auto");

  const checkItem = (item) => {
    setItemContent(item);
    setShowNote(true);
  };

  const handleAddTask = () => {
    setTaskItems([...taskItems, { id, title, description }]);
    postData();
    setTitle(null);
  };

  const getData = async () => {
    try {
      const response = await axios.get(COMPLAINT + "/complaints");
      setTaskItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const postData = () => {
    axios
      .post(COMPLAINT + "/complaints", {
        id: id,
        title: title,
        description: description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const putData = (index) => {
    axios
      .put(COMPLAINT + "/complaints/" + index, {
        id: id,
        title: title,
        description: description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeData = (index) => {
    axios
      .delete(COMPLAINT + "/complaints/" + index)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Reklamacje</Text>
          <View style={styles.items}>
            {taskItems &&
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => checkItem(item)}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>

        <NativeBaseProvider>
          <Menu
            w="100"
            shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
            placement={position == "auto" ? undefined : position}
            trigger={(triggerProps) => {
              return (
                <Button
                  alignSelf="center"
                  variant="solid"
                  {...triggerProps}
                  style={styles.NoteButton}
                >
                  Note Menu
                </Button>
              );
            }}
          >
            <Menu.Item alignItems={"center"} onPress={() => setShowModal(true)}>
              Add
            </Menu.Item>
            <Menu.Item
              alignItems={"center"}
              onPress={() => removeData(itemContent.id)}
            >
              Delete
            </Menu.Item>
          </Menu>

          <Center flex={1} px="3">
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Reklamacje</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Title</FormControl.Label>
                    <Input
                      placeholder="Title"
                      onChangeText={(message) => setTitle(message)}
                    />
                  </FormControl>
                  <FormControl mt="1">
                    <FormControl.Label>Note Content</FormControl.Label>
                    <TextArea
                      placeholder="Note"
                      onChangeText={(message) => setDescription(message)}
                    ></TextArea>
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={1}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        handleAddTask();
                        setShowModal(false);
                      }}
                    >
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>

          <Center flex={1} px="3">
            <Modal isOpen={showNote} onClose={() => setShowNote(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>
                  <Text style={styles.itemText}>{itemContent.title}</Text>
                </Modal.Header>
                <Modal.Body>
                  <Text style={styles.itemText}>{itemContent.description}</Text>
                </Modal.Body>
              </Modal.Content>
            </Modal>
          </Center>
        </NativeBaseProvider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  itemText: {
    maxWidth: "80%",
  },
  NoteButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  addText: {},
});

export default Start;
