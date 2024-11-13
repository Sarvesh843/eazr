import React from 'react';

// Define User type
interface User {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  profilePicture: string;
  address: string;
}

// Fetch user details directly
async function fetchUserDetails(id: string): Promise<User> {
  const dummyUser = {
    id: id,
    name: 'John Doe',
    email: 'john@example.com',
    contactNumber: '123-456-7890',
    profilePicture: 'https://via.placeholder.com/150',
    address: '123 Main St, Springfield, IL, 62701',
  };

  return dummyUser;
}

// Async Server Component to render the user profile
const UserProfile = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  // Fetch user data based on the id
  const user = await fetchUserDetails(id);

  return (
    <div style={{ padding: '32px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb', height: '100vh' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '24px', color: '#333' }}>
        User Profile
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        {/* Profile Picture */}
        <img
          src={user.profilePicture}
          alt="Profile"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '2px solid #d1d5db',
            marginRight: '24px', // Space between picture and details
          }}
        />

        {/* User Details */}
        <div>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            <strong>ID:</strong> {user.id}
          </p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            <strong>Name:</strong> {user.name}
          </p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            <strong>Contact Number:</strong> {user.contactNumber}
          </p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
