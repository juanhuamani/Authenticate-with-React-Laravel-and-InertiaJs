export const registerService = async (name , email, password) => {

    if (!email || !password || !name) {
        return { 
            status: 400, 
            data: { message: 'Email and password are required' } 
        };
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/auth/register' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name , email, password }),
        });

        return {
            status: response.status,
            data: await response.json()
        }
        
        
    } catch (error) {
        return error.response.data;
    }
        
}