import React from "react";
import { View, TouchableOpacity } from "react-native";
import CargoTruck from "../../utilities/cargoTruck";
import Rectangle from "../../utilities/rectangle";
import styles from "./styles";

const Icons = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.iconsWrapper}>
            <View style={styles.firstIcon}>
              <Rectangle style={styles.iconRectangle} />
            </View>

            <View style={styles.secondIcon}>
              <CargoTruck style={styles.iconCargo} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Icons;
