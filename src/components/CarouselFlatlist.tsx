import React, {useState, useEffect, createContext, useContext} from 'react';
import {
    View,
    Text,
    Image,
    ImageProps,
    StyleSheet,
    FlatList,
    Dimensions,
    ListRenderItem,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import ShareLink from "./Share";

type IndexContextType = number ;

const IndexContext = createContext<IndexContextType>(0);

type ImageItemProps = {image:ImageProps['source']};

const ImageItem = ({image}:ImageItemProps) => (
    <View style={styles.container} >
        <Image style={styles.image} source={image} resizeMode="cover"/>
    </View>
);

const width = Dimensions.get('window').width;

const images = [
    {id:"1",image:require('../images/Pizza1.png')},
    {id:"2",image:require('../images/Pizza2.png')},
    {id:"3",image:require('../images/Pizza3.png')},
    {id:"4",image:require('../images/Pizza4.png')},
    {id:"5",image:require('../images/Pizza5.png')},
    {id:"6",image:require('../images/Pizza6.png')},
];

const nextImages = [
    {id:"7",image:require('../images/Pizza1.png')},
    {id:"8",image:require('../images/Pizza2.png')},
    {id:"9",image:require('../images/Pizza3.png')},
    {id:"10",image:require('../images/Pizza4.png')},
    {id:"11",image:require('../images/Pizza5.png')},
    {id:"12",image:require('../images/Pizza6.png')},
];

const CarouselFlatList: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState<IndexContextType>(0);
    const [refreshing, setRefreshing] = React.useState(false);
    const [currentData, setCurrentData] = useState(images);

    const renderItem: ListRenderItem<{
        id:string;
        image:ImageProps['source'];
    }> = ({item}) => {
        return (
        <View>
            <Text style={{textAlign: "center"}}>Pizza {currentIndex + 1} ({item.id})</Text>
            <ImageItem image={(+item.id === currentIndex +1) ? item.image :currentData[currentIndex]?.image }/>
            <ShareLink link={item.image}/>
        </View>
    )}

    const renderPagination = () => {
        return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {images.map((_, index) => (
                <Svg key={index} height="10" width="10" style={{ marginHorizontal: 5 }}>
                    <Circle
                        cx="5"
                        cy="5"
                        r="5"
                        fill={index === currentIndex ? 'black' : 'gray'}
                    />
                </Svg>
            ))}
        </View>
    );}

    const onRefresh = React.useCallback(():void => {
        const imagesCopy = [...images];
        const nextImagesCopy = [...nextImages];
        setRefreshing(true);
        if(currentData[0].id === "1") {
            setTimeout(():void => {
                setCurrentData(nextImagesCopy);
                setRefreshing(false);
            },5000);
        }else {
            setTimeout(():void => {
                setCurrentData(imagesCopy);
                setRefreshing(false);
            },5000);
        }
        },[]);
    const ref = React.useRef<FlatList>(null);

    useEffect(() => {
        const autoScrollTimer = setInterval(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 5000);

        return () => clearInterval(autoScrollTimer);
    }, [currentIndex]);

    let numberCalls = 0;
    const addNewData = () => {
        const imagesCopy = [...images];
        const nextImagesCopy = [...nextImages];
        if(numberCalls < nextImages.length) {
            currentData.pop();
            currentData.push(nextImagesCopy[numberCalls]);
        }
            numberCalls += 1;
    };

    return (
        <IndexContext.Provider value={currentIndex} >
        <View style={styles.window} >
            <FlatList
                ref={ref}
                data={currentData}
                index={currentIndex}
                renderItem={renderItem}
                horizontal={true}
                pagingEnabled={true}
                onRefresh={onRefresh}
                refreshing={refreshing}
                showsHorizontalScrollIndicator={false}
                onEndReached={addNewData}
                onScroll={(e):void =>{}}
            />
            {renderPagination()}
        </View>
        </IndexContext.Provider>
        );
};
const styles = StyleSheet.create({
    safeAreaView: {
        flex:1,
    },
    window: {
        gap:20,
    },
    container: {
        paddingHorizontal:24,
        alignItems:'center',
    },
    image: {
        width:width-48,
        height:400,
    },

})
export {CarouselFlatList};