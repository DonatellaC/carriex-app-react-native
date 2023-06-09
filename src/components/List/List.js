import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "../Icons/Icons";
import styles from "./styles";

const List = ({
  header,
  carrierId,
  carrierName,
  date,
  hasBorderBottom,
  onPress,
  itemsText,
  numbersOfCarriers,
  numbersOfItems,
  deliveryStatus,
  icon,
  firstIcon,
  secondIcon,
}) => {
  return (
    <View style={[styles.wrapper, hasBorderBottom && styles.borderBottom]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.header}>{header}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.icons}>
            {icon && <Icons firstIcon={firstIcon} secondIcon={secondIcon} />}
          </View>
          <View style={styles.carrierName}>
            {carrierId && (
              <Text style={[styles.idText, styles.carrierId]}>{carrierId}</Text>
            )}
            <View style={styles.currierNameStatusWrapper}>
              {carrierName && (
                <Text style={[styles.idText, styles.carrierName]}>
                  {carrierName}
                </Text>
              )}
              <View style={styles.infoRight}>
                {deliveryStatus && (
                  <Text
                    style={[
                      styles.idText,
                      styles.deliveryStatus,
                      deliveryStatus === "Delivered"
                        ? styles.deliveredStatus
                        : styles.deliveryStatus,
                    ]}
                  >
                    {deliveryStatus}
                  </Text>
                )}
              </View>
            </View>
            {numbersOfItems && (
              <Text style={styles.numbersOfItems}>{numbersOfItems}</Text>
            )}
          </View>
        </View>

        <View style={styles.infoRight}>
          {numbersOfCarriers && (
            <Text style={styles.infoText}>{numbersOfCarriers}</Text>
          )}
          {date && <Text style={styles.infoTextDate}>{date}</Text>}
        </View>

        {itemsText && (
          <View style={styles.info}>
            <Text style={styles.items}>{itemsText}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default List;
