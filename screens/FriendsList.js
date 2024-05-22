import React from 'react'; // Importing React library
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'; // Importing necessary components from 'react-native' library
import FeatherIcon from 'react-native-vector-icons/Feather'; // Importing FeatherIcon component from 'react-native-vector-icons/Feather' library
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'; // Importing custom fonts and 'useFonts' hook from '@expo-google-fonts/poppins' library

const FriendsList = ({ navigation }) => { // Defining functional component named 'FriendsList' which receives 'navigation' object as prop
    // Load custom fonts
    let [fontsLoaded] = useFonts({
        Poppins_700Bold
    });

    if (!fontsLoaded) { // Checking if fonts are not yet loaded
        return null; // If fonts are not loaded, return null to render nothing
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon name='arrow-left' size={20} style={styles.backIcon} />
                </TouchableOpacity>
                {/* Title */}
                <Text style={styles.title}>Friends</Text>
                {/* Placeholder for space */}
            </View>
            {/* Add Friends button */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Friends</Text>
            </TouchableOpacity>
            {/* Friends list */}
            <ScrollView style={styles.friendsList}>
                {/* Friend item */}
                <TouchableOpacity style={styles.friendItem}>
                    <FeatherIcon name='user' size={20} style={styles.friendIcon} />
                    <Text style={styles.friendName}>Friend Name 1</Text>
                </TouchableOpacity>
                {/* Friend item */}
                <TouchableOpacity style={styles.friendItem}>
                    <FeatherIcon name='user' size={20} style={styles.friendIcon} />
                    <Text style={styles.friendName}>Friend Name 2</Text>
                </TouchableOpacity>
                {/* Add more friend items as needed */}
            </ScrollView>
        </View>
    );
}

export default FriendsList; // Exporting the FriendsList component

const styles = StyleSheet.create({ // Creating styles object using StyleSheet.create
    container: { // Styles for the root container view
        flex: 1, // Taking full available space
        backgroundColor: '#202020', // Setting background color
    },
    header: { // Styles for header
        flexDirection: 'row', // Arranging items horizontally
        alignItems: 'center', // Aligning items vertically
        paddingHorizontal: 20, // Applying horizontal padding
        marginTop: 50, // Applying top margin
    },
    backIcon: { // Styles for back icon
        color: '#B2EED3', // Setting icon color
        marginRight: 10, // Applying right margin
    },
    title: { // Styles for title
        color: '#B2EED3', // Setting text color
        fontSize: 20, // Setting font size
        fontFamily: 'Poppins_700Bold', // Applying custom font family
    },
    addButton: { // Styles for add friends button
        backgroundColor: '#1ED760', // Setting background color
        width: 171,
        height: 50,
        paddingHorizontal: 20, // Applying horizontal padding
        paddingVertical: 10, // Applying vertical padding
        borderRadius: 5, // Applying border radius
        marginHorizontal: 20, // Applying horizontal margin
        marginTop: 20, // Applying top margin
        top: 93, // Set top to 93px
        left: 20, // Set left to 20px
        alignItems: 'center', // Aligning items horizontally
    },
    addButtonText: { // Styles for add friends button text
        color: '#000', // Setting text color
        fontFamily: 'Poppins_700Bold', // Applying custom font family
    },
    friendsList: { // Styles for friends list
        marginTop: 20, // Applying top margin
        paddingHorizontal: 20, // Applying horizontal padding
    },
    friendItem: { // Styles for friend item
        flexDirection: 'row', // Arranging items horizontally
        alignItems: 'center', // Aligning items vertically
        marginBottom: 10, // Applying bottom margin
        width: 335, 
        height: 50, 
        position: 'absolute', 
        top: 159, 
        left: 20,

    },
    friendIcon: { // Styles for friend icon
        color: '#B2EED3', // Setting icon color
        marginRight: 10, // Applying right margin
    },
    friendName: { // Styles for friend name
        color: '#B2EED3', // Setting text color
        fontFamily: 'Poppins_700Bold', // Applying custom font family
    },
});

