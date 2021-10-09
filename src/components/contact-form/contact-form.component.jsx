import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


import './contact-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            message: ''
        }
    }

    updateStateFromProps() {
        if (this.props.currentUser) {
            this.setState((state, props) => ({
                displayName: this.props.currentUser.displayName,
                email: this.props.currentUser.email,
            }))
        } else {
            this.setState((state, props) => ({
                displayName: '',
                email: ''
            }))
        }
    }

    componentDidMount() {
        console.info("WE ARE MOUNITING!!!");

        this.updateStateFromProps();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.updateStateFromProps();
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        console.info("FOLLOWING DATA SUBMITTED: ", this.state);
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, message } = this.state;
        return (
            <div className='contact'>
                <form className='contact-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                        />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='message'
                        value={message}
                        onChange={this.handleChange}
                        label='Message'
                        required
                    />
                    <CustomButton type='submit'>Send</CustomButton>
                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(ContactForm);