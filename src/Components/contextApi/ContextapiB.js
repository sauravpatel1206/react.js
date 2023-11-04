import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../utils/context';

export const ContextapiB = () => {
    let userName = useContext(ThemeContext);

    console.log("data-this used in function compo", userName)
    return (
    <>

        <ThemeContext.Consumer>
            {
                (data) => {
                    console.log("data-this used in class compo", data)
                }
            }
        </ThemeContext.Consumer>
        <div>ContextapiB</div>
    </>
    )
}
