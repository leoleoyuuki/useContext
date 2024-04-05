import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon, Text } from "@rneui/base";
import TelaFormulario from "./src/telas/TelaFormulario";
import TelaLista from "./src/telas/TelaLista";
import { UsuarioProvider } from "./src/context/UsuarioContext";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <UsuarioProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName="TelaList"
          screenOptions={{
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        >
          <Screen
            name="TelaList"
            component={TelaLista}
            options={({ navigation }) => {
              return {
                title: "Tela Listagem",
                headerRight: () => (
                  <Button
                    type="clear"
                    icon={<Icon name="add" color="white" size={30} />}
                    onPress={() => navigation.navigate("TelaForm")}
                  />
                ),
              };
            }}
          />

          <Screen
            name="TelaForm"
            component={TelaFormulario}
            options={{ title: "TELA FORMULÁRIO" }}
          />
        </Navigator>
      </NavigationContainer>
    </UsuarioProvider>
  );
}
