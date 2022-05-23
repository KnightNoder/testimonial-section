import React, { Component } from "react";
import "./TestimonialSlider.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Testimony from "../Testimony/Testimony";
import { Carousel } from "@trendyol-js/react-carousel";
// import Carousel from "carousel-react-rcdev";

class TestimonialSlider extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Carousel
                show={window.screen.width >= 480 ? 3 : 1}
                slide={1}
                swiping={true}
                useArrowKeys={false}
                responsive={false}
            >
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <Testimony
                    description="My 3-year marriage was going down the drain, you guys have done me a huge favour for making this sensitive topic comfortable and providing great support I needed. This literally saved my marriage and the spark is back."
                    name="Harpreet Singh"
                    image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
            </Carousel>
        );
    }
}

export default TestimonialSlider;
