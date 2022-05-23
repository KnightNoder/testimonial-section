import React, { Component } from "react";
import "./Testimony.css";

import { AiFillStar } from "react-icons/ai";

class Testimony extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="testimonial-all">
                <div className="testimonial-single">
                    <div className="single-card">
                        <div className="testimony-img">
                            <img src={this.props.image} alt="testimony" />
                        </div>
                        <div className="testimony-name">{this.props.name}</div>
                        <div className="testimony-stars">
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                        </div>
                        <div className="testimony-icon">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0477/0345/7956/files/Vector_7.png?v=1652879662"
                                alt="coma icon"
                            />
                        </div>
                        <div className="testimony-statement">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimony;
