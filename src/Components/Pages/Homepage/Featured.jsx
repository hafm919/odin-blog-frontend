function Featured() {
  return (
    <div className="h-5/6 w-full relative ">
      <img
        className="h-5/6 object-cover object-top w-full rounded-md relative "
        src="https://images.pexels.com/photos/30006377/pexels-photo-30006377/free-photo-of-grytviken-harbor-with-snowy-mountain-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ></img>
      <div className="bg-white absolute bottom-4 left-4 rounded-md p-8 max-w-full md:w-1/2 shadow-md">
        <h1 className="text-3xl font-sans font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing{" "}
        </h1>
        <div className="flex gap-2">
          <h3 className="font-sans text-gray-400">Hafeez Mohammed</h3>
          <h3 className="font-sans text-gray-400">August 20 2024</h3>
        </div>
      </div>
    </div>
  );
}

export default Featured;
