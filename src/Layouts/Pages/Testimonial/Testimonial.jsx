import React, { Component } from "react";
import "./Testimonial.css";

import TestimonialSlider from "../../Components/TestimonialSlider/TestimonialSlider";

class Testimonial extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount = () => {
        // document.querySelector("button[data-direction='left']").className +=
        //     " fa-solid fa-less-than testimonial-left-btn";
        // document.querySelector("button[data-direction='right']").className +=
        //     " fa-solid fa-greater-than testimonial-right-btn";

        document.querySelector("button[data-direction='left']").className +=
            "  testimonial-left-btn";
        document.querySelector("button[data-direction='right']").className +=
            "  testimonial-right-btn";
        console.log(document.querySelector("button[data-direction='left']"));
    };

    render() {
        return (
            <div className="testimonial-container">
                <div className="testimonial-content">
                    <div className="testimonial-header">
                        <div className="testimonial-title">Setting The bar</div>
                        <div className="testimonial-sub-title">
                            Don't just take our word for it, listen to what our
                            Customers' have to say
                        </div>
                    </div>
                    <div className="testimonial-body">
                        <div className="testimonial-body-content">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;
