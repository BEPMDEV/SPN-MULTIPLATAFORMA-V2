import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Slot } from 'expo-router';

const MainContent: React.FC<{ height: number }> = ({ height }) => {
    const isMobile = Platform.OS === 'android';

    return (
        <ScrollView className='h-full bg-gray-950'>
            <View style={{ height: isMobile ? 'auto' : height - 80 }} className='mt-20 lg:m-0 px-4 py-3'>
                <Slot />
            </View>
        </ScrollView>
    );
};

export default MainContent;
