import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import Input from "../input";
import Button from "../Button/Button";
const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [userSurname, setUserSurname] = useState();
  const [userAge, setUserAge] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userCity, setUserCity] = useState();
  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userEmail || !userCity) {
      Alert.alert("Alanları boş bırakamazsınız!");
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userEmail,
      userCity,
    };
    
    navigation.navigate('MemberGreetingScreen',{user});
    
  }
  return (
    <SafeAreaView>
      <Text>Member Sign</Text>
      <Input
        label="Üye Adı"
        placeholder="Üye Adı"
        inputMode="text"
        keyboardType="default"
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyad"
        placeholder="Üye  Soyad"
        inputMode="text"
        keyboardType="default"
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaş"
        placeholder="Üye Yaş"
        inputMode="numeric"
        keyboardType="number-pad"
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üye E-posta"
        inputMode="email"
        keyboardType="email-address"
        onChangeText={setUserEmail}
      />
      <Input
        label="Üye Memleket"
        placeholder="Üye Memleket"
        inputMode="text"
        keyboardType="default"
        onChangeText={setUserCity}
      />
      <Button text={"Kaydı Tamamla"} onPress={handleSubmit} />
    </SafeAreaView>
  );
};
export default MemberSign;
