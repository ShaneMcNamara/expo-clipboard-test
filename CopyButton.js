import React, { useCallback } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';

export default ({
  text,
  iconProps = {},
}) => {
  const onPress = useCallback(() => {
    Clipboard.setString(text);
  },[text]);
  if (!text) return null;
  return (
    <Pressable onPress={onPress} hitSlop={20} style={styles.container}>
      <AntDesign name='copy1' size={14} color='black' {...iconProps}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  }
});
