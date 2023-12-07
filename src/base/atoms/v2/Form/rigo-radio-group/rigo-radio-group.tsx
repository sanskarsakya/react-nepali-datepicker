import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { RadioGroupProps } from "./interface";
import { RigoRadioGroupContext } from "./rigo-radio-group-context";

export const RigoRadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    components = {
      wrapper: ({ children }: any) => {
        return (
          <Flex gap={2} direction='column'>
            {children}
          </Flex>
        );
      },
      item: ({ state, option, isInvalid, isDisabled, ...rest }: any) => {
        return (
          <Flex
            cursor={isDisabled ? "not-allowed" : "pointer"}
            opacity={isDisabled ? 0.5 : 1}
            alignItems='center'
            onClick={(e: any) => {
              isDisabled && e.preventDefault();
            }}
            gap={2}
            {...rest}
          >
            {state?.isChecked ? (
              <Box {...rest} bg='blue.500' p={1} rounded='full' />
            ) : (
              <Box
                {...rest}
                p={1}
                rounded='full'
                bg={isInvalid ? "red.500" : "gray.200"}
              />
            )}
            <Text>{option.label}</Text>
          </Flex>
        );
      },
    },
    ...rest
  } = props;

  return (
    <RigoRadioGroupContext.Provider
      value={{
        ...rest,
        components,
      }}
    >
      {children}
    </RigoRadioGroupContext.Provider>
  );
};

export default RigoRadioGroup;
