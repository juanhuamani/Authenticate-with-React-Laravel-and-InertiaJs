export const logoutService = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return { status: 401, data: { message: 'Unauthorized' } };
    }
    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return {
            status: response.status,
            data: await response.json()
        }

    } catch (error) {
        return {
            status: 500,
            data: {
                message: error.message
            }
        }
    }
}