import React, { useEffect } from 'react';

const FunctionalCmp = () => {
    useEffect(() => {
        // componentDidMount
        // This code runs after the component has mounted
        console.log('Component mounted');
        
        // You can return a cleanup function if needed
        return () => {
          console.log('Component will unmount');
        };
      }, []); // The empty dependency array means this effect runs only once (equivalent to componentDidMount)
    
      useEffect(() => {
        // componentDidUpdate
        // This code runs after each render
        console.log('Component updated');
        
        // You can return a cleanup function if needed
        return () => {
          console.log('Component will unmount');
        };
      }); // No dependency array means this effect runs after each render
    
      useEffect(() => {
        // componentWillUnmount:
        // This code runs when the component is about to unmount
        console.log('Component will unmount');
        
        // You can return a cleanup function if needed
        return () => {
          // Cleanup logic
        };
      }, []); // The empty dependency array means this effect runs only once (equivalent to componentWillUnmount)
    
      // Component rendering logic
    return (
        <div>
            // JSX for the component
        </div>
    );
};

export default FunctionalCmp;