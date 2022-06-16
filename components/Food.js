import { Image, Text, ScrollView, SafeAreaView } from "react-native"
import styles from '../assets/styling/styles'

const Food = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textParagraphHeader}>Coming soon!</Text>
        <Image source={require('../assets/images/catfeeder.png')} style={styles.image}/>
        <Text style={styles.textParagraphDefault}>Be on the lookout for the Eira remote feeding robot!</Text>
        <Text style={styles.textParagraphHeader}>Kitten food</Text>
        <Image source={require('../assets/images/foodKitten.jpeg')} style={styles.image}/>
        <Text style={styles.textParagraphDefault}>The first year we tried a lot of different types of food. Eira is a picky eater and her favorite food was whiskas meaty selection.</Text>
        <Text style={styles.textParagraphHeader}>No kitten no more!</Text>
        <Image source={require('../assets/images/foodLatz.jpeg')} style={styles.image}/>
        <Text style={styles.textParagraphDefault}>After Eira turned 1-years old, her new favorite food is the Latz tasty shreds farm selection.</Text>
        <Text style={styles.textParagraphHeader}>Home cooked</Text>
        <Image source={require('../assets/images/foodTorsk.webp')} style={styles.image}/>
        <Text style={styles.textParagraphDefault}>Her favorite home cooked food is cod fillet.</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Food;