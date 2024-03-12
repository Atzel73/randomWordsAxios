import React from "react";
import { Image } from "react-native";



export const getImg = () => {
    return(
        <Image
            source={{uri: 'asset:/app_icon.png'}}
            style={{width: 40, height: 40}}
        />
    );
}