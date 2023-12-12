import { useEffect } from 'react';

export const Watcher = (props: any) => {
    const { watch, watchChange } = props;
    useEffect(() => {
        const subscription =
            watch &&
            watch((value: any, { name }: any) => {
                watchChange({ name, value:value[name] })
            });

        return () => subscription.unsubscribe();
    }, [watch, watchChange]);

    return <></>;
};
