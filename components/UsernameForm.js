import { useRef } from "react";

const UsernameForm = () => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "PUT",
      header: { "content-type": "application/json" },
      body: JSON.stringify(inputRef.current.value),
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className=" text-center" onSubmit={handleSubmit}>
        <h1 className="text-xl mb-1">Choose a username</h1>
        <input
          className="block px-3 mb-2 py-1 bg-themeLightGray rounded-full"
          type="text"
          placeholder="username"
          ref={inputRef}
        />
        <button className=" block bg-themeBlue w-full rounded-full py-1">
          Continue
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
