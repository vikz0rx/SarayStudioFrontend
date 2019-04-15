import React from 'react';

class ResponsiveRender extends React.Component {
    constructor () {
        super();

        this.state = {
            width: window.innerWidth,
        };
    }
      
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
      
    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return this.props.mobileComponent;
        } else {
            return this.props.desktopComponent;
        }
    }
}

export default ResponsiveRender;