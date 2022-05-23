import React, { Component } from "react";
import Testimony from "../Testimony/Testimony";
import { Carousel } from "@trendyol-js/react-carousel";

class TestimonialSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonyDetails: [
                {
                    name: "Harpreet Singh",
                    image: "https://cdn.shopify.com/s/files/1/0477/0345/7956/files/withoutlogo3_1_180x.jpg?v=1613127251%20180w%20180h,%20//cdn.shopify.com/s/files/1/0477/0345/7956/files/withoutlogo3_1.jpg?v=1613127251%20200w%20200h",
                    description:
                        "My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back.",
                },
                {
                    name: "Sachin D'souza",
                    image: "https://cdn.shopify.com/s/files/1/0477/0345/7956/files/1_180x.jpg?v=1613127309%20180w%20180h,%20//cdn.shopify.com/s/files/1/0477/0345/7956/files/1.jpg?v=1613127309%20200w%20200h",
                    description:
                        "I am so thankful to GHC for helping me with my struggle with Erectile Dysfunction in a cost effective and discrete manner. ",
                },
                {
                    name: "Shiva",
                    image: "https://cdn.shopify.com/s/files/1/0477/0345/7956/files/20210102_152952_180x.jpg?v=1613127201%20180w%20180h,%20//cdn.shopify.com/s/files/1/0477/0345/7956/files/20210102_152952.jpg?v=1613127201%20200w%20200h",
                    description:
                        "It fits right in with my daily routine. No extra time washing hair or adding products throughout the day. Everything is sent to your door at the perfect time and results have been great at just 2 months in!",
                },
                {
                    name: "Rachit Gupta",
                    image: "https://cdn.shopify.com/s/files/1/0477/0345/7956/files/WhatsApp_Image_2021-02-05_at_6.29.12_PM_2_180x.jpg?v=1613127426%20180w%20180h,%20//cdn.shopify.com/s/files/1/0477/0345/7956/files/WhatsApp_Image_2021-02-05_at_6.29.12_PM_2.jpg?v=1613127426%20200w%20200h",
                    description:
                        "My hair loss is genetics so now I just have to maintain my regrowth. Right now, I am on the hair maintenance kit which includes a serum, oil and shampoo. I am so happy with the results.",
                },
                {
                    name: "Harsh Sharma",
                    image: "https://cdn.shopify.com/s/files/1/0477/0345/7956/files/shampoo_IMG_23821612169958133_4_180x.jpg?v=1613127442%20180w%20180h,%20//cdn.shopify.com/s/files/1/0477/0345/7956/files/shampoo_IMG_23821612169958133_4.jpg?v=1613127442%20200w%20200h",
                    description:
                        "What an amazing change in my hair. I had a lot of hair fall 6 months ago, after I used GHC products my hair fall problems have become much better. I have been using a Hair regrowth kit  for 2 months and the kit has really done wonders for me overall.",
                },
            ],
        };
    }

    render() {
        return (
            <Carousel
                show={window.screen.width > 820 ? 3 : 1.25}
                slide={1}
                swiping={true}
                useArrowKeys={false}
                responsive={false}
                transition={0.5}
                swipeOn={0.2}
            >
                {this.state.testimonyDetails.map((item, index) => {
                    return (
                        <Testimony
                            key={index}
                            description={item.description}
                            name={item.name}
                            image={item.image}
                        />
                    );
                })}
            </Carousel>
        );
    }
}

export default TestimonialSlider;
