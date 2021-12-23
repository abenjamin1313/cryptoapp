import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: "",
    errorInfo: ""
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h5>Error: {this.state.error.toString()}</h5>  <br />
          <h5>Error Info: {this.state.errorInfo.componentStack}</h5> 
          <h5>Date Info: {this.state.date.toISOString()}</h5>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
