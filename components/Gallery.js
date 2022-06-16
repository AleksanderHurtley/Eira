import { TouchableOpacity, View, Text, Image, FlatList, Dimensions} from "react-native"
import { useState, useRef } from "react"
import styles from "../assets/styling/styles";
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carousel, {Pagination} from 'react-native-snap-carousel';


const IMAGES = {
    image1: require('../assets/images/gallery/eiraTryne.jpg'),
    image2: require('../assets/images/gallery/eiraLedning.jpg'),
    image3: require('../assets/images/gallery/eiraGarden.jpg'),
    image4: require('../assets/images/gallery/eiraSleep1.jpg'),
    image5: require('../assets/images/gallery/eiraSleep2.jpg'),
    image6: require('../assets/images/gallery/eiraSleep4.jpg'),
    image7: require('../assets/images/gallery/eiraAdventure.jpg'),
    image8: require('../assets/images/gallery/eiraAdventure.jpg'),
}

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const Gallery = () => {
  console.log(Dimensions.get('window'))
  const carouselRef = useRef();
  const flatListRef = useRef();

  const [images] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
    { id: '7', image: IMAGES.image7 }
  ]);

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);

    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true
    });
  };

  const onTouchThumbnail = touched => {
    if (touched === indexSelected) return;
  
    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View style={styles.galleryBackground}>
      <Text style={styles.galleryHeader}>Gallery</Text>     
      <View style={styles.carousel}>
        <Carousel
          ref={carouselRef}
          layout='default'
          data={images}
          sliderWidth={width}
          itemWidth={width}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              style={{ width: '100%', height: '100%' }}
              resizeMode='center'
              source={item.image}
            />
          )}
          onSnapToItem={index => onSelect(index)}
        />
      </View>
      <View>
        <Pagination
          inactiveDotColor='gray'
          dotColor={'orange'}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={images}
        style={{ position: 'absolute', bottom: 80 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SPACING
        }}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
          activeOpacity={0.9}
          onPress={() => onTouchThumbnail(index)}
          >
            <Image
              style={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                marginRight: SPACING,
                borderRadius: 16,
                borderWidth: index === indexSelected ? 4 : 0.75,
                borderColor: index === indexSelected ? 'orange' : 'white'
              }}
              source={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Gallery;