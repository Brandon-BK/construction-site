const Contact = () => {
  return (
    <div
      style={{
        fontFamily: "Verdana,sans-serif",
        fontSize: "15px",
        lineHeight: "1.5",
        padding: "8px 16px",
      }}
    >
      <div
        style={{
          padding: "32 16px",
        }}
      >
        <h3
          style={{
            padding: "10px 0px",
            margin: "16px 0px",
            borderBottom: "1px #f1f1f1 solid",
            fontWeight: "400",
            fontSize: "24px",
          }}
        >
          Contact
        </h3>
      </div>

      <p>Lets get in touch and talk about your next project.</p>

      <form>
        <input
          placeholder="Name"
          style={{
            padding: "8px",
            width: "100%",
            font: "inherit",
            display: "block",
            margin: "16px 0px 16px 0px",
            // border:"none",
            border: "1px solid #ccc!important",
          }}
        />
        <input
          placeholder="Email"
          style={{
            padding: "8px",
            width: "100%",
            font: "inherit",
            display: "block",
            margin: "16px 0px 16px 0px",
            border: "1px solid #ccc!important",
          }}
        />
        <input
          placeholder="Subject"
          style={{
            padding: "8px",
            width: "100%",
            font: "inherit",
            display: "block",
            margin: "16px 0px 16px 0px",
            border: "1px solid #ccc!important",
          }}
        />
        <input
          placeholder="Comment"
          style={{
            padding: "8px",
            width: "100%",
            font: "inherit",
            display: "block",
            margin: "16px 0px 16px 0px",
            border: "1px solid #ccc!important",
          }}
        />

        <button
          style={{
            border: "none",
            display: "inline-block",
            padding: "16px 16px",
            verticalAlign: "middle",
            overflow: "hidden",
            textDecoration: "none",
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};




export default Contact;
