import { Avatar, Image, ListItem, Text } from "@rneui/base";
import { FlatList } from "react-native";
import dadosUsuario from "../dados/dadosUsuario";

function getUsuarios({ item }) {
  return(
     <ListItem>
        <Avatar  />
     </ListItem>
  )
}

export default (props) => {
  return (
    <>
      <Text>TELA LISTAGEM</Text>
      <FlatList data={dadosUsuario} renderItem={getUsuarios} />
    </>
  );
};
