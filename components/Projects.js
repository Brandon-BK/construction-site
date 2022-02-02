const Projects = () => {
  return (
    <div
      style={{
        fontFamily: "Verdana,sans-serif",
        fontSize: "15px",
        lineHeight: "1.5",
        padding: "8px 16px",
      }}
    >
      {/* heading */}
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
          Projects
        </h3>
      </div>

      {/* picture row */}
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house5.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Summer House
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house2.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Brick House
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house3.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Renovated
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house4.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Barn House
          </div>
        </div>
      </div>


            {/* picture row */}
            <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house2.jpg"
            style={{
              width: "309.23px",
              height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Summer House
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house5.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Brick House
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house4.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Renovated
          </div>
        </div>

        <div
          style={{
            margin: "0px 8px 16px 8px",
            position: "relative",
          }}
        >
          <img
            src="https://www.w3schools.com/w3images/house3.jpg"
            style={{
                width: "309.23px",
                height: "205.94px",
            }}
          />

          <div
            style={{
              color: "white",
              background: "black",
              padding: "8px 16px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            Barn House
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
