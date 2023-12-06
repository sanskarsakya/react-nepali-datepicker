
export async function apiSimulator(data: any, delay: number = 2000) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        }, delay);
    });
}