import React from "react";
import { Image } from "react-native";



export const getImg = () => {
    return(
        <Image
            source={{uri: 'https://i.pinimg.com/564x/4c/9e/eb/4c9eeba3088dff9d33c2082252206929.jpg'}}
            style={{width: 40, height: 40, alignSelf: 'center'}}
        />
    );
}