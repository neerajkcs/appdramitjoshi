import * as React from "react";
import {StyleSheet, View, ScrollView, Image, Dimensions} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width - 40;

class HomeSlider extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectIndex: 0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({
                selectedIndex: 
                    prev.selectedIndex === this.props.images.length - 1 
                    ? 0 
                    : prev.selectedIndex + 1
            }),
            () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        }, 3000);
    }
    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }
    render() {
        const {images} = this.props;
        const {selectedIndex} = this.state;
        return (
            <View style={{width: DEVICE_WIDTH, height: 160, margin: 20, borderRadius: 6}}>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.slide}>
                        <Image source={require('../assets/images/slides/slide05_0.png')}
                            style={{resizeMode: 'cover', flex: 1, borderRadius: 6}}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/images/slides/slide01.png')}
                            style={{resizeMode: 'cover', flex: 1}}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/images/slides/slide03_0.png')}
                            styles={styles.slideImage}
                            resizeMode="cover"
                        />
                    </View> 
                    <View style={styles.slide}>
                        <Image source={require('../assets/images/slides/slide04.png')}
                            styles={styles.slideImage}
                            resizeMode="cover"
                        />
                    </View>
                    
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map(( image, i) => (
                        <View
                            key={image}
                            style={[
                                styles.whiteCircle,
                                {opacity: i === selectedIndex ? 0.5 : 1}
                            ]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        width: DEVICE_WIDTH,
        borderRadius: 6
    },
    slideImage: {
        height: '100%',
        width: DEVICE_WIDTH,
        backgroundColor: '#ff0000',
    },
    circleDiv: {
        position: 'absolute',
        bottom: -15,
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        left: 20,
        margin: 0,
        padding: 0
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#ffffff'
    }
});
export {HomeSlider};