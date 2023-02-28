import React, { Component } from "react";
import Testimony from "../Testimony/Testimony";
import { Carousel } from "@trendyol-js/react-carousel";

class TestimonialSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonyDetails: [
                {
                    name: "Brian Williams",
                    image: "https://cdn.shopify.com/s/files/1/0632/5439/7077/files/dandruff_hairloss.png?v=1674040639",
                    label:"dandrufF AND HAIRLOSS",
                    description:
                        "Effective hair regrowth treatment, noticeable results within a month of use. Happy with the product and will continue to use it for continued hair growth.",
                },
                {
                    name: "Jason Smith",
                    image: "https://cdn.shopify.com/s/files/1/0632/5439/7077/files/receding_hair_line.png?v=1674040639",
                    label:"Receeding hair line",
                    description:
                        "I was suffering from androgenetic alopecia & was looking for solutions to maintain hair regrowth. I started with a package of proven hair growth products from Mars consisting of hair serum, hair oil & anti-hairfall shampoo. I am so happy with the results.",
                },
                {
                    name: "Ryan Keith",
                    image: "https://cdn.shopify.com/s/files/1/0632/5439/7077/files/male_pattern-baldness.png?v=1674040639",
                    label:"Male pattern baldness",
                    description:
                        "Mars performance boosters are a godsend for men who have similar problems like mine. I can now effectively treat erectile dysfunction & save my marriage. Extremely thankful to Mars for bringing up this sensitive topic & providing the support we need.",
                },
                {
                    name: "Alan Miller",
                    image: "https://cdn.shopify.com/s/files/1/0632/5439/7077/files/male_pattern-baldness-2.png?v=1674040639",
                    label:"Male pattern baldness",
                    description:
                        "Great company with great customer service! Products are made to last. I have been using the beard growth oil for the past 3 months now & it works like a charm.",
                },
                {
                    name: "Kevin Jhonson",
                    image: "https://cdn.shopify.com/s/files/1/0632/5439/7077/files/receding_hair_line-2.png?v=1674040639",
                    label:"Receeding hair line",
                    description:
                        "I have to say that Mars wellness supplements have been a lifesaver! I have RA & my joints were always achy and painful. But since I've been taking the supplements my joints have been feeling a lot better. I would highly recommend them to anyone with joint pain.",
                },
            ],
        };
    }

    render() {
        return (
            <Carousel
                show={
                    window.screen.width >= 2000
                        ? 4
                        : window.screen.width >= 1000
                        ? 3
                        : window.screen.width >= 820
                        ? 2
                        : window.screen.width >= 768
                        ? 1.5
                        : 1.25
                }
                slide={1}
                swiping={true}
                responsive={true}
                swipeOn={0.2}
                className="testimonial-react-carousel"
            >
                {this.state.testimonyDetails.map((item, index) => {
                    return (
                        <Testimony
                            key={index}
                            description={item.description}
                            name={item.name}
                            image={item.image}
                            label={item.label}
                        />
                    );
                })}
            </Carousel>
        );
    }
}

export default TestimonialSlider;
