import { Button, Flex, FormLabel, Input } from "@chakra-ui/react"
import { RangeComponent } from "."
import React from "react"
import dayjs from "dayjs"
import { When } from "react-if"
import { ICalendarEvents, ICalendarProps } from "../components/entities/model/models"
import { createStore, useStore } from "zustand"

type dateValue = {
    startDate: string,
    endDate: string
}
interface DateRangeImplementationProps extends Partial<ICalendarProps> {
    value: dateValue,
    onCHange: (value: dateValue) => void
}

export const DateRangeImplementation = ({ value: _value, onCHange }: DateRangeImplementationProps) => {
    const [value, setValue] = React.useState<{
        startDate: string;
        endDate: string
    }>({
        startDate: "",
        endDate: ""
    })
    const [disabelDateBefore, setDisabelDateBefore] = React.useState("")
    const [disabelDateAfter, setDisabelDateAfter] = React.useState("")
    const [isNepali, setIsNepali] = React.useState<boolean>(false)


    // FUNCTIONS
    React.useEffect(() => {
        if (_value) {
            setValue(_value)
        }
    }, [_value])

    const handleToggleContext = () => {
        setIsNepali(prev => !prev)
    }

    const handleDisableDateBeforeChange = (e: any) => {
        setDisabelDateBefore(e.target.value)
    }

    const handleDiableDateAfterChange = (e: any) => {
        setDisabelDateAfter(e.target.value)
    }

    const isStartDateBeforeEndDate = (startDate: string, endDate: string) => {
        if (!startDate || !endDate) {
            return true
        }
        return dayjs(startDate).isBefore(endDate)
    }

    const error = isStartDateBeforeEndDate(value.startDate, value.endDate) ? "" : "error"

    return <Flex direction="column" gap={2}>
        {/* <pre>{JSON.stringify({
            value
        }, null, 2)}</pre> */}
        <Flex gap={2}>
            <Button size="sm" onClick={handleToggleContext}>Toggle Content (current: {isNepali ? "Nepali" : "English"})</Button>
            <Input placeholder="Disable Date Before" size="sm" value={disabelDateBefore} onChange={handleDisableDateBeforeChange} w="100px" />
            <Input placeholder="Disable Date After" size="sm" value={disabelDateAfter} onChange={handleDiableDateAfterChange} w="100px" />
        </Flex>

        <RangeComponent
            value={value}
            disabelDateAfter={disabelDateAfter}
            disabelDateBefore={disabelDateBefore}
            isNepali={isNepali}
            onChange={params => {

                const next = {
                    ...value,
                    ...(params.startDate && { startDate: params.startDate }),
                    ...(params.endDate && { endDate: params.endDate }),
                }
                setValue(next);
                onCHange(next)
            }}
            onError={error => console.log(error)}
        />
        <When condition={error}>
            <FormLabel color="red.600">{error}</FormLabel>
        </When>

    </Flex>
}


interface IRangeDateValue {
    startDate?: string;
    endDate?: string
}
interface IRangeProps extends Omit<ICalendarProps, "date" | "onChange" | "showToggle"> {
    value: IRangeDateValue,
    onChange?: (value: IRangeDateValue) => void
}

interface IRangeInternals {

}

interface IRangeEvents extends Pick<ICalendarEvents, "syncIsNepaliProps" | "syncDisableDateBeforeProps" | "syncDisableDateAfterProps"> {
    syncValueProps: (value: IRangeDateValue) => void;
    onChildDateSelection: (date: string, type: string) => void;
}

interface IRangeCtx extends IRangeProps, IRangeInternals {

}
interface IRangeStoreState {
    ctx: IRangeCtx,
    events: IRangeEvents
}


const DEFAULT_PROPS: IRangeProps = {
    value: {
        startDate: "",
        endDate: ""
    },
    isNepali: false,
    disableDateBefore: '',
    disableDateAfter: '',
    disabledWeekDays: [],
    holidays: [],
};

const INTERNAL_PROPS: IRangeInternals = {
};

const getEvents = (get: () => IRangeStoreState, set: (partial: IRangeStoreState | Partial<IRangeStoreState> | ((state: IRangeStoreState) => IRangeStoreState | Partial<IRangeStoreState>), replace?: boolean | undefined) => void): IRangeEvents => {
    return {
        onChildDateSelection: (date, type) => {
            console.log({ date, type })
        },
        syncValueProps: (value) => {
            set((state) => ({
                ctx: {
                    ...state.ctx,
                    value
                }
            }))
        },
        syncIsNepaliProps: (isNepali) => {
            set((state) => ({
                ctx: {
                    ...state.ctx,
                    isNepali
                }
            }))
        },
        syncDisableDateBeforeProps: (disableDateBefore) => {
            set((state) => ({
                ctx: {
                    ...state.ctx,
                    disableDateBefore
                }
            }))
        },
        syncDisableDateAfterProps: (disableDateAfter) => {
            set((state) => ({
                ctx: {
                    ...state.ctx,
                    disableDateAfter
                }
            }))
        }

    }
}

const createRangeStore = (initialProps: IRangeProps) => {
    return createStore<IRangeStoreState>((set, get) => ({
        ctx: {
            ...DEFAULT_PROPS,
            ...initialProps,
            ...INTERNAL_PROPS
        },
        events: getEvents(get, set)

    }));
}

const RangeStoreContext = React.createContext<ReturnType<
    typeof createRangeStore
> | null>(null);

interface RangeProviderProps extends React.PropsWithChildren {
}

const RangeProvider = ({ children, ...rest }: RangeProviderProps) => {
    const store = React.useRef(createRangeStore(rest as IRangeProps)).current;
    return (
        <RangeStoreContext.Provider value={store}>
            <Syncer {...rest} />
            {children}
        </RangeStoreContext.Provider>
    );
}

const useRangeStore = () => {
    const store = React.useContext(RangeStoreContext);
    if (store === null) {
        throw new Error('no provider');
    }

    return useStore(store);
}

const Syncer = (props: any) => {
    const state = useRangeStore();

    state.events
    const { syncIsNepaliProps, syncValueProps, syncDisableDateBeforeProps, syncDisableDateAfterProps } = state.events

    React.useEffect(() => {
        syncIsNepaliProps(props.isNepali);
    }, [props.isNepali, syncIsNepaliProps]);

    React.useEffect(() => {
        if (props.value) {
            syncValueProps(props.value);
        }
    }, [props.value, syncValueProps]);

    React.useEffect(() => {
        if (props.disableDateBefore) {
            syncDisableDateBeforeProps(props.disableDateBefore);
        }
    }, [props.disableDateBefore, syncDisableDateBeforeProps]);

    React.useEffect(() => {
        if (props.disableDateAfter) {
            syncDisableDateAfterProps(props.disableDateAfter);
        }
    }, [props.disableDateAfter, syncDisableDateAfterProps]);

    return <></>;
}





/**
 * categorize, tag and organize
 * 
 * -- props
 * value
 * isNepali
 * startDate
 * onChange
 * endDate
 * disableStartDate
 * disableEndDate
 * 
 * -- components
 * syncer
 * toggle locale context
 * 
 * -- store
 * provider
 * zustand singleton context
 * provider hook
 * zustand store
 * 
 * -- functions
 * error validation
 * react hook form bindings
 * 
 * -- methodologies
 * props getter pattern
 * component composition
 * component injection
 * 
 */