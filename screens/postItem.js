import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostItem extends React.Component {

    state = {
        hiFiveButtonColor: '#FFFFFF',
        isPlaying: false,
        cancelButtonColor: '#FFFFFF'
    }


    
    togglePlayPause = () => {
        this.setState(prevState => ({ isPlaying: !prevState.isPlaying }));

        if (!this.state.isPlaying) {
            console.log('play button pressed');
        } else {
            console.log('pause button pressed');
        }
    };

    toggleCancel = () => {
        const { hiFiveButtonColor } = this.state;

        if (hiFiveButtonColor === '#B2EED3') {
            this.setState({ cancelButtonColor: '#FF5733', hiFiveButtonColor: '#FFFFFF' });
        } else {
            const newColor = this.state.cancelButtonColor === '#FFFFFF' ? '#FF5733' : '#FFFFFF';
            this.setState({ cancelButtonColor: newColor });
        }

        if (this.state.cancelButtonColor === '#FFFFFF') {
            console.log('Close button color changed to white');
        } else {
            console.log('Close button color changed to red');
        }
    };


    handClick = () => {
        const newColor = this.state.hiFiveButtonColor === '#FFFFFF' ? '#B2EED3' : '#FFFFFF';
        this.setState({ hiFiveButtonColor: newColor });

        if (this.state.cancelButtonColor === '#FF5733') {
            this.setState({ cancelButtonColor: '#FFFFFF' });
            console.log('Close button color changed to white');
        }

        if (newColor === '#FFFFFF') {
            console.log('Hi-Five button pressed (white)');
        } else {
            console.log('Hi-Five button pressed (teal)');
        }
    };

    render() {
        const { profilePic, username, songCover, songTitle, songArtist } = this.props;

        return (
            <View>
                <View style={styles.user_info}>
                    <Image
                        style={styles.profile_pic}
                        source={profilePic}
                    />
                    <Text style={styles.username}>{username}</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.song_cover}
                        source={songCover}
                    />
                    <Text style={styles.song_title}>{songTitle}</Text>
                    <Text style={styles.song_artist}>{songArtist}</Text>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={this.toggleCancel}>
                            <Icon name='close' size={40} color={this.state.cancelButtonColor} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.playButtonContainer}
                            onPress={this.togglePlayPause}
                            >
                            <Icon name={this.state.isPlaying ? 'pause' : 'play'} size={50} color='#FFFFFF' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.handClick}
                            >
                            <Icon name='hand-right' size={30} color={this.state.hiFiveButtonColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: '#323232',
        opacity: 100,
        paddingVertical: 25,
        paddingHorizontal: 35,
        width: 340,
        height: 450,
        borderRadius: 15,
        marginBottom: 15
    },
    user_info: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 15
    },

    profile_pic: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        marginRight: 7.5
    },

    username: {
        fontSize: 15,
        color: '#FFFFFF'
    },

    song_cover: {
        width: 275,
        height: 275,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: "center"
    },

    song_artist: {
        fontSize: 11,
        color: '#FFFFFF'
    },

    song_title: {
        fontSize: 18,
        color: '#FFFFFF'
    },

    playButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
    }
});