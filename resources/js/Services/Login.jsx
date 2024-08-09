
export const loginService = async (email, password) => {

    if (!email || !password) {
        return {
            status: 'error',
            message: 'Please enter your email and password'
        };
    }
    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });


        return {
            status: response.status,
            data: await response.json()
        }

    } catch (error) {
        return error.response.data;
    }
}