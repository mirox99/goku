import { currentSession } from "./services/auth";

/**
 * A wrapper around the Fetch API that includes default headers.
 *
 * @param {string} url The URL to request.
 * @param {Object} options Additional options for the fetch call.
 * @returns {Promise<Response>} The response from the fetch call.
 */

export async function apiFetch(url, options = {}) {
    // Default headers that will be included in every request
    const { accessToken } = await currentSession();

    const defaultHeaders = {
        'Content-Type': 'application/json', // Include other default headers here
        "Authorization": `Bearer ${ accessToken }`
    };

    // Merge default headers with any headers provided in options
    const headers = {
        ...defaultHeaders, ...options.headers,
    };

    // Perform the fetch call with merged headers and options
    return fetch(url, {
        ...options, headers,
    }).then(response => {
        console.log(response, 'responssdse');
        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! status: ${ response.status }`);
        }
        return response.json(); // Assuming the server response is JSON
    }).catch(error => {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error for further handling if needed
    });
}
