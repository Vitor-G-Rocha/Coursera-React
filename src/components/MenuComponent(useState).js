import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Menu2(props) {

    const [dishState, setDishState] = useState({ props, selectedDish: null });    
  
    function onDishSelected(dish) {        
        setDishState({selectedDish: dish});        
    }

    function renderDish(dish) {                
        if (dish != null) {                        
            return (                                         
                <Card>
                    <CardImg width='100%' object='true' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }    
    
    const menu = props.dishes.map((dish) => {        
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1' style={{ cursor: "pointer" }}>
                <Card onClick={() => onDishSelected(dish)}>
                    <CardImg width='100%' object='true' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
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
            <div className='row'>
                {renderDish(dishState.selectedDish)}
            </div>
        </div>
    );

}

export default Menu2;