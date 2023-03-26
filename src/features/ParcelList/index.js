import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";
import { lists } from "../../utilities/lists";
import styles from "./styles";

export default function ParcelList({}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <View style={[styles.container, isModalOpen && styles.modalOpenContainer]}>
      <View>
        {lists.map((list, index) => (
          <List
            key={index}
            header={list.header}
            numbersOfCarriers={`${list.carriers.count} carriers will pick up the parcel ${list.pickUpDate}`}
            date={list.date}
            itemsText={`${list.items} items`}
            hasBorderBottom={index !== lists.length - 1}
            onPress={() => {
              navigation.navigate("Parcel Details", { list: list });
            }}
          />
        ))}
        {!isModalOpen && (
          <TouchableOpacity>
            <Button shape="round" text="+" onPress={handleModalOpen} />
          </TouchableOpacity>
        )}
      </View>
      {isModalOpen && <View style={styles.overlay} />}
      {isModalOpen && (
        <Modal
          title="Parcel and carrier information"
          textButton="ADD"
          primaryLabel="ID"
          secondaryLabel="Carrier ID"
          onClose={() => setIsModalOpen(false)}
          onAdd={(data) => {
            console.log(data);
          }}
        />
      )}
    </View>
  );
}
