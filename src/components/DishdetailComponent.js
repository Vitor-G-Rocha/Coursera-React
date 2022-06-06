import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function FormatDate(string) {
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

function RenderComments({ comments }) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            {comments.map((item) => {
                return (
                    <ul key={item.id} className='list-unstyled'>
                        <li className='mb-1'>{item.comment}</li>
                        <li>-- {item.author} {FormatDate(item.date)}</li>
                    </ul>);
            })}
        </div>
    );
}

function RenderDish({ dish }) {
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


const DishDetail = (props) => {
    
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    }
}


export default DishDetail;