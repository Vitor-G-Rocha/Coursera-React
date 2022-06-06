import React, { Component } from 'react';
import { Card, CardGroup, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    formatDate(string) {
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        var dateObj = new Date(string);
        var month = dateObj.getUTCMonth();
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        return `${monthNames[month]} ${day}, ${year}`;
    }

    renderComments(comments) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map((item) => {
                    return (
                        <ul key={item.id} className='list-unstyled'>
                            <li className='mb-1'>{item.comment}</li>
                            <li>-- {item.author} {this.formatDate(item.date)}</li>
                        </ul>);
                })}
            </div>
        );
    }

    renderDish(dish) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' object='true' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h1>{dish.name}</h1></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }


    render() {

        return (
            <div className='container'>
                <div className='row'>
                    {this.props.dish == undefined ? <div></div> : this.renderDish(this.props.dish)}
                    {this.props.dish == undefined ? <div></div> : this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;