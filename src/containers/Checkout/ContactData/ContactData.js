import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Name'
                },
                validation :{
                    required: true
                },
                valid :false,
                value: '',
                touched: false
            },
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder: 'Your Mail'
                },
                validation :{
                    required: true
                },
                valid :false,
                value: '',
                touched: false
            },
            Street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Street'
                },
                validation :{
                    required: true
                },
                valid :false,
                value: '',
                touched: false
            },
            zipcode: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your ZIP Code'
                },
                validation :{
                    required: true
                },
                valid :false,
                value: '',
                touched: false
            },
            contact: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Contact'
                },
                validation :{
                    required: true
                },
                valid :false,
                value: '',
                touched: false
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig:{
                    options: [
                        {value : 'fastest', displayValue: 'Fastest'},
                        {value : 'cheapest', displayValue: 'Cheapest'}
                    ],
                    placeholder: 'Your Contact'
                },
                value: '',
                validation :{
                },
                valid :true
            }
        },
        isFormValid: false,
        loading: false,
    }

    checkValidity(value,rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading:true });
        const formOrder = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formOrder[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price:this.props.price,
            orderData: formOrder
        }
        Axios.post('/orders.json',order)
            .then( response => {
                this.setState({ loading:false });
                this.props.history.push('/');
            })
            .catch( error => 
                this.setState({ loading:false })
            );
    }

    inputChangedHandler = (event,inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched = true

        let isFormValid = true;
        for(let inputIdentifier in updatedOrderForm) {
            isFormValid = updatedOrderForm[inputIdentifier] && isFormValid;
        }

        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        this.setState({
            orderForm: updatedOrderForm,
            isFormValid: isFormValid
        });
    };

    render() {
        let formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {
                    formElementsArray.map(formElement => {
                        return (<Input 
                            key = {formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value = {formElement.config.value} 
                            changed = {(event)=> this.inputChangedHandler(event,formElement.id)} 
                            shouldValidate = {formElement.config.validation}
                            invalid = {!formElement.config.valid}
                            touched = {formElement.config.touched} />);
                    })
                }
                <Button btnType="Success" disabled = {!this.state.isFormValid}>ORDER</Button>
            </form>
        );

        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Details</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);