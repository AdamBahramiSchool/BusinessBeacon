# BusinessBeacon

BusinessBeacon is a web application designed to bridge the gap between businesses and consumers. By leveraging the power of Google Maps API, businesses can easily register and promote their ongoing deals, while consumers can effortlessly find and take advantage of promotions in their vicinity.

## Features

### Business Owners
- Register their establishment.
- Promote special deals or services.
- Appear as a beacon on the interactive map.

### Users
- Browse through different categories of businesses.
- Access an integrated map showing beacons of registered businesses.
- View detailed information about a business by clicking on its beacon.
- Access directions to the business using Google Maps' walk, bike, or transit options.

## Technology Stack

### Front-End
- **JavaScript Framework**: React.
- **Mapping**: Google Maps JavaScript API for dynamic map integration.
- **UI Framework**: Material-UI for a cohesive and responsive design.
- **Authentication**: Supabase Authentication for secure user sign-in.

### Back-End
- **Server Language**: Node.js combined with Express.js for a robust server setup.
- **Database**: Supabase for storing user and business data.
- **API Integration**: RESTful API for seamless data exchange between front-end and back-end.
- **Authentication**: Server-side authentication mechanisms for added security.

## Additional Features
- **Map Interactivity**: Users can click on business beacons to view more detailed information.
- **Directions API**: Integration with Google Directions API for providing users with precise navigation to the business location.
- **Dynamic Promotions**: Business promotions are time-sensitive, disappearing from the map after their set duration.

## Structure

### Webapp Flow:
1. **Login Screen**: Users can choose to register a business or view existing businesses.
   - **Business Registration**: Fill out business information including promotions, location, and category.
   - **User Viewing**: Select a category to view (e.g., restaurants, clothing stores) and access the map populated with relevant businesses.

### Map Screen:
- Click on business icons/markers to view detailed information in a standardized format.
- Access directions to the selected business, choosing from walking, transit, or driving routes.

### Business Lifecycle:
- Business promotions are time-limited, automatically expiring after their set duration (e.g., 72 hours).
