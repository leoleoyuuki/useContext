import { Avatar, Button, Icon, Image, ListItem, Text } from "@rneui/base";
import { FlatList } from "react-native";
import dadosUsuario from "../dados/dadosUsuario";

function getUsuarios({ item }) {
  return (
    <ListItem>
      <Avatar source={{ uri: item.fotoPerfil }} rounded size={60} />
      <ListItem.Content>
        <ListItem.Title>{item.nome}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>

      <ListItem.Content right style={{flexDirection:'row'}}>
        <Button 
            icon={<Icon name="delete" />} 
            type="clear" />
        <Button 
            icon={<Icon name="edit" />} 
            type="clear" />
      </ListItem.Content>
    </ListItem>
  );
}

export default (props) => {
  return (
    <>
      <Text>TELA LISTAGEM</Text>
      <FlatList data={dadosUsuario} renderItem={getUsuarios} />
    </>
  );
};
