import Cookies from 'js-cookie';

const CookieStorage = {
    /**
     * Lưu token vào cookie
     * @param key
     * @param value
     * @param options 
     */
    setItem: (
        key: string,
        value: string,
        options?: Cookies.CookieAttributes
    ): void => {
        const defaultOptions: Cookies.CookieAttributes = {
            expires: 7,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',

            ...options,
        };

        Cookies.set(key, value, defaultOptions);
    },

    /**
     * Lấy token từ cookie
     * @param key 
     * @returns
     */
    getItem: (key: string): string | null => {
        return Cookies.get(key) || null;
    },

    /**
     * Xóa cookie
     * @param key
     */
    removeItem: (key: string): void => {
        Cookies.remove(key);
    },

    /**
     * Xóa tất cả cookies
     */
    clearAuth: (): void => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
    },
};

export default CookieStorage;