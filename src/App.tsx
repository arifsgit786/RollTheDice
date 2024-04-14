import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
  View,
  Pressable,
} from 'react-native';


import DiceOne from '../Assets/One.png'
import DiceTwo from '../Assets/Two.png'
import DiceThree from '../Assets/Three.png'
import DiceFour from '../Assets/Four.png'
import DiceFive from '../Assets/Five.png'
import DiceSix from '../Assets/Six.png'



type DiceProps = PropsWithChildren <{
  imageUrl: ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps): React.JSX.Element=> {
  return (
    <View>
      <Image style = {styles.diceImg} source= {imageUrl}/>
    </View>
  )

}







function App(): React.JSX.Element {
  let [diceImage , setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rollDice = ()=> {
    let randomNumber = Math.floor(Math.random()*6)+1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <View style ={styles.diceContainer}>
        <Pressable onPress={rollDice}>
          <Text style ={styles.diceButtonTxt}>Roll Dice</Text>
        </Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  diceImg: {
    width : 200,
    height:200
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#3281a8'
  },
  diceContainer:{
    margin: 12,
  },
  diceButtonTxt:{
    paddingVertical : 10,
    paddingHorizontal: 40,
    borderWidth:2,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    textTransform:'uppercase'
  }


 
});

export default App;
