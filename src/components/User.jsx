// url to fetch https://reqres.in/api/users/:id
const User = () => {
  // update the user variable
  // fetch data when we click on an id in the home

  // show loading if we have not data fetched yet
  <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {/* user first name and last name */}
        </h2>
        <img
          className="w-32 h-32 mx-auto rounded-full border-2 border-gray-200 mb-2"
          src="user image???"
          alt="user id???"
        />
        <p className="text-gray-600 mb-4">{/* user email */}</p>
      </div>
    </div>
  );
};

export default User;
