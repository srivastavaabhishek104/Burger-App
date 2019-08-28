import React,{Component} from 'react';
import Aux from '../Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponents,axios) => {
    return class extends Component {
        state = {
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }


        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({
                    error :null
                })
                return req;
            });
            axios.interceptors.response.use(res => res,error => {
                this.setState({error : error});
            });
        }
        render(){
            return (
                <Aux>
                    <Modal 
                        show ={ this.state.error}
                        modalClosed = {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrappedComponents {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;