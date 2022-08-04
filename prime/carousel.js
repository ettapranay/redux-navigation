import React from 'react';
import { View, Text,Image,Dimensions,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const {width}=Dimensions.get("window");
const height = width * 0.6
const images=[
  'data:image/jpeg;base64,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',
  'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/700/600700-h',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzlSbC49aZT8zzucS5oYeDpQj6L4ONTV05nyVKSBrkYpBlRc1WSxesAPIUEU51-ltfKY&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfd0LASl4rWCJ6Gd4oVxeKhLe2j0yQ1449nbsIrgnY7CQWdievW2aoJII3rWEIsgRyZSc&usqp=CAU',
  'data:image/jpeg;base64,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'
]
function Carousel() { 
    return (
    
      <View style={{ marginTop: 50, width,height}}>
       <ScrollView pagingEnabled horizontal style={{width, height}}>
        {
          images.map((image , index) => (
            <Image 
            key={index}
            source={{ uri:image}}
            style={{ width,height,resizeMode:'cover'}}/>

          ))
  }
          
          
       </ScrollView>
        <View style={styles.view}>
      <Text style={styles.text}>                              ⬤      ⬤      ⬤     ⬤    ⬤</Text>
      </View>
      </View>  
)
}
const styles = StyleSheet.create({
text:{color:'white'
},
view:{
  flexDirection:'row',
  position:'absolute',
  bottom:0
}
})
export default Carousel;