import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {mockItemData1} from "../constants/mockItemData";
import {ColorsVar} from "../constants/ColorsVar";

const ModalWindow = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[ styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Image style={styles.imageRedHeart} source={mockItemData1.redHeart}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 0.5,
        marginTop: 1,
        marginRight:-50,
    },
    modalView: {
        flex:1,
        backgroundColor: ColorsVar.whiteColor,
        borderRadius: 3,
       marginHorizontal:5,
        alignItems: 'center',
        justifyContent:'center',
        shadowColor: ColorsVar.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
         borderRadius: 3,
         padding: 10,
         elevation: 2,
    },
    buttonOpen: {

    },
    buttonClose: {
        backgroundColor:ColorsVar.borderColor,
    },
    textStyle: {
        fontSize:15,
        color: ColorsVar.whiteColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    imageRedHeart: {
        width:40,
        height:40,
    },
});

export default ModalWindow;