import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Slot } from 'expo-router';
import { Colors } from '@/constants/Colors';

const MainContent: React.FC<{ height: number }> = ({ height }) => {
    const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

    return (
        <ScrollView style={{ backgroundColor: Colors.backgroundColor }} className='h-full'>
            <View style={{ height: isMobile ? 'auto' : height - 80 }} className='mt-20 lg:m-0 px-4 py-3'>
                <Slot />
            </View>
        </ScrollView>
    );
};

export default MainContent;
