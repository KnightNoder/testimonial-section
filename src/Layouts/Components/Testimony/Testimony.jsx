import React, { Component } from "react";
import "./Testimony.css";

import { AiFillStar } from "react-icons/ai";

class Testimony extends Component {
    render() {
        return (
            <div className="testimonial-all">
                <div className="testimonial-single">
                    <div className="single-card">
                        <div className="testimony-img">
                            <div className="image-text">
                                {this.props.label.toUpperCase()}
                            </div>
                            <img src={this.props.image} alt="testimony" />
                        </div>
                        <div className="testimony-content">
                            <div className="testimony-name">{this.props.name.toUpperCase()}</div>
                            <div className="testimony-stars">
                                <AiFillStar className="star-icon" />
                                <AiFillStar className="star-icon" />
                                <AiFillStar className="star-icon" />
                                <AiFillStar className="star-icon" />
                                <AiFillStar className="star-icon" />
                            </div>
                            <div className="testimony-statement">
                                {this.props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimony;
