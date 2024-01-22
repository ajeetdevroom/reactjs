
class ClassComponentLifecycle extends React.Component {
    componentDidMount() {
        // Perform actions after component is mounted
        console.log('Component mounted');
    }
    componentDidUpdate(prevProps, prevState) {
        // Perform actions after component updates
        console.log('Component updated');
    }
    componentWillUnmount() {
        // Perform cleanup before component is unmounted
        console.log('Component will unmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Return true if the component should update, false otherwise
        // Custom logic here to determine whether re-render is necessary
        return true;
    }

    // -----------------------------------------------
    // It's important to note that the componentWillMount, componentWillReceiveProps, and componentWillUpdate lifecycle methods are considered legacy and may be deprecated in future versions of React. The recommended approach is to use componentDidMount, componentDidUpdate, and shouldComponentUpdate instead.
    // -----------------------------------
    render() {
        // Component rendering logic
        return 
        // JSX for the component
      
    }
}