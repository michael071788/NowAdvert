import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card } from "react-native-paper";
import { scrollInterpolator, animatedStyles } from "../../../utils/animations";
import UsedTheme from "../../../infrastucture/theme/use.theme";
// import Carousel from "../../../components/carousel.component";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const slideHeight = viewportHeight * 0.77;
const slideWidth = winPix(86);
const itemHorizontalMargin = winPix(3);
const itemVerticalMargin = winPix(5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

function winPix(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const _renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Card style={styles.slideInner}>
        <Image style={styles.image} source={{ uri: item.imageURI }} />
      </Card>
    </View>
  );
};

export const AdvertScreen = () => {
  const theme = UsedTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.BACKGROUND,
      }}
    >
      <Carousel
        data={ENTRIES1}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        sliderHeight={slideHeight}
        itemWidth={itemWidth}
        itemHeight={slideHeight}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        // onSnapToItem={(index) => this.setState({ index })}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        vertical={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 1,
  },
  slide: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingVertical: itemVerticalMargin,
    // backgroundColor: "dodgerblue",
  },
  slideInner: {
    //backgroundColor: "#6e7cf5",
    flex: 1,
    borderRadius: 10,
    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
});

const ENTRIES1 = [
  {
    id: 1,
    imageURI:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  },
  {
    id: 2,
    imageURI:
      "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
  },
  {
    id: 3,
    imageURI:
      "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
  },
  {
    id: 4,
    imageURI:
      "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
  },
  {
    id: 5,
    imageURI:
      "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
  },
];
