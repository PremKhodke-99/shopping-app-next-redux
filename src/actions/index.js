"use server"

//get all products

export async function fetchAllProducts() {
    try {
        const result = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await result.json();

        return {
            success: true,
            data: data?.products,
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Some error occured! Please try again."
        }
    }
}

export async function fetchProductDetails(currentProductId){
    try {
        const result = await fetch(`https://dummyjson.com/products/${currentProductId}`,{
            method: 'GET',
            cache: 'no-store'
        });
        const data = await result.json();
        return data;
        
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Some error occured! Please try again."
        }
    }
}