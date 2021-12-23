import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false };
    }

    static getDerivedStateFromError() {
        console.log('get derived error fired');
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('component did catch fired')
    }

    render() {
        if (this.state.hasError) {
            return <div>A Error Occured</div>
        }
        return this.props.children;
    }
}
