import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { RadioGroupProps } from './interface';
import { RigoRadioGroupContext } from './rigo-radio-group-context';

export const RigoRadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    components = {
      wrapper: ({ children }: any) => {
        return (
          <Flex gap={2} direction={props.direction ?? 'column'}>
            {children}
          </Flex>
        );
      },
      item: ({ state, option, isInvalid, isDisabled, ...rest }: any) => {
        return (
          <Flex
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            opacity={isDisabled ? 0.5 : 1}
            alignItems='center'
            onClick={(e: any) => {
              isDisabled && e.preventDefault();
            }}
            gap={2}
            {...rest}
          >
            <Box
              {...rest}
              rounded='full'
              border='2px solid'
              w={4}
              h={4}
              borderColor='gray.300'
              bg={isInvalid ? 'red.500' : '#fff'}
              _checked={{ borderColor: 'blue.500', borderWidth: 4 }}
            />
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
