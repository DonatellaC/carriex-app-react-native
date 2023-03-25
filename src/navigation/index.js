import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ParcelList from "../screens/ParcelList";
import CarrierParcelList from "../screens/CarrierParcelList";
import DriverInformation from "../screens/DriverInformation";
import ParcelDetails from "../screens/ParcelDetails";
import ParcelListAddition from "../screens/ParcelListAddition";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"ParcelList"}>
        <Stack.Screen name="Parcel List" component={ParcelList} />
        <Stack.Screen
          name="Carrier Parcel List"
          component={CarrierParcelList}
        />
        <Stack.Screen name="Driver Information" component={DriverInformation} />
        <Stack.Screen name="Parcel Details" component={ParcelDetails} />
        <Stack.Screen
          name="Parcel List Addition"
          component={ParcelListAddition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
