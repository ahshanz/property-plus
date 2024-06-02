import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/search
export const GET = async (request) => {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request URL
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    // Create a case-insensitive regex pattern for location
    const locationPattern = new RegExp(location, 'i');

    // Build the query to match location fields
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
        { 'location.zipcode': locationPattern },
      ],
    };

    // If propertyType is defined and not 'All', add it to the query
    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i');
      query.type = typePattern;
    }

    // Fetch properties matching the query
    const properties = await Property.find(query);

    // Log the search parameters (for debugging)
    console.log(location, propertyType);

    // Return the properties in the response
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    // Log the error (for debugging)
    console.error(error);

    // Return an error response
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};
