import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
import { ChakraProvider } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
export default {
    title: "Base/Atoms/Button/Size",
    component: RigoButton,
};

export const SM = () => {
    return (
        <ChakraProvider>
            <RigoButton buttonType="primary" buttonSize="sm" onClick={action("clicked")}>
                Small Button
            </RigoButton>
        </ChakraProvider>
    );
};
export const MD = () => {
    return (
        <ChakraProvider>
            <RigoButton buttonType="primary" buttonSize="md" onClick={action("clicked")}>
                Medium Button
            </RigoButton>
        </ChakraProvider>
    );
};

export const LG = () => {
    return (
        <ChakraProvider>
            <RigoButton buttonType="primary" buttonSize="lg" onClick={action("clicked")}>
                Large Button
            </RigoButton>
        </ChakraProvider>
    );
};

export const Full = () => {
    return (
        <ChakraProvider>
            <RigoButton buttonType="primary" buttonSize="full" onClick={action("clicked")}>
                Full Button
            </RigoButton>
        </ChakraProvider>
    );
};
