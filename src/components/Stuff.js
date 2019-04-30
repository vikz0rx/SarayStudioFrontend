import React from 'react';
import { connect } from 'react-redux';
import { getStuff } from '../actions/stuff';

class Stuff extends React.Component {
    constructor () {
        super();
    }

    componentDidMount = () => {
        this.props.getStuffAction()
    }

    render() {
        const { stuff } = this.props

        return (
            <section className='full-screen'>
                <div className='stuff-grid'>
                {
                    stuff.list.map((item, index) => (
                        <div className='stuff-item' key={index}>
                            <div className='stuff-item--image-container'>
                                <img src={item.image} className='stuff-item--image' />
                            </div>
                            <h6 className='stuff-name'>{item.name}</h6>
                            <div className='stuff-item--info'>
                                <p className='stuff-description'>{item.description}</p>
                            </div>
                            <h6 className='stuff-cost'>Стоимость: {item.rent_cost} руб./час</h6>
                        </div>
                    ))
                }
                </div>
            </section>
        )
    }
}

const mapStateToProps = store => {
    return {
        stuff: store.stuff,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStuffAction: () => dispatch(getStuff()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stuff);