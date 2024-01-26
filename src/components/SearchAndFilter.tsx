import React, { useState } from 'react';
import {View, TextInput, Button, FlatList, Text, StyleSheet, Modal, ScrollView,Pressable} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {ProductCard} from "./ProductCard";
import {data} from "../constants/mockItemData";
import ModalWindow from "./Modal";
import {ColorsVar} from "../constants/ColorsVar";

const SearchAndFilter = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [filteredData, setFilteredData] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [selectedProperties, setSelectedProperties] = useState({
        property1: false,
        property2: false,
        property3: false,
        property4: false,
    });

    const handleSearch = () => {
        const filtered = data.filter(item => {
            return (
                item.name.includes(searchQuery) &&
                (selectedProperties.property1 ? item.property1 : true) &&
                (selectedProperties.property2 ? item.property2 : true) &&
                (selectedProperties.property3 ? item.property3 : true) &&
                (selectedProperties.property4 ? item.property4 : true)
            );
        });
        setFilteredData(filtered);
    };

    const handleToggleProperty = (property) => {
        setSelectedProperties(prevState => ({
            ...prevState,
            [property]: !prevState[property],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the text to search"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <ModalWindow />
                <Button title="&#x1F50D;" onPress={handleSearch} />
            </View>
            <Pressable
                onPress={() => {setShowModal(true);}}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? ColorsVar.buttonColor : ColorsVar.buttonPressed,
                    },
                    styles.wrapperCustom,
                ]}>
                {({pressed}) => (
                    <Text style={styles.text}>{pressed ? 'Pressed!' : "Select filtering options"}</Text>
                )}
            </Pressable>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ScrollView>
                        <View style={styles.itemContainer}>
                            <ProductCard mockItemData={item.mockItemData}/>
                        </View>
                    </ScrollView>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Select filtering options:</Text>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => {handleToggleProperty('property1');
                                    setChecked1(!checked1);}}
                            />
                            {(!checked1) ? <Text>New price less 35 uah</Text>:<Text style={{color:ColorsVar.selectedText}}>New price less 35 uah</Text>}
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {handleToggleProperty('property2');
                                    setChecked2(!checked2);
                                }}
                            />
                            {(!checked2) ? <Text>Old price more 55 uah</Text>:<Text style={{color:ColorsVar.selectedText}}>Old price more 55 uah</Text>}
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => {handleToggleProperty('property3');
                                    setChecked3(!checked3);
                                }}
                            />
                            {(!checked3) ?<Text>New product</Text>:<Text style={{color:ColorsVar.selectedText}}>New product</Text>}
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={checked4 ? 'checked' : 'unchecked'}
                                onPress={() => {handleToggleProperty('property4');
                                    setChecked4(!checked4);
                                }}
                            />
                            {(!checked4) ? <Text>For vegetarians</Text>:<Text style={{color:ColorsVar.selectedText}}>For vegetarians</Text>}
                        </View>
                        <Pressable
                            onPress={() => {setShowModal(false); handleSearch();}}
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? ColorsVar.buttonColor : ColorsVar.buttonPressed,
                                },
                                styles.wrapperCustom,
                            ]}>
                            {({pressed}) => (
                                <Text style={styles.text}>{pressed ? 'Pressed!' : "To apply"}</Text>
                            )}
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        marginRight:20,
        gap:20,
    },
    wrapperCustom: {
        padding:12,
        marginHorizontal:28,
        borderRadius:8,
        borderWidth:1,
    },
    text: {
        textAlign:"center",
    },
    input: {
        flex: 1,
        marginHorizontal: 8,
        borderWidth: 1,
        padding: 8,
    },
    itemContainer: {

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: ColorsVar.whiteColor,
        padding: 16,
        borderRadius: 8,
        elevation: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
});

export {SearchAndFilter};
