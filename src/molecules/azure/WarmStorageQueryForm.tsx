import {
  //Action,
  //ActionGroup,
 // classSet,
  Input,
  //useState,
  type JSX,
} from "../../src.deps.ts";

// Assuming you have some method for sending POST requests
// const postQueryData = async (data: Record<string, string>) => {
//   const response = await fetch("/your-endpoint", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json(); // Or handle the response accordingly
// };

//export type WarmStorageQueryFormProps = {
  //query?: string;
  //lookup?: string;
//} & JSX.HTMLAttributes<HTMLFormElement>;

export default function WarmStorageQueryForm(
 // props: WarmStorageQueryFormProps,
): JSX.Element {
  // State for modal visibility and form data
 // const [isModalOpen, setIsModalOpen] = useState(false);
  //const [queryName, setQueryName] = useState("");
  //const [queryLookup, setQueryLookup] = useState("");

  // Function to toggle modal visibility
 // const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to handle Save button click
 // const handleSave = () => {
    // Check if props.query is a Symbol, and handle accordingly
    //const queryValue = typeof props.query === "symbol" ? String(props.query) : props.query || "";

    // Create the data object for the POST request
    // const data: Record<string, string> = {
    //   queryName,
    //   queryLookup,
    //   query: queryValue,  // Ensure props.query is safely handled as a string
    // };

    // // Send the POST request
    // const response = await postQueryData(data);
    
    // // Handle the response as necessary (e.g., showing success or error)
    // console.log(response);
    
    // Close the modal after saving
    //setIsModalOpen(false);
 // };

  return (
      <form
        method="post"
        //{...props}
        //class={classSet(
        //  ["-:w-full -:max-w-sm -:md:max-w-md -:mx-auto -:p-3 -:mt-8"],
        //  props,
        //)}
      >
        <div>
          <div>
            <div>
              <label
                for="query"
                //class="block uppercase tracking-wide font-bold mb-2 text-lg text-left"
              >
                Query
              </label>

              <Input
                id="query"
                name="query"
                type="text"
               // value={typeof props.query === "symbol" ? String(props.query) : props.query || ""}  // Check for Symbol and handle accordingly
                multiline
                required
                placeholder="Enter warm storage query"
              />
            </div>
          </div>
        </div>

  
      </form>

     
  );
}
