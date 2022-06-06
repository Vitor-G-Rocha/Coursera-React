import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetails from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width='100%' object='true' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                {/*Check if selectedDish is not null, if not render the component*/}
                {this.state.selectedDish != null ? <DishDetails selectedDish={this.state.selectedDish} /> : (<div></div>)}                
            </div>
        );
    }
}

export default Menu;