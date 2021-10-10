import React from "react";

import {CustomButtonContainer} from "./custom-botton.styles";

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;