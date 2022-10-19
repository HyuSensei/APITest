import { Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

const Main = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getList();
   return () => {

   }
  }, []);
  const getList=()=>{

    return fetch('http://192.168.0.107/Follow_site/FollowList.php')
    .then((response) => response.json())
      .then((responseJson) => {
        setdata(responseJson);
        }
    ).catch((erro)=>{
      console.log('Erro', erro);
    }).finally(()=>{setisLoading(false)})
  }

  const renderItem = ({item, index}) => (
  <View>
    <Text style={{ color: 'white' }}>{item.id}</Text>
    <Text style={{ color: 'white' }}>{item.name}</Text>
    <Text style={{ color: 'white' }}>{item.color}</Text>
    <Text style={{ color: 'white' }}>{item.albumId}</Text>
  </View>
)
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        {isLoading ? <ActivityIndicator/>: (
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item =>`key-${item.id}`}
        />
        )}
      </View>
    );
  }
export default Main

