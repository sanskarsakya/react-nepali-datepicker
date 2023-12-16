import { useEffect } from 'react';
import * as fromProvinceStore from './entities/model/province/use-province-store';
export const Watcher = (props: any) => {
    const { watch, reset } = props;

    // const fetchProvince = fromProvinceStore.useProvinceStore(fromProvinceStore.fetch)

    useEffect(() => {
        const subscription =
            watch &&
            watch((value: any, { name }: any) => {
                if (name === "country") {
                     
                    // fetchProvince(value[name].value)
                    // reset({
                    //     ...value,
                    //     province: null
                    // })
                }
            });

        return () => subscription.unsubscribe();
    }, [watch]);

    return <></>;
};
