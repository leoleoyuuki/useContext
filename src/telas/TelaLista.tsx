import { Avatar, Button, Icon, ListItem, Text } from "@rneui/base";
import { Alert, FlatList, View } from "react-native";
// import dadosUsuario from "../dados/dadosUsuario";
import { useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";

export default (props) => {
  const { state } = useContext(UsuarioContext);
  const dadosUsuario = state.dadosUsuario;
  console.log(state.dadosUsuario);

  function getUsuarios({ item }) {
    return (
      <ListItem>
        <Avatar source={{ uri: item.fotoPerfil }} rounded size={60} />
        <ListItem.Content>
          <ListItem.Title>{item.nome}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content right style={{ flexDirection: "row" }}>
          <Button
            icon={<Icon name="edit" />}
            type="clear"
            onPress={() => props.navigation.navigate("TelaForm", item)}
          />
          <Button
            icon={<Icon name="delete" />}
            type="clear"
            onPress={() =>
              Alert.alert("EXCLUIR REGISTRO", "Deseja excluir?", [
                {
                  text: "SIM",
                  onPress() {
                    alert("USUARIO DELETADO - ID:" + item.id);
                  },
                },
                {
                  text: "NÃO",
                  onPress() {
                    alert("USUARIO NAO DELETADO");
                  },
                },
              ])
            }
          />
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <Text>TELA LISTAGEM</Text>
      <FlatList data={dadosUsuario} renderItem={getUsuarios} />
    </View>
  );
};
