import React from 'react'

class ClassBased extends React.Component{

constructor(props){
    super(props)
    console.log("we are in constrctor")
}


    render(){
       console.log("we are in render")
        return(
            <div>Hello this is class component</div>
        )
    }
}

export default ClassBased;
