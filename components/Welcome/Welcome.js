import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./Welcome.style"
import Button from "../Button"
const Welcome = ({navigation}) =>
{ 
    const goToMemberSign = ()=>navigation.navigate('MemberSignScreen')
    return (
        <SafeAreaView style={styles.container}>
           
                <Text style={styles.header}>
                    Kebap Fitness Salonu
            </Text>
            <Image style={ styles.image } source={ require("../../assets/images/indir.png")} />
                <Button text="Giriş" onPress={goToMemberSign} />
        </SafeAreaView>
    )
}
export default Welcome;