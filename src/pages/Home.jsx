const Home = () => {
  // manage the users data
  // fetch data from "https://reqres.in/api/users" when the page loads

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-2xl p-5">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Users</h1>
        <ul className="space-y-4">
          {/* 
          // list of users with first and last names
          // a single user has className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center"
          // when we click on a single user, a link we'll bring us to the user page
          // the link needs a className="text-gray-800 hover:text-gray-600 transition-colors"
          */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
