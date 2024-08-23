import Button from "./button";
import TextInput from "./textInput";
import TextField from "./textField";
export default function ContactMeForm() {
  return (
    <div className="">
      <h1 className="font-bold">Get in touch with.</h1>
      <p>
        If you are interested to contact with me. Send me an email, I'm looking
        forward to listen from you.
      </p>
      <div>
        <form action="" className="flex flex-col space-y-5">
          <TextInput
            type="text"
            placeholder="John Doe ..."
            onPress={() => {
              console.log("press");
            }}
          />
          <TextInput
            type="email"
            placeholder="example@email.com"
            onPress={() => {
              console.log("press");
            }}
          />
          <TextField />
          <Button text={"submit message"} />
        </form>
      </div>
    </div>
  );
}
